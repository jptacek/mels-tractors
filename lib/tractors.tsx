/* 
Make	Model	Type	Yrs. Prod.	Height	Length	Weight	Prop.	Engine	PTO	Gross pwr	DB pwr	DB pull	NTTL score	Serial #	JTN	"Birth yr"

Ferguson	TO-35	Utility	54-'60	57"	117"	3.2K lbs	Rear	SDC 2.3L Diesel	32 HP	33 HP	30.5 HP	3.4K lbs	690	194014	2	1959
John Deere	B	Row crop	48-'52	56"	120.5"	4.4K lbs	Rear	JD 3L 2-cyl		28 HP	24.6 HO	3.5K lbs	380	240767	11	1949
*/

const tractorInfo=[
    {
        slug: 0,
      file: "3510-3514",
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
      dbPwr: "18.4 HP",
      dbPull: "2.3K lbs",
      ntllScore: 363,
      serialNumber: "",
      jtn: 1,
      birthYear: null
    },
    {
        slug: 1,
      file: "3515-3517",
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
      dbPwr: "30.5 HP",
      dbPull: "3.4K lbs",
      ntllScore: 690,
      serialNumber: "194014",
      jtn: 2,
      birthYear: 1959
    },
    {
        slug: 2,
      file: "3519-3522",
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
      dbPwr: "16 HP",
      dbPull: "2.2K lbs",
      ntllScore: 423,
      serialNumber: "",
      jtn: 3,
      birthYear: 1941
    },
    {
        slug: 3,
      file: "3523-3525",
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
      dbPwr: "24 HP",
      dbPull: "3K lbs",
      ntllScore: 466,
      serialNumber: "129766",
      jtn: 4,
      birthYear: 1954
    },
    {
        slug: 4,
      file: "3526-3527",
      make: "?",
      model: "",
      type: "",
      years: "",
      height: "",
      length: "",
      weight: "",
      prop: "",
      engine: "",
      pto: "",
      grossPower: "",
      dbPwr: "",
      dbPull: "",
      ntllScore: null,
      serialNumber: "",
      jtn: 5,
      birthYear: null
    },
    {
        slug: 5,
      file: "3528-3530",
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
      dbPwr: "24.6 HP",
      dbPull: "3.5K lbs",
      ntllScore: 380,
      serialNumber: "",
      jtn: 6,
      birthYear: null
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
      dbPwr: "24.6 HP",
      dbPull: "3.5K lbs",
      ntllScore: 380,
      serialNumber: "",
      jtn: 7,
      birthYear: null
    },
    {
        slug: 7,
      file: "3532-3533",
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
      dbPwr: "16.3 HP",
      dbPull: "2.2K lbs",
      ntllScore: 339,
      serialNumber: "",
      jtn: 8,
      birthYear: null
    },
    {
        slug: 8,
      file: "3534-3535",
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
      dbPwr: "16 HP",
      dbPull: "2.2K lbs",
      ntllScore: 423,
      serialNumber: "",
      jtn: 9,
      birthYear: null
    },
    {
        slug: 9,
      file: "3536-3537, 3542",
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
      dbPwr: "",
      dbPull: "",
      ntllScore: 384,
      serialNumber: "546632",
      jtn: 10,
      birthYear: 1945
    },
    {
        slug: 10,
      file: "3538-3539, 3543",
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
      dbPwr: "24.6 HO",
      dbPull: "3.5K lbs",
      ntllScore: 380,
      serialNumber: "240767",
      jtn: 11,
      birthYear: 1949
    },
    {
        slug: 11,
      file: "3540-3541, 3544",
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
      dbPwr: "",
      dbPull: "",
      ntllScore: 384,
      serialNumber: "?",
      jtn: 12,
      birthYear: null
    }
   ]

const tractorInfo2 = [
    {
    slug:0,
    make: 'Ferguson',
    model: 'TO-35',
    type: 'Utility',
    years: '54-60',
    height: '57"',
    length: '117"',
    weight: '3.2K lbs',
    prop: 'Rear',
    engine: 'SDC 2.3L Diesel',
    pto: '32 HP',
    grossPower: '33 HP',
    dbPower: '30.5 HP',
    dbPull: '3.4K lbs',
    ntllScore: '690',
    serialNumber: '194014',
    jtn: '2',
    birthYear: '1959'
},
{
    slug:1,
    make: 'John Deere',
    model: 'B',
    type: 'Row crop',
    years: '48-52',
    height: '56"',
    length: '120.5"',
    weight: '4.4 lbs',
    prop: 'Rear',
    engine: 'JD 3L 2-cyl',
    pto: '',
    grossPower: '28 HP',
    dbPower: '24.6 HP',
    dbPull: '3.5K lbs',
    ntllScore: '380',
    serialNumber: '240767',
    jtn: '11',
    birthYear: '1949'
},
]

export async function getTractor(slug: number) {
    // const {
    //   content,
    //   data: { title, date, image },
    // } = matter(text);
    // const body = marked(content, { headerIds: false, mangle: false });
    const tractor = tractorInfo[slug];
    return tractor;
  }
/**
 * 
 * @returns {Promise<string[]>}  list of tractors
 */
export async function getTractors() {
    const tractors = [];
    for (const tractor of tractorInfo) {
      tractors.push(tractor);
    }
    // tractors.sort((a, b) => b.date.localeCompare(a.date));
    return tractors;
  }