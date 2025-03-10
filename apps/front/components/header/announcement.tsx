'use client'

import Link from "next/link";
import SVGArrowUpRight from '@/public/svgs/common/ArrowUpRight.svg';
import { usePathname } from 'next/navigation';
import ImageWrapper from '../common/ImageWrapper';

export default function Announcement() {
    const path = usePathname();
    const hideSelf = ['blog', 'terms-of-service', 'privacy-policy', 'cookie-policy'].some(el => path.includes(el) ? true : false)

    return (
        <div className={`${hideSelf && 'hidden'} flex flex-row text-sand justify-center p-4`}>
            <Link target="_blank" className='flex font-host-grotesk 
                text-[1.3rem] sm:text-[1.3rem] md:text-[1.6rem] lg:text-[1.6rem] xl:text-[1.6rem] 2xl:text-[1.6rem] 
            ' href="https://aifoundry.org/fosdem-2025-low-level-ai-engineering-hacking-dev-room">
                <div className='
                    block sm:flex md:flex lg:flex xl:flex 2xl:flex
                    text-center sm:text-justify md:text-justify lg:text-justify xl:text-justify 2xl:text-justify
                '>
                    AIFoundry.org is sponsoring the &quot;Low-Level AI Engineering & Hacking&quot; Dev Room at FOSDEM. Find out more!
                    <div className='ml-[0.56vw] w-[1.4rem]
                        inline-block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden 
                    '>
                        <ImageWrapper src={SVGArrowUpRight.src} alt='Arrow up right' />
                    </div>
                </div>
                <div className='items-center flex'>
                    <div className='ml-[0.56vw] w-[2rem]
                        hidden sm:inline-block md:inline-block lg:inline-block xl:inline-block 2xl:inline-block 
                    '>
                        <ImageWrapper src={SVGArrowUpRight.src} alt='Arrow up right' />
                    </div>
                </div>
            </Link>
        </div>
    );
}
