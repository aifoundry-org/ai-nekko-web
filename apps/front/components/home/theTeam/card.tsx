import { useState } from 'react';
import Link from 'next/link';
import ImageWrapper from '@/components/common/ImageWrapper';
import SVGIconLinkedin from '@/public/svgs/theTeam/iconLinkedin.svg'

export default function Card({name, role, profileImgUrl, linkedinUrl, className}: {name: string; role: string, profileImgUrl: string, linkedinUrl?: string, className?: string}) {
    const [flip, setFlip] = useState(false)

    return (
        <div onClick={() => setFlip(!flip)} onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)} className={`flex flex-col border-2 border-black bg-sand
            w-[32.7rem] sm:w-[14.6rem] md:w-[18.6rem] lg:w-[20.5rem] xl:w-[28.6rem] 2xl:w-[30.6rem] 
            h-[28.9rem] sm:h-[20.3rem] md:h-[23.3rem] lg:h-[25.4rem] xl:h-[33.3rem] 2xl:h-[40.3rem] 
            ${className}
        `}>
            <div className={`card relative cursor-pointer hover:opacity-100 ${flip ? 'flip' : ''}`}>
                <div className='front w-full left-0 absolute
                    h-[28.6rem] sm:h-[20rem] md:h-[23rem] lg:h-[25rem] xl:h-[32.9rem] 2xl:h-[40rem]
                '>
                    <ImageWrapper style={{height: '100%', objectFit: 'cover'}} src={profileImgUrl} alt={`${name} profile image`} />
                </div>
                <div className='back absolute p-[2.4rem] flex flex-col w-full
                    h-[28.9rem] sm:h-[20.3rem] md:h-[23.3rem] lg:h-[25.4rem] xl:h-[33.3rem] 2xl:h-[40.3rem]
                '>
                    <p className='flex font-dharma-gothic-e font-black uppercase text-orange
                        text-[6.4rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4.4rem] xl:text-[6.4rem] 2xl:text-[6.4rem] 
                        leading-[5.3rem] sm:leading-[2.5rem] md:leading-[3.3rem] lg:leading-[3.5rem] xl:leading-[5.3rem] 2xl:leading-[5rem] 
                    '>{name}</p>
                    <div className='w-full h-full flex flex-col justify-end text-black'>
                        <div className='border-t-2 border-black'>
                            <p className='font-host-grotesk font-bold
                                mt-[2.4rem] sm:mt-[1.5rem] md:mt-[1.2rem] lg:mt-[1.4rem] xl:mt-[2.4rem] 2xl:mt-[2.4rem]
                                leading-[3rem] sm:leading-[1.3rem] md:leading-[2rem] lg:leading-[2rem] xl:leading-[3rem] 2xl:leading-[4rem]
                                text-[2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[2rem] 2xl:text-[3rem]
                            '>{role}</p>
                            <div className='w-full flex flex-row
                                mt-[1.6rem] sm:mt-[1.6rem] md:mt-[1.2rem] lg:mt-[1.4rem] xl:mt-[1.6rem] 2xl:mt-[1.6rem]
                            '>
                                {linkedinUrl && <div className='cursor-pointer
                                    sm:w-[2.4rem] md:w-[2.4rem] lg:w-[2.4rem] xl:w-[2.4rem] 2xl:w-[4rem]
                                '>
                                    <Link target='_blank' href={linkedinUrl}>
                                        <ImageWrapper src={SVGIconLinkedin.src} alt="Linkedin Icon" />
                                    </Link>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}