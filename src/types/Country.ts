export type Country = {
  name: {
    common: string,
    official: string,
    nativeName: { [id: string]: { official: string, common: string } }
  },
  tld: string[],
  cca2: string,
  ccn3: string,
  cca3: string,
  cioc: string,
  independent: boolean,
  status: string,
  unMember: boolean,
  currencies: { [id: string]: { name: string, symbol: string } },
  idd: {
    root: string,
    suffixes: string[]
  },
  capital: string[] | undefined,
  altSpellings: string[],
  region: string,
  subregion: string,
  languages: { [id: string]: string },
  translations: { [id: string]: { official: string, common: string } },
  latlng: [number, number],
  landlocked: boolean,
  borders: string[],
  area: number,
  demonyms: { [id: string]: { f: string, m: string } },
  flag: string,
  maps: {
    googleMaps: string,
    openStreetMaps: string
  },
  population: number,
  gini: { [id: string]: number },
  fifa: string,
  car: {
    signs: string[],
    side: string
  },
  timezones: string[],
  continents: string[],
  flags: {
    png: string,
    svg: string
  },
  coatOfArms: {
    png: string,
    svg: string
  },
  startOfWeek: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday",
  capitalInfo: {
    latlng: [number, number]
  },
  postalCode: {
    format: string,
    regex: string
  }
}