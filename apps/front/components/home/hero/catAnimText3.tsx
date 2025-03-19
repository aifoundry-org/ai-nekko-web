import IMGArrows from '@/public/imgs/hero/arrows.webp'
import IMGCircles from '@/public/imgs/hero/circles.webp'
import IMGError from '@/public/imgs/hero/error.webp'
import IMGErrorMobile from '@/public/imgs/hero/errorMobile.webp'
import IMGGraffiti from '@/public/imgs/hero/graffiti_3.webp'
import IMGGloves from '@/public/imgs/hero/gloves.webp'
import ImageWrapper from '@/components/common/ImageWrapper'

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CatAnimText3({firstAnimComplete}: {firstAnimComplete?: boolean}) {
    useGSAP(() => {
        if(firstAnimComplete){
            let prevWidth = 0
            let prevHeight = 0
            const animContainer = document.querySelector('.anim-container');
            if(animContainer){
                prevWidth = animContainer.getBoundingClientRect().width
                prevHeight = animContainer.getBoundingClientRect().height
            }
            const tl = gsap.timeline({paused: true})
                .to('.scroller-container', {overflowY: 'hidden'})
                .fromTo(['.cat-text-container-3 .text1', '.cat-text-container-3 .text2', '.cat-text-container-3 .error', '.cat-text-container-3 .errorMobile'], {
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
                .fromTo(['.cat-text-container-3 .arrows', '.cat-text-container-3 .googles', '.cat-text-container-3 .circles', '.cat-text-container-3 .graffiti'], {
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
            
            const tl2 = gsap.timeline({paused: true})
                .to('.scroller-container', {overflowY: 'hidden'})
                .to('.cat-text-container-3', {scale: 1, opacity: 1, delay: 0.3, duration: 0.5})
                .to('.scroller-container', {overflowY: 'scroll'})
                
            ScrollTrigger.create({
                trigger: '.trigger-3',
                start: () => 'top+=30vw center',
                end: () => 'bottom-=30vw center',
                id: 'trigger-3',
                scroller: '.scroller-container',
                onEnter: () => {
                    gsap.fromTo('.cat-text-container-3', {
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
                    gsap.fromTo('.cat-text-container-3', {
                        opacity: 1,
                        y: 0
                    }, {
                        opacity: 0,
                        scale: 1.25,
                        duration: 0.3
                    })
                    gsap.to('.anim-container', { width: `${prevWidth*5}px`, height: `${prevHeight*5}px`, duration: 1});
                },
                onEnterBack: () => {
                    gsap.to('.anim-container', { width: prevWidth, height: prevHeight, duration: 1});
                    tl2.restart(true);
                },
                onLeaveBack: () => {
                    gsap.fromTo('.cat-text-container-3', {
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
        <div className='cat-text-container-3 fixed top-0 pointer-events-none flex flex-col w-[100rem] h-full font-dharma-gothic-e font-black uppercase justify-center items-center text-center'>
            <div className='absolute arrows opacity-0
                w-[11rem] sm:w-[11rem] md:w-[14.7rem] md:lg:w-[16.7rem] xl:w-[16.7rem] 2xl:w-[16.7rem]
                top-[calc(50%+1.5rem)] sm:top-[calc(50%+5rem)] md:top-[calc(50%+2rem)] lg:top-[calc(50%+4.6rem)] xl:top-[calc(50%+5.6rem)] 2xl:top-[calc(50%+5.6rem)]
                left-[29.7rem] sm:left-[22rem] md:left-[13rem] lg:left-0 xl:left-0 2xl:left-0
            '>
                <ImageWrapper src={IMGArrows.src} alt='Arrows'/>
            </div>
            <div className='absolute googles opacity-0
                w-[9.5rem] sm:w-[11.3rem] md:w-[11.3rem] lg:w-[11.3rem] xl:w-[11.3rem] 2xl:w-[11.3rem]
                top-[calc(50%-24rem)] sm:top-[calc(50%-26rem)] md:top-[calc(50%-27rem)] lg:top-[calc(50%-26.5rem)] xl:top-[calc(50%-26.5rem)] 2xl:top-[calc(50%-26.5rem)]
            '>
                <ImageWrapper src={IMGGloves.src} alt='Googles'/>
            </div>
            <div className='absolute z-[1] circles opacity-0
                w-[5.1rem] sm:w-[7.1rem] md:w-[7.1rem] lg:w-[7.1rem] xl:w-[7.1rem] 2xl:w-[7.1rem]
                top-[calc(50%-8.5rem)] sm:top-[calc(50%-5.8rem)] md:top-[calc(50%-7rem)] lg:top-[calc(50%-7.9rem)] xl:top-[calc(50%-7.5rem)] 2xl:top-[calc(50%-7.5rem)]
                right-[calc(50%-7.8rem)] sm:right-[calc(50%-11.1rem)] md:right-[calc(50%-11.1rem)] lg:right-[calc(50%-12.1rem)] xl:right-[calc(50%-12.1rem)] 2xl:right-[calc(50%-12.1rem)]
            '>
                <ImageWrapper src={IMGCircles.src} alt='Circles'/>
            </div>
            <div className='absolute z-[1] error opacity-0
                hidden sm:block md:block lg:block xl:block 2xl:block
                sm:w-[17.4rem] sm:md:w-[20.4rem] lg:w-[22.7rem] xl:w-[22.7rem] 2xl:w-[22.7rem]    
                sm:top-[calc(50%-8rem)] md:top-[calc(50%-10rem)] lg:top-[calc(50%-1.3rem)] xl:top-[calc(50%+0.3rem)]
                sm:left-[32rem] md:left-[calc(50%-20rem)] lg:left-[calc(50%-25rem)] xl:left-[calc(50%-25rem)] 2xl:left-[calc(50%-25rem)]
            '>
                <ImageWrapper src={IMGError.src} alt='Error'/>
            </div>
            <div className='absolute z-[1] errorMobile opacity-0
                block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden
                w-[15.4rem]
                top-[calc(50%-5rem)] left-[calc(50%-11rem)]
            '>
                <ImageWrapper src={IMGErrorMobile.src} alt='Error Mobile'/>
            </div>
            <div className='absolute transform -translate-x-1/2 graffiti opacity-0
                w-[10rem] sm:w-[15.9rem] md:w-[15.9rem] lg:w-[15.9rem] xl:w-[15.9rem] 2xl:w-[15.9rem]
                bottom-[calc(50%-25rem)] sm:bottom-[calc(50%-34rem)] md:bottom-[calc(50%-34rem)] lg:bottom-[calc(50%-34rem)] xl:bottom-[calc(50%-35rem)] 2xl:bottom-[calc(50%-35rem)]
                left-1/2
            '>
                <ImageWrapper src={IMGGraffiti.src} alt='Graffiti'/>
            </div>
            <div className='flex flex-col absolute transform -translate-y-1/2
                top-[calc(50%+1rem)] sm:top-[calc(50%+4rem)] md:top-[calc(50%+3rem)] lg:top-[calc(50%+5.5rem)] xl:top-[calc(50%+6rem)] 2xl:top-[calc(50%+6rem)] 
                gap-y-[4rem] sm:gap-y-[2rem] md:gap-y-[2rem] lg:gap-y-[2rem] xl:gap-y-[2rem] 2xl:gap-y-[2rem] 
            '>
                <p className='text1 opacity-0
                text-[7.2rem] sm:text-[10.2rem] md:text-[10.2rem] lg:text-[12.8rem] xl:text-[12.8rem] 2xl:text-[12.8rem] 
                leading-[5.3rem] sm:leading-[8rem] md:leading-[8.3rem] lg:leading-[9.4rem] xl:leading-[9.4rem] 2xl:leading-[9.4rem]
                '>AiNekko is<br/> building</p>
                <p className='text2 opacity-0
                text-[3.2rem] sm:text-[4.2rem] md:text-[4.2rem] lg:text-[6.4rem] xl:text-[6.4rem] 2xl:text-[6.4rem] 
                leading-[2.6rem] sm:leading-[3.6rem] md:leading-[3.6rem] lg:leading-[5.3rem] xl:leading-[5.3rem] 2xl:leading-[5.3rem]
                '>An open source composable<br className='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'/> stack<br className='hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden'/> from inference to<br className='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'/> hardware<br className='hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden'/> to bring freedom of<br className='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'/> choice to the AI Market</p>
            </div>
        </div>
    )
}