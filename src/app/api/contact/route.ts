import nodemailer from "nodemailer";
import { siteContact } from "@/lib/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  newsletter?: unknown;
  service?: unknown;
};

function textValue(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function boolValue(value: unknown) {
  return value === true;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ message: "Hibás űrlapadat." }, { status: 400 });
  }

  const name = textValue(payload.name, 120);
  const email = textValue(payload.email, 180);
  const phone = textValue(payload.phone, 80);
  const message = textValue(payload.message, 3000);
  const service = textValue(payload.service, 120) || "Egyéb";
  const newsletter = boolValue(payload.newsletter);

  if (!email || !isEmail(email)) {
    return Response.json({ message: "Érvényes e-mail cím szükséges." }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT ?? "465");
  const smtpSecure = (process.env.SMTP_SECURE ?? "true") !== "false";
  const contactTo = process.env.CONTACT_TO ?? siteContact.email;
  const contactFrom = process.env.CONTACT_FROM ?? `"Cherry Kozmetika weboldal" <${smtpUser ?? siteContact.email}>`;

  if (!smtpUser || !smtpPass) {
    return Response.json(
      { message: "Az e-mail küldés még nincs beállítva a szerveren." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  // Személyes adat nem kerülhet GA4/GTM event paraméterbe; ezeket kizárólag az Anitának küldött e-mail tartalmazza.
  const emailBody = [
    "Új érdeklődő érkezett a Cherry Kozmetika weboldaláról.",
    "",
    `Szolgáltatás: ${service}`,
    `Név: ${name || "-"}`,
    `Email: ${email}`,
    `Telefonszám: ${phone || "-"}`,
    "",
    "Üzenet:",
    message || "-",
    "",
    `Hírlevél és ajánlatok hozzájárulás: ${newsletter ? "igen" : "nem"}`,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: contactFrom,
      to: contactTo,
      replyTo: email,
      subject: "Új kapcsolatfelvétel - Cherry Kozmetika",
      text: emailBody,
    });
  } catch {
    return Response.json(
      { message: "Az üzenet küldése most nem sikerült. Kérjük, próbálja meg később." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
