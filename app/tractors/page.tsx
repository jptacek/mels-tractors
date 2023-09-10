import Link from "next/link";
import Heading from "../../components/Heading";
import { getTractors } from "@/lib/tractors";

export const metadata = {
    title: "Tractors",
}

export default async function TractorsPage() {
  const tractors = await getTractors();
  console.log(tractors);
  return (
    <>
      <Heading>Tractors</Heading>
      <p>Contact us about tractors</p>

      <ul className="flex flex-row flex-wrap gap-3">
        {tractors.map((tractor) => (
          <li key={tractor.slug} 
            className="bg-green border w-80 rounded shadow hover-shadow:x1">
            <Link href={`tractors/${tractor.slug}`}>
              <h2 className="font-semibold py-1 text-center">
              {tractor.make} - {tractor.model} - {tractor.birthYear}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
