import IMGCat from '@/public/imgs/comeBuildWithUs/cat.webp'
import IMGError from '@/public/imgs/comeBuildWithUs/error.webp'
import IMGPunchCard from '@/public/imgs/comeBuildWithUs/punchCard.webp'
import IMGFindOut from '@/public/imgs/comeBuildWithUs/findOut.webp'
import IMGData from '@/public/imgs/comeBuildWithUs/data.webp'
import IMGSticker from '@/public/imgs/comeBuildWithUs/sticker.webp'
import ImageWrapper from '@/components/common/ImageWrapper'

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/libs/litebox-lib/ui/Button/Button'
import Link from 'next/link'

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ComeBuildWithUs({firstAnimComplete, resetAnimationFn}: {firstAnimComplete?: boolean, resetAnimationFn: () => void}) {
    useGSAP(() => {
        if(firstAnimComplete){
            const tl = gsap.timeline({paused: true})
                .to({}, {duration: 0.5})
                .fromTo(['.come-build-with-us-container .cat'], {
                    opacity: 0,
                    y: '-35px'
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    stagger: {
                        each: 0.02
                    }
                })
                .fromTo(['.come-build-with-us-container .text1', '.come-build-with-us-container .text2'], {
                    opacity: 0,
                    y: '-35px'
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    stagger: {
                        each: 0.05
                    }
                })
                .fromTo(['.come-build-with-us-container .error', '.come-build-with-us-container .punchCard', '.come-build-with-us-container .findOut', '.come-build-with-us-container .data', '.come-build-with-us-container .sticker'], {
                    opacity: 0,
                    y: '-35px'
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.2
                })
                .fromTo(['.come-build-with-us-container .ainekko-repo-button'], {
                    opacity: 0,
                    y: '-35px'
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.2
                })

            gsap.to('.come-build-with-us-container .sticker', {
                rotation: 360,
                repeat: -1,
                duration: 2.5,
                ease: 'none'
            })
                
            ScrollTrigger.create({
                trigger: '.trigger-4',
                start: 'top center',
                end: 'top center',
                id: 'trigger-4',
                scroller: '.scroller-container',
                onEnter: () => {
                    gsap.to('.scroller-container', {overflowY: 'hidden'})
                    gsap.fromTo('.come-build-with-us-container', {
                        opacity: 0,
                        y: '-50px'
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.3
                    })
                    tl.restart(true)
                    .set('.scroller-container', {overflowY: 'scroll'})
                    .set('body', {overflowY: 'scroll'})
                    gsap.set('.navbar-team-link', {pointerEvents: 'auto'})
                },
                onEnterBack: () => {
                    gsap.set('body', {overflowY: 'hidden'})
                    gsap.fromTo('.come-build-with-us-container', {
                        opacity: 1, 
                        y: 0
                    }, {
                        opacity: 0, 
                        y: '50px',
                        duration: 0.3
                    })
                    gsap.set('.navbar-team-link', {pointerEvents: 'none'})
                }
            })

            const listenerFunc = () => {
                tl.kill()
                resetAnimationFn();
            }

            ScrollTrigger.addEventListener("refresh", listenerFunc)

            return () => {
                ScrollTrigger.removeEventListener("refresh", listenerFunc)
            }
        }
    }, [firstAnimComplete])

    return (
        <div className='come-build-with-us-container fixed top-0 pointer-events-none flex flex-col w-full h-full font-dharma-gothic-e font-black uppercase justify-center items-center text-center rounded-t-[2rem]'>
            <div className='punchCard absolute z-[0] opacity-0
                w-[16.1rem] sm:w-[17.4rem] sm:md:w-[35.4rem] md:w-[40.4rem] lg:w-[66.5rem] lg:xl:w-[66.5rem] xl:2xl:w-[66.5rem]    
                top-[calc(50%-10.5rem)] sm:top-[calc(50%-5rem)] md:top-[calc(50%-7.6rem)] lg:top-[calc(50%-12.5rem)] xl:top-[calc(50%-14.5rem)] 2xl:top-[calc(50%-14.5rem)]
                left-[calc(50%-9.3rem)] sm:left-[calc(50%-25rem)] md:left-[calc(50%-34rem)] lg:left-[calc(50%-56rem)] xl:left-[calc(50%-56rem)] 2xl:left-[calc(50%-56rem)]
            '>
                <ImageWrapper src={IMGPunchCard.src} alt='Punch card'/>
            </div>
            <div className='flex flex-col absolute transform -translate-y-1/2 text-sand
                top-[calc(50%-10rem)] sm:top-1/2 md:top-1/2 lg:top-1/2 xl:top-[calc(50%-2rem)] 2xl:top-[calc(50%-2rem)]
            '>
                <h1 className='text1 opacity-0
                ml-0 sm:ml-0 md:ml-[1rem] lg:ml-0 xl:ml-0 2xl:ml-0
                word-spacing-[0] sm:word-spacing-[8.8rem] md:word-spacing-[15rem] lg:word-spacing-[17.8rem] xl:word-spacing-[17.8rem] 2xl:word-spacing-[17.8rem]
                text-[8.8rem] sm:text-[10.2rem] md:text-[13.2rem] lg:text-[23.2rem] xl:text-[23.2rem] 2xl:text-[23.2rem] 
                leading-[6.5rem] sm:leading-[8rem] md:leading-[10rem] lg:leading-[17.5rem] xl:leading-[17.5rem] 2xl:leading-[17.5rem]
                '>Come<br className='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'/> build</h1>
                <h1 className='text2 opacity-0
                ml-0 sm:-ml-[3rem] md:-ml-[3rem] lg:-ml-[5rem] xl:-ml-[5rem] 2xl:-ml-[5rem]
                word-spacing-0 sm:word-spacing-[8.4rem] md:word-spacing-[12rem] lg:word-spacing-[18.4rem] xl:word-spacing-[18.4rem] 2xl:word-spacing-[18.4rem]
                text-[8.8rem] sm:text-[10.2rem] md:text-[13.2rem] lg:text-[23.2rem] xl:text-[23.2rem] 2xl:text-[23.2rem] 
                leading-[6.5rem] sm:leading-[8rem] md:leading-[10rem] lg:leading-[17.5rem] xl:leading-[17.5rem] 2xl:leading-[17.5rem]
                '>with us</h1>
            </div>
            <div className='cat absolute opacity-0
                w-[11rem] sm:w-[15rem] md:w-[20.7rem] lg:w-[30.3rem] xl:w-[30.3rem] 2xl:w-[30.3rem]
                bottom-[calc(50%-10rem)] sm:top-[calc(50%-10.5rem)] md:top-[calc(50%-15rem)] lg:top-[calc(50%-20rem)] xl:top-[calc(50%-22rem)] 2xl:top-[calc(50%-22rem)]
                left-[calc(50%-4.5rem)] sm:left-[calc(50%-6rem)] md:left-[calc(50%-8rem)] lg:left-[calc(50%-10rem)] xl:left-[calc(50%-10rem)] 2xl:left-[calc(50%-10rem)]
            '>
                <ImageWrapper src={IMGCat.src} alt='Cat' />
            </div>
            <div className='error absolute z-[1] opacity-0
                w-[13.2rem] sm:w-[17.4rem] md:w-[20.4rem] lg:w-[30.1rem] xl:w-[30.1rem] 2xl:w-[30.1rem]    
                top-[calc(50%-5rem)] sm:top-[calc(50%+2rem)] md:top-[calc(50%+3rem)] lg:top-[calc(50%+5rem)] xl:top-[calc(50%+3rem)] 2xl:top-[calc(50%+3rem)]
                left-[calc(50%-12.3rem)] sm:left-[calc(50%-20rem)] md:left-[calc(50%-27.5rem)] lg:left-[calc(50%-45rem)] xl:left-[calc(50%-45rem)] 2xl:left-[calc(50%-45rem)]
            '>
                <ImageWrapper src={IMGError.src} alt='Error'/>
            </div>
            <div className='findOut absolute z-[1] opacity-0
                w-[9.3rem] sm:w-[14.4rem] md:w-[14.4rem] lg:w-[24.3rem] xl:w-[24.3rem] 2xl:w-[24.3rem]
                top-[calc(50%-15.7rem)] sm:top-[calc(50%-5.5rem)] md:top-[calc(50%-8.2rem)] lg:top-[calc(50%-13.8rem)] xl:top-[calc(50%-15.8rem)] 2xl:top-[calc(50%-15.8rem)]
                right-[calc(50%-11rem)] sm:right-[calc(50%-28.5rem)] md:right-[calc(50%-35rem)] lg:right-[calc(50%-55.5rem)] xl:right-[calc(50%-55.5rem)] 2xl:right-[calc(50%-55.5rem)]
            '>
                <ImageWrapper src={IMGFindOut.src} alt='Find Out'/>
            </div>
            <div className='data absolute z-[1] opacity-0
                w-[6.5rem] sm:w-[7.4rem] md:w-[9.4rem] lg:w-[13.9rem] xl:w-[13.9rem] 2xl:w-[13.9rem]
                top-[calc(50%-6rem)] sm:top-[calc(50%+2rem)] md:top-[calc(50%+3rem)] lg:top-[calc(50%+5.5rem)] xl:top-[calc(50%+3.5rem)] 2xl:top-[calc(50%+3.5rem)]
                right-[calc(50%-17.5rem)] sm:right-[calc(50%-23.5rem)] md:right-[calc(50%-30.5rem)] lg:right-[calc(50%-50.5rem)] xl:right-[calc(50%-50.5rem)] 2xl:right-[calc(50%-50.5rem)]
            '>
                <ImageWrapper src={IMGData.src} alt='Data'/>
            </div>
            <div className='sticker absolute z-[1] opacity-0
                w-[5.5rem] sm:w-[5.5rem] md:w-[8rem] lg:w-[12rem] xl:w-[12rem] 2xl:w-[12rem]
                top-[calc(50%-10.5rem)] sm:top-[calc(50%-4rem)] md:top-[calc(50%-5rem)] lg:top-[calc(50%-7rem)] xl:top-[calc(50%-9rem)] 2xl:top-[calc(50%-9rem)]
                right-[calc(50%-10rem)] sm:right-[calc(50%-18.5rem)] md:right-[calc(50%-26rem)] lg:right-[calc(50%-44rem)] xl:right-[calc(50%-44rem)] 2xl:right-[calc(50%-44rem)]
            '>
                <ImageWrapper src={IMGSticker.src} alt='Data'/>
            </div>
            <Button className='ainekko-repo-button pointer-events-auto absolute transform -translate-x-1/2 left-1/2 opacity-0
            bottom-[calc(50%-22rem)] sm:bottom-[calc(50%-22rem)] md:bottom-[calc(50%-22rem)] lg:bottom-[calc(50%-28rem)] xl:bottom-[calc(50%-28rem)] 2xl:bottom-[calc(50%-28rem)] 
            ' target='_blank' as={Link} href='https://github.com/aifoundry-org/ainekko' variant='primary' content='ainekko repo' svg='arrow-up-right' />
        </div>
    )
}