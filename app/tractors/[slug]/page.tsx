import Heading from "@/components/Heading";
import {  getTractor } from "@/lib/tractors";


// export async function generateStaticParams() {
//     const slugs = await getSlugs();
//     return slugs.map((slug) => ({slug}));

// }

// export async function generateMetadata({params: {slug}}) {
//     const review = await getReview(slug);
//     return {
//         title: review.title,
//     };

// }

export default async function TractorPage({params: {slug}}: {params: {slug: number}}) {
    console.log(slug);

    const tractor = await getTractor(slug);
    console.log(tractor);
    console.log(`[ReviewPage] rendering ${slug}`);
    return (
        <>
        <Heading>{tractor.make} - {tractor.model}</Heading>
        <div className="flex gap-3 items-baseline">
        <p className='italic pb-2'>{tractor.birthYear}</p>
        </div>
        {/* <img src={tractor.image} 
         width="640" height="360" className="mb-2 rounded" /> */}
        <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
                <p>Type</p>
                <p>Years</p>
                <p>Height</p>
                <p>Length</p>
                <p>Weight</p>
                <p>Prop</p>
                <p>Engine</p>
                <p>Pto</p>
                <p>Gross Power</p>
                <p>DB Power</p>
                <p>DB Pull</p>
                <p>NTLL Score</p>
                <p>Serial Number</p>
                <p>JTN</p>
                <p>Birth Year</p>
            </div>
            <div style={{ flex: 1 }}>
                <p>{tractor.type}</p>
                <p>{tractor.years}</p>
                <p>{tractor.height}</p>
                <p>{tractor.length}</p>
                <p>{tractor.weight}</p>
                <p>{tractor.prop}</p>
                <p>{tractor.engine}</p>
                <p>{tractor.pto}</p>
                <p>{tractor.grossPower}</p>
                <p>{tractor.dbPower}</p>
                <p>{tractor.dbPull}</p>
                <p>{tractor.ntllScore}</p>
                <p>{tractor.serialNumber}</p>
                <p>{tractor.jtn}</p>
                <p>{tractor.birthYear}</p>
            </div>
        </div>
        </>
    );
} 
/*
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
    birthYear: '1949'*/