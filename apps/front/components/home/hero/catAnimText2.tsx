import IMGArrows from '@/public/imgs/hero/arrows.webp'
import IMGGraffiti from '@/public/imgs/hero/graffiti_2.webp'
import IMGError from '@/public/imgs/hero/error.webp'
import IMGErrorMobile from '@/public/imgs/hero/errorMobile.webp'
import IMGSpray from '@/public/imgs/hero/spray.webp'
import ImageWrapper from '@/components/common/ImageWrapper'

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CatAnimText2({firstAnimComplete}: {firstAnimComplete?: boolean}) {
    useGSAP(() => {
        if(firstAnimComplete){
            const tl = gsap.timeline({paused: true})
                .to('.scroller-container', {overflowY: 'hidden'})
                .fromTo(['.cat-text-container-2 .text1', '.cat-text-container-2 .text2', '.cat-text-container-2 .error', '.cat-text-container-2 .errorMobile'], {
                    opacity: 0,
                    y: '35px'
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    stagger: {
                        each: 0.05
                    }
                })
                .fromTo(['.cat-text-container-2 .arrows', '.cat-text-container-2 .spray', '.cat-text-container-2 .graffiti'], {
                    opacity: 0,
                    y: '35px'
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    stagger: {
                        each: 0.02
                    }
                })
                .to('.scroller-container', {overflowY: 'scroll'})
                
            ScrollTrigger.create({
                trigger: '.trigger-2',
                start: () => 'top+=30vw center',
                end: () => 'bottom-=30vw center',
                id: 'trigger-2',
                scroller: '.scroller-container',
                onEnter: () => {
                    gsap.fromTo('.cat-text-container-2', {
                        opacity: 0,
                        y: '-50px'
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.3
                    })
                    tl.restart(true)
                },
                onLeave: () => {
                    gsap.fromTo('.cat-text-container-2', {
                        opacity: 1,
                        y: 0
                    }, {
                        opacity: 0,
                        y: '-50px',
                        duration: 0.3
                    })
                },
                onEnterBack: () => {
                    gsap.fromTo('.cat-text-container-2', {
                        opacity: 0, 
                        y: '-50px',
                    }, {
                        opacity: 1, 
                        y: 0,
                        duration: 0.3
                    })
                    tl.restart(true);
                },
                onLeaveBack: () => {
                    gsap.fromTo('.cat-text-container-2', {
                        opacity: 1,
                        y: 0,
                    }, {
                        opacity: 0,
                        y: '50px',
                        duration: 0.3
                    })
                }
            })
        }
    }, [firstAnimComplete])
    return (
        <div className='cat-text-container-2 fixed top-0 pointer-events-none flex flex-col w-[100rem] h-full font-dharma-gothic-e font-black uppercase justify-center items-center text-center'>
            <div className='arrows absolute opacity-0
                w-[11rem] sm:w-[11rem] md:w-[14.7rem] md:lg:w-[16.7rem] xl:w-[16.7rem] 2xl:w-[16.7rem]
                top-[calc(50%+5.2rem)] sm:top-[calc(50%+6rem)] md:top-[calc(50%+7rem)] lg:top-[calc(50%+6rem)] xl:top-[calc(50%+6rem)] 2xl:top-[calc(50%+6rem)]
                left-[29.7rem] sm:left-[23rem] md:left-[13rem] lg:left-0 xl:left-0 2xl:left-0
            '>
                <ImageWrapper src={IMGArrows.src} alt='Arrows'/>
            </div>
            <div className='graffiti absolute opacity-0
                w-[13rem] sm:w-[22rem] md:w-[28.3rem] lg:w-[31.3rem] xl:w-[31.3rem] 2xl:w-[31.3rem]
                top-[calc(50%-10.5rem)] sm:top-[calc(50%-17rem)] md:top-[calc(50%-16.7rem)] lg:top-[calc(50%-20.5rem)] xl:top-[calc(50%-20.5rem)] 2xl:top-[calc(50%-20.5rem)]
                right-[32rem] sm:right-[25.5rem] md:right-[20.5rem] lg:right-[16.2rem] xl:right-[16.2rem] 2xl:right-[16.2rem]
            '>
                <ImageWrapper src={IMGGraffiti.src} alt='Graffiti'/>
            </div>
            <div className='error absolute z-[1] opacity-0
                hidden sm:block md:block lg:block xl:block 2xl:block
                sm:w-[17.4rem] sm:md:w-[20.4rem] lg:w-[22.7rem] xl:w-[22.7rem] 2xl:w-[22.7rem]    
                sm:top-[calc(50%-1rem)] md:top-[calc(50%+1.4rem)] lg:top-[calc(50%+0.3rem)] xl:top-[calc(50%+0.3rem)] 2xl:top-[calc(50%+0.3rem)]
                sm:left-[28rem] md:left-[calc(50%-20rem)] lg:left-[calc(50%-25rem)] xl:left-[calc(50%-25rem)] 2xl:left-[calc(50%-25rem)]
            '>
                <ImageWrapper src={IMGError.src} alt='Error' />
            </div>
            <div className='errorMobile absolute z-[1] opacity-0
                block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden
                w-[15.4rem]
                top-[calc(50%)] left-[calc(50%-15rem)]
            '>
                <ImageWrapper src={IMGErrorMobile.src} alt='Error Mobile' />
            </div>
            <div className='spray absolute opacity-0 transform -translate-x-1/2
                w-[6.4rem] sm:w-[7.8rem] md:w-[7.8rem] lg:w-[7.8rem] xl:w-[7.8rem] 2xl:w-[7.8rem]
                bottom-[calc(50%-28rem)] sm:bottom-[calc(50%-34rem)] md:bottom-[calc(50%-34rem)] lg:bottom-[calc(50%-34rem)] xl:bottom-[calc(50%-34rem)] 2xl:bottom-[calc(50%-34rem)]
                left-1/2
            '>
                <ImageWrapper src={IMGSpray.src} alt='Spray' />
            </div>
            <div className='flex flex-col gap-y-[2.4rem] absolute transform -translate-y-1/2
                top-[calc(50%+4rem)] sm:top-[calc(50%+2rem)] md:top-[calc(50%+4rem)] lg:top-[calc(50%+4rem)] xl:top-[calc(50%+4rem)] 2xl:top-[calc(50%+4rem)] 
            '>
                <p className='text1 opacity-0
                text-[7.2rem] sm:text-[10.2rem] md:text-[10.2rem] lg:text-[12.8rem] xl:text-[12.8rem] 2xl:text-[12.8rem] 
                leading-[5.3rem] sm:leading-[8rem] md:leading-[8.3rem] lg:leading-[9.4rem] xl:leading-[9.4rem] 2xl:leading-[9.4rem]
                '>A common<br/> foundation</p>
                <p className='text2 opacity-0
                text-[3.2rem] sm:text-[4.2rem] md:text-[4.2rem] lg:text-[6.4rem] xl:text-[6.4rem] 2xl:text-[6.4rem] 
                leading-[2.6rem] sm:leading-[3.6rem] md:leading-[3.6rem] lg:leading-[5.3rem] xl:leading-[5.3rem] 2xl:leading-[5.3rem]
                '>That unlocks freedom<br className='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'/> of choice<br className='hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden'/> is what&apos;s<br className='block sm:hidden md:block lg:block xl:block 2xl:block' /> missing in today&apos;s world</p>
            </div>
        </div>
    )
}