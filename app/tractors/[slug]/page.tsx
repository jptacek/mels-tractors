import Heading from "@/components/Heading";
import { getTractor, TractorInfo, getSlugs } from "@/lib/tractors";


/**
 * 
 * @returns {Promise<number[]>}  list of slugs for the tractors
 */
export async function generateStaticParams() {
    const slugs = await getSlugs();
    console.log(`[TractorPage] generateStaticParams ${JSON.stringify(slugs)}`);
    
    return slugs.map((slug) => ({slug: slug.toString()}));

}

// export async function generateMetadata({params: {slug}}) {
//     const review = await getReview(slug);
//     return {
//         title: review.title,
//     };

// }

const getValueForNull = (value: string | null): string => {
    if (value === null) {
        return '';
    }
    return value;

}

export default async function TractorPage(params: any) {
    console.log(`[TractorPage] params ${JSON.stringify(params.params)}`);
    let slug = params.params.slug;
    if (typeof slug === 'string') {
        slug = parseInt(slug);
    }
    console.log(`[TractorPage] slugs numnber [${slug}]`);
    const tractor: TractorInfo | undefined = await getTractor(slug);
    if (tractor === undefined) {
        console.log(`[TractorPage] tractor is undefined`);
        return (<><div></div></>)
    } else {
        return (
            <>
                <Heading>{tractor.make}</Heading>
                <div className="flex gap-3 items-baseline">
                    <p className='italic pb-2'>{tractor.birthYear ? tractor.birthYear : ''}</p>
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
                        <p>{tractor ? tractor.type : ''}</p>
                        <p>{tractor.years}</p>
                        <p>{tractor.height}</p>
                        <p>{tractor.length}</p>
                        <p>{tractor.weight}</p>
                        <p>{tractor.prop}</p>
                        <p>{tractor.engine}</p>
                        <p>{tractor.pto}</p>
                        <p>{tractor.grossPower}</p>
                        <p>{tractor.dbPower || ''}</p>
                        <p>{tractor.dbPull}</p>
                        <p>{tractor.ntllScore}</p>
                        <p>{tractor.serialNumber}</p>
                        <p>{tractor.jtn}</p>
                        <p>{tractor.birthYear}</p>
                    </div>
                </div>
                <img
                        src='/tractor.jpg'
                        alt={tractor.make}
                        width="1280"
                        height="720"
                        className="rounded-t"
                    />
            </>
        );
    }
}