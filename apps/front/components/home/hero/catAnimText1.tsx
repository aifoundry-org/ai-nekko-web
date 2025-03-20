import IMGGoogles from '@/public/imgs/hero/googles.webp'
import IMGArrows from '@/public/imgs/hero/arrows.webp'
import IMGGraffiti from '@/public/imgs/hero/graffiti_1.webp'
import IMGError from '@/public/imgs/hero/error.webp'
import IMGErrorMobile from '@/public/imgs/hero/errorMobile.webp'
import ImageWrapper from '@/components/common/ImageWrapper'

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CatAnimText1({firstAnimComplete}: {firstAnimComplete?: boolean}) {
    useGSAP(() => {
        if(firstAnimComplete){
            const tl = gsap.timeline({paused: true})
                .to('.scroller-container', {overflowY: 'hidden'})
                .fromTo(['.cat-text-container-1 .text1', '.cat-text-container-1 .text2', '.cat-text-container-1 .error', '.cat-text-container-1 .errorMobile'], {
                    opacity: 0,
                    y: '35px'
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    stagger: {
                        each: 0.1
                    }
                })
                .fromTo(['.cat-text-container-1 .arrows', '.cat-text-container-1 .googles', '.cat-text-container-1 .graffiti'], {
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
            tl.play();

            ScrollTrigger.create({
                trigger: '.trigger-1',
                start: 'bottom center',
                end: 'bottom center',
                id: 'trigger-1',
                scroller: '.scroller-container',
                onEnter: () => {
                    gsap.fromTo('.cat-text-container-1', {
                        opacity: 1,
                        y: 0
                    }, {
                        opacity: 0,
                        y: '-50px',
                        duration: 0.3
                    })
                },
                onEnterBack: () => {
                    gsap.set('.cat-text-container-1', {opacity: 1, y: 0})
                    tl.restart(true);
                }
            })

            const listenerFunc = () => {
                tl.kill()
            }

            ScrollTrigger.addEventListener("refresh", listenerFunc)

            return () => {
                ScrollTrigger.removeEventListener("refresh", listenerFunc)
            }
        }
    }, [firstAnimComplete])
    return (
        <div className='cat-text-container-1 fixed top-0 pointer-events-none flex flex-col w-[100rem] h-full font-dharma-gothic-e font-black uppercase justify-center items-center text-center'>
            <div className='arrows absolute opacity-0
                w-[11rem] sm:w-[11rem] md:w-[11rem] lg:w-[16.7rem] xl:w-[16.7rem] 2xl:w-[16.7rem]
                top-[calc(50%+3rem)] sm:top-[calc(50%+5rem)] md:top-[calc(50%+6rem)] lg:top-[calc(50%+5rem)] xl:top-[calc(50%+5rem)] 2xl:top-[calc(50%+5rem)]
                left-[29.7rem] sm:left-[21rem] md:left-[21rem] lg:left-0 xl:left-0 2xl:left-0
            '>
                <ImageWrapper src={IMGArrows.src} alt='Arrows' />
            </div>
            <div className='googles absolute opacity-0
                w-[12.5rem] sm:w-[17.9rem] md:w-[17.9rem] lg:w-[17.9rem] xl:w-[17.9rem] 2xl:w-[17.9rem]
                top-[calc(50%-23rem)] sm:top-[calc(50%-26rem)] md:top-[calc(50%-26rem)] lg:top-[calc(50%-25rem)] xl:top-[calc(50%-24.7rem)] 2xl:top-[calc(50%-24.7rem)]
            '>
                <ImageWrapper src={IMGGoogles.src} alt='Googles' />
            </div>
            <div className='graffiti absolute opacity-0
                w-[13rem] sm:w-[15rem] md:w-[15rem] lg:w-[19rem] xl:w-[19rem] 2xl:w-[19rem]
                top-[calc(50%-4.5rem)] sm:top-[calc(50%-3rem)] md:top-[calc(50%-3rem)] lg:top-[calc(50%-5rem)] xl:top-[calc(50%-4rem)] 2xl:top-[calc(50%-4rem)]
                right-[32rem] sm:right-[23.5rem] md:right-[23.5rem] lg:right-[16.5rem] xl:right-[16.8rem] 2xl:right-[16.5rem]
            '>
                <ImageWrapper src={IMGGraffiti.src} alt='Graffiti' />
            </div>
            <div className='error absolute z-[1] opacity-0
                hidden sm:block md:block lg:block xl:block 2xl:block
                sm:w-[15.4rem] md:w-[15.4rem] lg:w-[22.7rem] xl:w-[22.7rem] 2xl:w-[22.7rem]
                sm:top-[calc(50%-1rem)] md:top-[calc(50%-1rem)] lg:top-[calc(50%-1rem)] xl:top-[calc(50%-0.5rem)] 2xl:top-[calc(50%-0.5rem)]
                sm:left-[calc(50%-16rem)] md:left-[calc(50%-16rem)] lg:left-[calc(50%-20.5rem)] xl:left-[calc(50%-20.5rem)] 2xl:left-[calc(50%-20.5rem)]
            '>
                <ImageWrapper src={IMGError.src} alt='Error' />
            </div>
            <div className='errorMobile absolute z-[1] opacity-0
                block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden
                w-[15.4rem] 
                top-[calc(50%-1.5rem)] left-[calc(50%-10.7rem)]
            '>
                <ImageWrapper src={IMGErrorMobile.src} alt='Error Mobile' />
            </div>
            <div className='flex flex-col gap-y-[2.4rem] absolute transform -translate-y-1/2
                top-[calc(50%+1rem)] sm:top-[calc(50%+3rem)] md:top-[calc(50%+3.5rem)] lg:top-[calc(50%+6rem)] xl:top-[calc(50%+6rem)] 2xl:top-[calc(50%+6rem)] 
            '>
                <p className='text1 opacity-0
                text-[7.2rem] sm:text-[10.2rem] md:text-[10.2rem] lg:text-[12.8rem] xl:text-[12.8rem] 2xl:text-[12.8rem] 
                leading-[5.3rem] sm:leading-[8.3rem] md:leading-[8.3rem] lg:leading-[9.4rem] xl:leading-[9.4rem] 2xl:leading-[9.4rem]
                '>The AI<br className='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden' /> industry <br className='hidden sm:block md:block lg:block xl:block 2xl:block'/>is <br className='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden' />stuck‍</p>
                <p className='text2 opacity-0
                text-[3.2rem] sm:text-[4.2rem] md:text-[4.2rem] lg:text-[6.4rem] xl:text-[6.4rem] 2xl:text-[6.4rem] 
                leading-[2.6rem] sm:leading-[3.6rem] md:leading-[3.6rem] lg:leading-[5.3rem] xl:leading-[5.3rem] 2xl:leading-[5.3rem]
                '>With proprietary black-box <br className='block lg:hidden xl:hidden 2xl:hidden' />services or the complexity of <br className='block lg:hidden xl:hidden 2xl:hidden' />building with mismatched <br className='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden' />technologies‍</p>
            </div>
        </div>
    )
}