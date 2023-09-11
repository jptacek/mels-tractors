import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => (
    <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
            <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
            <p>@2023 Mel`s Antique Trailers. All rights reserved</p>


        </div>
    </footer>
);

export default Footer;