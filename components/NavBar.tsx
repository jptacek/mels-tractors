import Link from "next/link";
import Image from "next/image";


const NavBar = () => (
    <nav>
    <ul className='flex gap-2'>
        <li><Link href="/" className='font-orbitron font-bold text-orange-800 hover:underline'>Mels Tractors</Link></li>
        <li className='ml-auto'>
            <Link href="/tractors" 
            className='text-orange-800 hover:underline'>Tractors</Link></li>
        <li><Link href="/about" className='text-orange-800 hover:underline'>About</Link></li>
    </ul>
    </nav>

);

export default NavBar;