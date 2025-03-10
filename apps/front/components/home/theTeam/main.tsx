'use client'

import { useEffect, useRef, useState } from 'react'

import Card from './card'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import IMGPaper from '@/public/imgs/theTeam/paper.webp'
import IMGGraffiti from '@/public/imgs/theTeam/graffiti.webp'
import IMGPunchCard from '@/public/imgs/theTeam/punchCard.webp'
import ImageWrapper from '@/components/common/ImageWrapper'

import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const teamMembers = [
    {
        id: 1,
        name: 'Tanya Dadasheva',
        role: 'CEO & Co-Founder',
        linkedin: 'https://www.linkedin.com/in/tanya-dadasheva/',
        profileImgUrl: '/imgs/theTeam/team/team-1.webp'
    },
    {
        id: 2,
        name: 'Roman Shaposhnik',
        role: 'CTO & Co-Founder',
        linkedin: 'https://www.linkedin.com/in/shaposhnik/',
        profileImgUrl: '/imgs/theTeam/team/team-2.webp'
    },
    {
        id: 3,
        name: 'Tony Kiehn',
        role: 'COO',
        linkedin: 'https://www.linkedin.com/in/tonykiehn/',
        profileImgUrl: '/imgs/theTeam/team/team-3.webp'
    }
]

const teamAdvisors = [
    {
        id: 1,
        name: 'Leo Spiegel',
        role: 'Spiegel Capital Management',
        linkedin: 'https://www.linkedin.com/in/leospiegel/',
        profileImgUrl: '/imgs/theTeam/advisors/advisor-1.webp'
    },
    {
        id: 2,
        name: 'Elisabeth Hendrickson',
        role: 'Curious Duck Labs',
        linkedin: 'https://www.linkedin.com/in/testobsessed/',
        profileImgUrl: '/imgs/theTeam/advisors/advisor-2.webp'
    },
    {
        id: 3,
        name: 'Noelle Saldana',
        role: 'DataKind',
        linkedin: 'https://www.linkedin.com/in/noellesio/',
        profileImgUrl: '/imgs/theTeam/advisors/advisor-3.webp'
    },
    {
        id: 4,
        name: 'Greg Chase',
        role: 'Upbound.io',
        linkedin: 'https://www.linkedin.com/in/gregory-chase/',
        profileImgUrl: '/imgs/theTeam/advisors/advisor-4.webp'
    },
    {
        id: 5,
        name: 'Sasha Galitsky',
        role: 'Almaz Capital',
        linkedin: 'https://www.linkedin.com/in/alexander-sasha-galitsky/',
        profileImgUrl: '/imgs/theTeam/advisors/advisor-5.webp'
    }
]

