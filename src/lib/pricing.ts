export type PriceRow = {
  name: string;
  description?: string;
  time?: string;
  price?: string;
  group?: string;
  isNote?: boolean;
};

export type PriceTable = {
  title: string;
  rows: PriceRow[];
};

export const priceTables: PriceTable[] = [
  {
    title: "Gyantázás",
    rows: [
      { name: "Szemöldök", price: "1.500.-Ft" },
      { name: "Áll + bajusz", price: "1.500.-+1.000.-Ft" },
      { name: "Arc két oldalt", price: "2.500.-Ft" },
      { name: "Hónalj", price: "3.000.-Ft" },
      { name: "Kar ( könyékig )", price: "2.500.-Ft" },
      { name: "Kar ( végig )", price: "3.000.-Ft" },
      { name: "Láb ( térd vagy comb )", price: "3.500.-Ft" },
      { name: "Láb ( végig )", price: "5.000.-Ft" },
      { name: "Bikini", price: "3.000.-Ft" },
      { name: "Fazon", price: "7.000.-Ft" },
      { name: "Teljes intim / fenék nélkül", price: "8.000.-/ 7.000.-Ft" },
      { name: "Csak fenék", price: "2.000.-Ft" },
      { name: "Mellkas", price: "9.000.-Ft" },
      { name: "Has", price: "8.000.-Ft" },
      { name: "Hát", price: "10.000.-Ft" },
    ],
  },
  {
    title: "Festés",
    rows: [
      { name: "Szemöldök", price: "1.700.-Ft" },
      { name: "Szempilla", price: "1.800.-Ft" },
      { name: "Henna festés", description: "Formázással", price: "5.500.-Ft" },
      { name: "Henna festés", description: "Igazítással", price: "6.000.-Ft" },
      { name: "Szempilla lifting / festéssel", group: "Lifting", price: "9.000.-/ 11.000.-Ft" },
      { name: "Szemöldök laminálás / festéssel", group: "Laminálás", price: "8.000.-/ 10.000.-Ft" },
    ],
  },
  {
    title: "Masszázsok",
    rows: [
      {
        name: "Arcmasszázs",
        description: "Letisztítás, masszázs, arctípusnak megfelelő befejezőkrém",
        time: "30 perc",
        price: "6.000.-Ft",
      },
      {
        name: "Full masszázs",
        description: "Arc, nyak, dekoltázs masszázs",
        time: "45 perc",
        price: "9.500.-Ft",
      },
      {
        name: "Express arckezelés",
        description: "Letisztítás, peeling, arcmaszk, zárókrém",
        time: "40 perc",
        price: "12.000.-Ft",
      },
      {
        name: "Mélyhidratáló arckezelés",
        description: "Letisztítás, peeling, arcmasszázs, szérum, bőrtípusnak megfelelő gumimaszk, zárókrém",
        time: "kb. 80 perc",
        price: "15.500.-Ft",
      },
      {
        name: "Full mélyhidratáló kezelés",
        description: "Arc+nyak+dekoltázs",
        time: "kb. 90 perc",
        price: "19.000.-Ft",
      },
      {
        name: "Tisztító kezelés / Tini kezelés",
        description:
          "Letisztító kezelés, peeling, vapozon (gőz), comedók eltávolítása, fertőtlenítés VIO-val, tonizálás, összehúzónyugtató maszk, utóápolás",
        time: "90 perc",
        price: "15.000.-Ft",
      },
      {
        name: "Hát kezelés",
        description: "Letisztítás, peeling sugar papaya scurb, gőz, comedók eltávolítása, összehúzó pakolás, befejező krém",
        time: "kb. 90 perc",
        price: "16.000.-Ft",
      },
      {
        name: "Anti-aging kezelés",
        description:
          "Letisztítás, hidroabrázió, melegvasaló, ultrahangos hatóanyag bevitel, arcmasszázs, gumimaszk pakolás, arany biobotox maszk, záró szérum és krém",
        time: "kb. 90 perc",
        price: "22.000.-Ft",
      },
      {
        name: "Rapid kezelés / Arc+dekoltázs",
        description: "Letisztítás, peeling, RF kezelés, bőrtípusnak megfelelő maszk, zárókrém",
        price: "14.500.- / 18.500.-Ft",
      },
      {
        name: "Extra feltöltés arcra",
        description:
          "Letisztítás, peeling, RF gépi feszesítés, melegvasaló, hatóanyag bevitel ultrahanggal, arcmasszázs, LED színterápiás maszk, zárószérum és krém",
        time: "kb. 70 perc",
        price: "23.500.-Ft",
      },
      {
        name: "Extra feltöltés",
        description: "Arc+nyak+dekoltázs",
        time: "kb. 90 perc",
        price: "28.000.-Ft",
      },
      {
        name: "Ultrahangos arckezelés",
        description: "Letisztítás, peeling, ultrahangos hatóanyag bevitel, zárókrém",
        time: "kb. 30 perc",
        price: "12.000.-Ft",
      },
      {
        name: "UH kezelés",
        description: "Arc+nyak+dekoltázs",
        time: "kb. 45 perc",
        price: "14.500.-Ft",
      },
    ],
  },
  {
    title: "Fényterápia",
    rows: [
      {
        name: "Rapid LED fényterápia",
        description: "Letisztítás, maszk használat, zárókrém-1 alkalom",
        time: "20 perc",
        price: "4.000.-Ft",
      },
      { name: "6 alkalom-heti kétszeri kúra", price: "22.000.-Ft" },
      { name: "10 alkalom-heti kétszeri kúra", price: "36.000.-Ft" },
      {
        name: "Kezelések mellé kérhető extrák",
        description: "Kizárólag arckezelések mellé kérhető, az ár felszámolásra kerül a kezelés ára mellé.",
        isNote: true,
      },
      { name: "+Arcmasszázs", price: "3.500.-Ft" },
      { name: "+Arc+nyak + dekoltázs masszázs", price: "4.000.-Ft" },
      { name: "+Gumimaszk", price: "3.500.-Ft" },
      { name: "+Szemkörnyéki biobotox aranymaszk", price: "3.000.-Ft" },
      { name: "+ Hidroabrázió / Ultrahang", price: "4.000.-Ft" },
      { name: "+ Hát peeling", price: "3.000.-Ft" },
      { name: "+ LED maszk", description: "Pakolás felszívódását segítő", price: "3.500.-Ft" },
    ],
  },
  {
    title: "Szempilla építés",
    rows: [
      { name: "1D pilla építése", price: "7.000.-Ft" },
      {
        name: "Töltés",
        description: "2 / 3 héten belül-3 hét után teljes szett kerül felszámításra",
        price: "4.000.-/ 5.500.-Ft",
      },
      { name: "2D pilla építése", price: "9.000.-Ft" },
      {
        name: "Töltés",
        description: "2 / 3 héten belül-3 hét után teljes szett kerül felszámításra",
        price: "6.000.-/ 7.500.-Ft",
      },
      { name: "3D pilla építése", price: "11.000.-Ft" },
      {
        name: "Töltés",
        description: "2 / 3 héten belül-3 hét után teljes szett kerül felszámításra",
        price: "8.000.-/ 9.000.-Ft",
      },
      { name: "Szempilla leoldása", price: "3.000.-Ft" },
    ],
  },
];
