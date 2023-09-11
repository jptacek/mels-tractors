import Link from "next/link";
import Heading from "../../components/Heading";
import { getTractors } from "@/lib/tractors";

export const metadata = {
    title: "Tractors",
}

export default async function TractorsPage() {
  const tractors = await getTractors();
  // console.log(tractors);
  return (
    <>
      <Heading>Tractors</Heading>
      <p>Contact us about tractors</p>

      <ul className="flex flex-row flex-wrap gap-3">
        {tractors.map((tractor) => {
          // console.log(`map ${tractor.make}`);
          return (
            <li key={tractor.slug} 
            className="bg-white border w-80 rounded shadow hover-shadow:x1">
            <Link href={`tractors/${tractor.slug}`}>
              <img
                src='/tractor_2_700.jpeg'
                alt={tractor.make}
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="font-semibold font-orbitron py-1 text-center">
              {tractor.make} - {tractor.model} - {tractor.birthYear}
              </h2>
            </Link>
          </li>

        );})}
      </ul>
    </>
  );
}