export default function Main() {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const buttonPrevRef = useRef(null)
    const buttonNextRef = useRef(null)

    useEffect(() => {
        if (
            swiperInstance &&
            typeof swiperInstance.params.navigation === 'object' &&
            buttonPrevRef.current &&
            buttonNextRef.current
        ) {
            swiperInstance.params.navigation.prevEl = buttonPrevRef.current;
            swiperInstance.params.navigation.nextEl = buttonNextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance, buttonPrevRef, buttonNextRef]);
    
    return (
        <div id="team" className='relative w-full h-full overflow-x-hidden flex flex-col
            pt-[14rem] sm:pt-[18rem] md:pt-[18rem] lg:pt-[18rem] xl:pt-[18rem] 2xl:pt-[28rem]
            pb-[4rem] sm:pb-[8rem] md:pb-[8rem] lg:pb-[8rem] xl:pb-[8rem] 2xl:pb-[18rem]
        '>
            <div className='relative w-fit h-full flex flex-col
                mx-auto sm:mx-[8.2rem] md:mx-[11.2rem] lg:mx-[11.2rem] xl:mx-[11.2rem] 2xl:mx-[11.2rem] 
            '>
                <div className='absolute z-0
                    top-[5rem] sm:top-[6rem] md:top-[6rem] lg:top-[6rem] xl:top-[6rem] 2xl:top-[10rem] 
                    w-[43.3rem] sm:w-[23.3rem] md:w-[33.3rem] lg:w-[33.3rem] xl:w-[43.3rem] 2xl:w-[53.3rem] 
                    -right-[60vw] sm:right-[9vw] md:right-[9vw] lg:right-[8vw] xl:right-[9vw] 2xl:right-[6vw] 
                '>
                    <ImageWrapper src={IMGPaper.src} alt="Punch card" />
                </div>
                <p className='font-dharma-gothic-e font-black uppercase
                    leading-[5.3rem] sm:leading-[5.3rem] md:leading-[5.3rem] lg:leading-[5.3rem] xl:leading-[5.3rem] 2xl:leading-[10rem]
                    text-[4.8rem] sm:text-[6.4rem] md:text-[6.4rem] lg:text-[6.4rem] xl:text-[6.4rem] 2xl:text-[8.4rem] 
                    mb-[4rem] sm:mb-[4.8rem] md:mb-[4.8rem] lg:mb-[4.8rem] xl:mb-[4.8rem] 2xl:mb-[6.8rem] 
                '>
                    the team
                </p>
                <div className='flex z-0
                    flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row
                    gap-y-[2.4rem] sm:gap-x-[2.4rem] md:gap-x-[2.4rem] lg:gap-x-[2.4rem] xl:gap-x-[2.4rem] 2xl:gap-x-[2.4rem] 
                '>
                    {teamMembers.map(member => (
                        <Card key={member.id} name={member.name} role={member.role} profileImgUrl={member.profileImgUrl} linkedinUrl={member.linkedin} />
                    ))}
                </div>
                <div className='absolute z-0
                    -bottom-[6.7rem] sm:-bottom-[2.9rem] md:-bottom-[3.5rem] lg:-bottom-[4.4rem] xl:-bottom-[6rem] 2xl:-bottom-[6rem] 
                    w-[23rem] sm:w-[10.3rem] md:w-[12.3rem] lg:w-[15rem] xl:w-[21rem] 2xl:w-[20rem] 
                    -right-[30.5vw] sm:-right-[7.1vw] md:-right-[6.2vw] lg:-right-[6vw] xl:-right-[7vw] 2xl:-right-[3.5vw]
                '>
                    <ImageWrapper src={IMGGraffiti.src} alt="Graffiti" />
                </div>
            </div>
            <div className='
                hidden sm:flex md:flex lg:flex xl:flex 2xl:flex
                relative w-fit flex-col 
                mt-[9.6rem] sm:mt-[9.6rem] md:mt-[9.6rem] lg:mt-[9.6rem] xl:mt-[9.6rem] 2xl:mt-[14rem]
                mx-auto sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0
            '>
                <div className='absolute z-0
                    sm:top-0 md:top-0 lg:top-0 xl:top-0 2xl:top-[10rem] 
                    sm:w-[52.7rem] md:w-[52.7rem] lg:w-[52.7rem] xl:w-[52.7rem] 2xl:w-[53.3rem] 
                    sm:right-[9vw] md:right-[18vw] lg:right-[8vw] xl:right-[13.8vw] 2xl:-right-[4vw]
                '>
                    <ImageWrapper src={IMGPunchCard.src} alt="Punch card" />
                </div>
                <p className='font-dharma-gothic-e font-black uppercase
                    mx-0 sm:mx-[8.2rem] md:mx-[11.2rem] lg:mx-[11.2rem] xl:mx-[11.2rem] 2xl:mx-[11.2rem] 
                    leading-[10.3rem] sm:leading-[5.3rem] md:leading-[5.3rem] lg:leading-[5.3rem] xl:leading-[5.3rem] 2xl:leading-[10rem]
                    text-[4.8rem] sm:text-[6.4rem] md:text-[6.4rem] lg:text-[6.4rem] xl:text-[6.4rem] 2xl:text-[8.4rem] 
                    mb-[4rem] sm:mb-[4.8rem] md:mb-[4.8rem] lg:mb-[4.8rem] xl:mb-[4.8rem] 2xl:mb-[6.8rem] 
                '>
                    our advisors
                </p>
                <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 3.7
                        },
                        936: {
                            slidesPerView: 4
                        },
                        1440: {
                            slidesPerView: 4.25
                        },
                        1560: {
                            slidesPerView: 5
                        }
                    }}
                    className='!z-0
                        !hidden sm:!block md:!block lg:!block xl:!block 2xl!:block
                    '
                    wrapperClass='
                        sm:gap-x-[2.4rem] md:gap-x-[2.4rem] lg:gap-x-[2.4rem] xl:gap-x-[2.4rem] 2xl:gap-x-[2.4rem]  
                        sm:mx-[8.2rem] md:mx-[11.2rem] lg:mx-[11.2rem] xl:mx-[11.2rem] 2xl:mx-[11.2rem]
                    '>
                    {teamAdvisors.map(advisor => (
                        <SwiperSlide className='
                        sm:!w-fit md:!w-fit lg:!w-fit xl:!w-fit 2xl!:w-fit 
                        ' key={advisor.id}>
                            <Card name={advisor.name} role={advisor.role} profileImgUrl={advisor.profileImgUrl} linkedinUrl={advisor.linkedin} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>
                <p className='font-dharma-gothic-e font-black uppercase mt-[9.6rem] leading-[4rem] text-[4.8rem] mb-[4rem] mx-auto w-[32.3rem]'>
                    our advisors
                </p>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    loop
                    onSwiper={setSwiperInstance}
                    navigation={{
                        prevEl: buttonPrevRef.current,
                        nextEl: buttonNextRef.current,
                    }}
                    className='w-[32.3rem] mx-auto
                        !block sm:!hidden md:!hidden lg:!hidden xl:!hidden 2xl!:hidden
                    '>
                    {teamAdvisors.map(advisor => (
                        <SwiperSlide key={advisor.id}>
                            <Card className='!w-[32.3rem]' name={advisor.name} role={advisor.role} profileImgUrl={advisor.profileImgUrl} linkedinUrl={advisor.linkedin} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='relative flex w-[33rem] justify-center items-center mx-auto mt-[4rem]'>
                    <div ref={buttonPrevRef} className='flex basis-[15%] justify-center'>
                        <Button variant='secondary' svg='scroll-left'/>
                    </div>
                    <div className='pagination-mobile !gap-[3.2vw] flex basis-[80%] justify-center' />
                    <div ref={buttonNextRef} className='flex basis-[15%] justify-center'>
                        <Button variant='secondary' svg='scroll-right'/>
                    </div>
                </div>
            </div>
        </div>
    )
}