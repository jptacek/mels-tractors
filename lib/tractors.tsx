/**
 * This file contains the data for the tractors 
 */
export interface TractorInfo {
  slug: number;
  file: string;
  make: string;
  model: string;
  type: string;
  years: string;
  height: string;
  length: string;
  weight: string;
  prop: string;
  engine: string;
  pto: string;
  grossPower: string;
  dbPower: string;
  dbPull: string;
  ntllScore: string;
  serialNumber: string;
  jtn: string;
  birthYear: string;
}

const tractorInfo=[
    {
      slug: 0,
      file: "3510",
      make: "Allis-Chalmers",
      model: "C",
      type: "Row crop",
      years: "40-'49",
      height: "76.75\"",
      length: "110.25\"",
      weight: "2.5K lbs",
      prop: "Rear",
      engine: "Allis-Chalmers CE",
      pto: "23.3 HP",
      grossPower: "21 HP",
      dbPower: "18.4 HP",
      dbPull: "2.3K lbs",
      ntllScore: "363",
      serialNumber: "zz",
      jtn: "1",
      birthYear: ""
    },
    {
        slug: 1,
      file: "3515",
      make: "Ferguson",
      model: "TO-35",
      type: "Utility",
      years: "54-'60",
      height: "57\"",
      length: "117\"",
      weight: "3.2K lbs",
      prop: "Rear",
      engine: "SDC 2.3L Diesel",
      pto: "32 HP",
      grossPower: "33 HP",
      dbPower: "30.5 HP",
      dbPull: "3.4K lbs",
      ntllScore: "690",
      serialNumber: "194014",
      jtn: "2",
      birthYear: "1959"
    },
    {
        slug: 2,
      file: "3519",
      make: "Case",
      model: "VC",
      type: "Row crop",
      years: "40-'42",
      height: "56\"",
      length: "105.5\"",
      weight: "4.3K lbs",
      prop: "Rear",
      engine: "Continental 2L Gas",
      pto: "24 HP",
      grossPower: "20.5 HP",
      dbPower: "16 HP",
      dbPull: "2.2K lbs",
      ntllScore: "423",
      serialNumber: "",
      jtn: "3",
      birthYear: "1941"
    },
    {
        slug: 3,
      file: "35235",
      make: "Ferguson",
      model: "TO-30",
      type: "Utility",
      years: "51-'54",
      height: "57\"",
      length: "116.5\"",
      weight: "2.8K lbs",
      prop: "Rear",
      engine: "Continental 2L Gas",
      pto: "28 HP",
      grossPower: "30 HP",
      dbPower: "24 HP",
      dbPull: "3K lbs",
      ntllScore: "466",
      serialNumber: "129766",
      jtn: "4",
      birthYear: "1954"
    },
    // {
    //     slug: 4,
    //   file: "3526-3527",
    //   make: "?",
    //   model: "",
    //   type: "",
    //   years: "",
    //   height: "",
    //   length: "",
    //   weight: "",
    //   prop: "",
    //   engine: "",
    //   pto: "",
    //   grossPower: "",
    //   dbPower: "",
    //   dbPull: "",
    //   ntllScore: "zz",
    //   serialNumber: "",
    //   jtn: "5",
    //   birthYear: ""
    // },
    {
        slug: 5,
      file: "3528",
      make: "John Deere",
      model: "B",
      type: "Row crop",
      years: "48-'52",
      height: "56\"",
      length: "120.5\"",
      weight: "4.4K lbs",
      prop: "Rear",
      engine: "JD 3L 2-cyl",
      pto: "",
      grossPower: "28 HP",
      dbPower: "24.6 HP",
      dbPull: "3.5K lbs",
      ntllScore: "380",
      serialNumber: "",
      jtn: "6",
      birthYear: ""
    },
    {
        slug: 6,
      file: "3531",
      make: "John Deere",
      model: "B",
      type: "Row crop",
      years: "48-'52",
      height: "56\"",
      length: "120.5\"",
      weight: "4.4K lbs",
      prop: "Rear",
      engine: "JD 3L 2-cyl",
      pto: "",
      grossPower: "28 HP",
      dbPower: "24.6 HP",
      dbPull: "3.5K lbs",
      ntllScore: "380",
      serialNumber: "",
      jtn: "7",
      birthYear: ""
    },
    {
        slug: 7,
      file: "3532",
      make: "Ford",
      model: "9N",
      type: "Utility",
      years: "39-'42",
      height: "52\"",
      length: "115\"",
      weight: "3K lbs",
      prop: "Rear",
      engine: "Ford 2L 4-cyl",
      pto: "26 HP",
      grossPower: "23.5 HP",
      dbPower: "16.3 HP",
      dbPull: "2.2K lbs",
      ntllScore: "339",
      serialNumber: "",
      jtn: "8",
      birthYear: ""
    },
    {
        slug: 8,
      file: "3534",
      make: "Case",
      model: "VC",
      type: "Row crop",
      years: "40-'42",
      height: "56\"",
      length: "105.5\"",
      weight: "4.3K lbs",
      prop: "Rear",
      engine: "Continental 2L Gas",
      pto: "24 HP",
      grossPower: "20.5 HP",
      dbPower: "16 HP",
      dbPull: "2.2K lbs",
      ntllScore: "423",
      serialNumber: "",
      jtn: "9",
      birthYear: ""
    },
    {
        slug: 9,
      file: "3536",
      make: "John Deere",
      model: "A",
      type: "Row crop",
      years: "47-'52",
      height: "60\"",
      length: "134\"",
      weight: "5K lbs",
      prop: "Rear",
      engine: "JD 5L 2-cyl",
      pto: "",
      grossPower: "",
      dbPower: "",
      dbPull: "",
      ntllScore: "384",
      serialNumber: "546632",
      jtn: "10",
      birthYear: "1945"
    },
    {
        slug: 10,
      file: "3538",
      make: "John Deere",
      model: "B",
      type: "Row crop",
      years: "48-'52",
      height: "56\"",
      length: "120.5\"",
      weight: "4.4K lbs",
      prop: "Rear",
      engine: "JD 3L 2-cyl",
      pto: "",
      grossPower: "28 HP",
      dbPower: "24.6 HO",
      dbPull: "3.5K lbs",
      ntllScore: "380",
      serialNumber: "240767",
      jtn: "11",
      birthYear: "1949"
    },
    {
      slug: 11,
      file: "3540",
      make: "John Deere",
      model: "A",
      type: "Row crop",
      years: "47-'52",
      height: "60\"",
      length: "134\"",
      weight: "5K lbs",
      prop: "Rear",
      engine: "JD 5L 2-cyl",
      pto: "",
      grossPower: "",
      dbPower: "",
      dbPull: "",
      ntllScore: "384",
      serialNumber: "?",
      jtn: "12",
      birthYear: ""
    }
   ]

/**
 * Slug is the unique identifier for a tractor. It can be used to generate
 *   the static properties
 * @returns {Promise<string[]>}  list of slugs for the tractors
 */
export async function getSlugs(): Promise<number[]> {
  return tractorInfo.map((tractor) => tractor.slug);
}

export async function getTractor(slug: number) : Promise<TractorInfo| undefined> {
  console.log(`[getTractor] ${slug} ${typeof slug}`);
  
  const tractor: TractorInfo | undefined = tractorInfo.find((tractor) => tractor.slug === slug);

  // console.log(`[getTractor] returned tractoor ${JSON.stringify(tractor)}`);
  return Promise.resolve(tractor);
}

/**
 * 
 * @returns {Promise<string[]>}  list of tractors
 */
export async function getTractors() {
    const slugs = await getSlugs();
    const tractors = [];
    for (const slug of slugs) {
      const tractor = await getTractor(slug);
      if (tractor !== undefined) {
        tractors.push(tractor);
        }
    }
    // tractors.sort((a, b) => b.date.localeCompare(a.date));
    return tractors;
  
  }