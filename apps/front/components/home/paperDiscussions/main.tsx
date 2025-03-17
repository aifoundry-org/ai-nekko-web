'use client'

import Link from 'next/link';
import Button from '@/libs/litebox-lib/ui/Button/Button';
import IMGCat from '@/public/imgs/paperDiscussions/cat.webp'
import IMGText from '@/public/imgs/paperDiscussions/text.webp'
import IMGTextMobile from '@/public/imgs/paperDiscussions/textMobile.webp'
import ImageWrapper from '@/components/common/ImageWrapper'

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const slides = [{
    id: 1,
    content: "ai paper<br/>discussions"
},{
    id: 2,
    content: "collaborative<br/>ai hack labs"
},{
    id: 3,
    content: "open source models<br/>& projects"
}]

export default function Main() {
    useGSAP(() => {
        const slides = gsap.utils.toArray<HTMLElement>(['.paper-slide-1','.paper-slide-2','.paper-slide-3'])
        const containerRect = document.querySelector('.paper-slides-container')?.getBoundingClientRect();
        let scrollTriggerEndOffset = 0;
        
        if (window.innerWidth <= 430) {
            scrollTriggerEndOffset = 90
        } else if (window.innerWidth > 431 && window.innerWidth <= 639) {
            scrollTriggerEndOffset = 90
        } else if (window.innerWidth > 640 && window.innerWidth <= 767) {
            scrollTriggerEndOffset = 10;
        } 

        ScrollTrigger.create({
            trigger: '.paper-slides-container',
            start: () => `center+=${scrollTriggerEndOffset}vh center`,
            end: () => 'bottom+=300vh center', 
            pin: '.pin-section',
            scroller: 'body',
            snap: {
                snapTo: 1 / slides.length,
                duration: 0.25
            },
            onUpdate: (self) => {
                if(containerRect){
                    const progress = self.progress * (slides.length - 1);
                    const currentIndex = Math.round(progress);

                    gsap.to(slides, {
                        y: -currentIndex * containerRect.height,
                        duration: 0.25
                    });
                }
            }
        });
    }, []);

    return (
        <div className='relative w-full h-auto flex justify-center bg-sand'>
            <div className='relative flex flex-col h-full border-2
                w-full xs:w-[40rem] sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full
                mt-[5.2rem] xs:mt-[6rem] sm:mt-[5.6rem] md:mt-[22rem] lg:mt-[16.6rem] xl:mt-[16.6rem] 2xl:mt-[16.6rem]
                mb-[14.2rem] sm:my-[16.6rem] md:my-[16.6rem] lg:my-[16.6rem] xl:my-[16.6rem] 2xl:my-[16.6rem]
                mx-[2.4rem] sm:mx-[6rem] md:mx-[4.2rem] lg:mx-[11.2rem] xl:mx-[11.2rem] 2xl:mx-[11.2rem] 
                p-[2.4rem] sm:p-[5.6rem] md:p-[5.6rem] lg:p-[5.6rem] xl:p-[5.6rem] 2xl:p-[5.6rem]
            '>
                <p className='font-host-grotesk font-bold
                    text-[1.6rem] xs:text-[2rem] sm:text-[2.5rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[2rem] 2xl:text-[4.5rem]
                    leading-[2.4rem] sm:leading-[2.5rem] md:leading-[3rem] lg:leading-[3rem] xl:leading-[3rem] 2xl:leading-[5rem]
                    mb-[2.4rem] sm:mb-[4.8rem] md:mb-[2.5rem] lg:mb-[2.5rem] xl:mb-[2.5rem] 2xl:mb-[2.5rem]
                '>
                    Freedom of choice in AI requires an interoperable ecosystem.<br className='hidden md:block lg:block xl:block 2xl:block' />Be part of the open, composable community for AI.
                </p>
                <div className='pointer-events-none relative overflow-hidden scrollbar-width-none
                    w-full
                    h-[18.1rem] sm:h-[16rem] md:h-[26rem] lg:h-[26rem] xl:h-[26rem] 2xl:h-[30rem]
                '>
                    <div className='relative paper-slides-container w-full h-full grid grid-flow-row'>
                        {slides.map(el => (
                            <div key={el.id} className={`paper-slide-${el.id} relative w-fit flex flex-col flex-nowrap
                                sm:justify-center md:justify-center lg:justify-center xl:justify-end 2xl:justify-center
                                h-[18.1rem] sm:h-[16rem] md:h-[26rem] lg:h-[26rem] xl:h-[26rem] 2xl:h-[30rem]
                            `}>
                                <p className='relative font-dharma-gothic-e font-black text-orange
                                    text-[4rem] sm:text-[4.8rem] md:text-[4.8rem] lg:text-[4.8rem] xl:text-[4.8rem] 2xl:text-[4.8rem]
                                    leading-[3.3rem] sm:leading-[6rem] md:leading-[8rem] lg:leading-[4rem] xl:leading-[4rem] 2xl:leading-[4rem]
                                    mb-[0.8rem] sm:mb-[1.3rem] md:mb-[1.6rem] lg:mb-[1.6rem] xl:mb-[1.6rem] 2xl:mb-[1.6rem]
                                '>
                                    {`0${el.id}.`}
                                </p>
                                <p className='relative font-dharma-gothic-e font-black text-black uppercase
                                    text-[6.4rem] sm:text-[5.8rem] md:text-[7.8rem] lg:text-[8.8rem] xl:text-[12.8rem] 2xl:text-[12.8rem]
                                    leading-[4.7rem] sm:leading-[4.4rem] md:leading-[7rem] lg:leading-[7rem] xl:leading-[9.4rem] 2xl:leading-[9.4rem]
                                ' dangerouslySetInnerHTML={{__html: el.content}} />
                            </div>
                        ))}
                    </div>
                </div>
                <Button className='
                mt-[2.4rem] sm:mt-[6.4rem] md:mt-[6.4rem] lg:mt-[6.4rem] xl:mt-[6.4rem] 2xl:mt-[6.4rem]
                mb-[18.6rem] sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0
                ' target='_blank' as={Link} href='https://aifoundry.org/' variant='primary' content='join the open ecosystem for ai' svg='arrow-up-right' />
                <div className='absolute
                    w-[20rem] sm:w-[18rem] md:w-[20rem] lg:w-[28.7rem] xl:w-[32.7rem] 2xl:w-[32.7rem]
                    -bottom-[4.6rem] sm:-bottom-[4.1rem] md:-bottom-[4.5rem] lg:-bottom-[6.4rem] xl:-bottom-[7.4rem] 2xl:-bottom-[7.4rem]
                    left-0 sm:left-auto md:left-auto lg:left-auto xl:left-auto 2xl:left-auto
                    sm:right-[2rem] md:right-[4rem] lg:right-[6rem] xl:right-[4rem] 2xl:right-[4rem]
                '>
                    <ImageWrapper src={IMGCat.src} alt='Cat' />
                </div>
                <div className='absolute
                    hidden md:block lg:block xl:block 2xl:block
                    sm:w-[1.6rem] md:w-[1.6rem] lg:w-[1.6rem] xl:w-[1.6rem] 2xl:w-[1.6rem]
                    sm:top-[4rem] md:top-[6rem] lg:top-[6rem] xl:top-[6rem] 2xl:top-[6rem]
                    sm:right-[4.5rem] md:right-[4.5rem] lg:right-[4.5rem] xl:right-[4.5rem] 2xl:right-[4.5rem]
                '>
                    <ImageWrapper src={IMGText.src} alt='Text' />
                </div>
                <div className='absolute
                    block md:hidden lg:hidden xl:hidden 2xl:hidden
                    w-[1.6rem] sm:w-[1.4rem]
                    bottom-[3rem] sm:bottom-[15rem]
                    right-[2rem]
                '>
                    <ImageWrapper src={IMGTextMobile.src} alt='Text Mobile' />
                </div>
            </div>
        </div>
    )
}