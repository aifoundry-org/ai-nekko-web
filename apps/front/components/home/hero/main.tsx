'use client'

import Image from 'next/image'

import CatAnimText1 from './catAnimText1';
import CatAnimText2 from './catAnimText2';
import CatAnimText3 from './catAnimText3';
import ComeBuildWithUs from './comeBuildWithUs';
import IMGCatAnim from '@/public/imgs/hero/catAnim.webp'
import IMGCatAnimLight from '@/public/imgs/hero/catAnimLight.webp'

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function CatAnim() {
    const scrollerContainerRef = useRef<HTMLDivElement | null>(null);
    const percentParagraphRef = useRef(null);
    const [percent, setpercent] = useState(0);
    const imgDarkCatRef = useRef(null);
    const imgLightCatRef = useRef(null);
    const [firstAnimComplete, setFirstAnimComplete] = useState(false);

    // eslint-disable-next-line prefer-const
    let skipAnim = false;

    useGSAP(() => {
        if(!skipAnim && firstAnimComplete){
            if (!scrollerContainerRef.current) return;
        
            // Recalculate the markers for the scroll triggers based on scrollerContainerRef
            ScrollTrigger.scrollerProxy(scrollerContainerRef.current, {
                scrollTop(value) {
                    return arguments.length ? scrollerContainerRef.current?.scrollTo({ top: value }) : scrollerContainerRef.current?.scrollTop;
                },
                getBoundingClientRect() {
                    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
                }
            });
        }
    }, [firstAnimComplete, skipAnim])

    useGSAP(() => {
        if(skipAnim){
            gsap.set(['.trigger-1', '.trigger-2', '.trigger-3'],{
                display: 'none'
            })

            gsap.set('.come-build-with-us-container', {
                position: 'relative',
                opacity: 1,
                y: 0,
                backgroundColor: '#F9A03F' // bg-orange
            })

            gsap.set([
                '.come-build-with-us-container .cat',
                '.come-build-with-us-container .text1',
                '.come-build-with-us-container .text2',
                '.come-build-with-us-container .error',
                '.come-build-with-us-container .punchCard',
                '.come-build-with-us-container .findOut',
                '.come-build-with-us-container .data',
                '.come-build-with-us-container .sticker',
                '.come-build-with-us-container .ainekko-repo-button'], {
                    opacity: 1,
                    y: 0,
                }
            )
            gsap.to('.come-build-with-us-container .sticker', {
                rotation: 360,
                repeat: -1,
                duration: 2.5,
                ease: 'none'
            })
            gsap.set('body', {overflowY: 'scroll'})
            gsap.set('.scroller-container', {overflowY: 'hidden'})

            return;
        }

        const tl = gsap.timeline({onComplete: () => {setFirstAnimComplete(true)}});
        const mm = gsap.matchMedia();

        // Remove scroll from main container
        tl.set(scrollerContainerRef.current, {overflowY: 'hidden'})

        // Short pause
        tl.to({}, { duration: 0.5 });
    
        // Initial FadeIn
        tl.to('.anim-container',{ opacity: 1, duration: 1 });

        // Short pause
        tl.to({}, { duration: 0.5 });
    
        // Increment the number from 0 to 100
        tl.to({}, {
            duration: 1,
            onUpdate: function () {
                const progress = Math.floor(this.progress() * 100);
                setpercent(progress);

                // Fill the cat with a darker color
                gsap.to(imgDarkCatRef.current, {
                    clipPath: `inset(${100 - progress}% 0% 0% 0%)`,
                    duration: 0,
                });
            },
        }, '<');

        // Hide light cat image
        tl.set(imgLightCatRef.current, { display: 'none' })
    
        // Fading out of the percent number and enlarging the cat image
        // (with responsive)
        tl.to(percentParagraphRef.current, { opacity: 0, duration: 0.35, onComplete: () => {
            tl.set(percentParagraphRef.current, { display: 'none' })
        } }, '+=0.4');

        mm.add('(max-width: 430px)', () => { // xs
            tl.to('.anim-container', { width: '55.8rem', height: '50.2rem', duration: 0.75, ease: 'power2.out' });
        })
        mm.add('(min-width: 431px) and (max-width: 639px)', () => { // xs
            tl.to('.anim-container', { width: '55.8rem', height: '50.2rem', duration: 0.75, ease: 'power2.out' });
        })
        mm.add('(min-width: 640px) and (max-width: 767px)', () => { // sm
            tl.to('.anim-container', { width: '66.2rem', height: '59.6rem', duration: 0.75, ease: 'power2.out' });
        })
        mm.add('(min-width: 768px) and (max-width: 1023px)', () => { // md
            tl.to('.anim-container', { width: '66.2rem', height: '59.6rem', duration: 0.75, ease: 'power2.out' });
        })
        mm.add('(min-width: 1024px) and (max-width: 1279px)', () => { // lg
            tl.to('.anim-container', { width: '66.2rem', height: '59.6rem', duration: 0.75, ease: 'power2.out' });
        })
        mm.add('(min-width: 1280px) and (max-width: 1535px)', () => { // xl
            tl.to('.anim-container', { width: '66.2rem', height: '59.6rem', duration: 0.75, ease: 'power2.out' });
        })
        mm.add('(min-width: 1536px)', () => { // 2xl
            tl.to('.anim-container', { width: '66.2rem', height: '59.6rem', duration: 0.75, ease: 'power2.out' });
        })

        // Enable scroll for main container
        tl.set(scrollerContainerRef.current, {overflowY: 'scroll'})

        // Enable going back to previous section
        ScrollTrigger.create({
            scroller: 'body',
            start: 'top top',
            end: 'top+=1px top',
            trigger: 'body',
            onEnter: () => {
                gsap.set('.main-container', { pointerEvents: 'none'})
            },
            onEnterBack: () => {
                gsap.set('.main-container', { pointerEvents: 'auto'})
            }
        })
    });
    
    return (
        <div className='main-container relative w-full h-screen overflow-hidden translate-x-0 translate-y-0'>
            <div className='absolute w-full h-full flex justify-center items-center'>
                <div className='anim-container absolute flex opacity-0 
                    w-[5.6rem] md:w-[7.5rem] lg:w-[7.5rem] xl:w-[7.5rem] 2xl:w-[7.5rem] 
                    h-[5.1rem] md:h-[6.9rem] lg:h-[6.9rem] xl:h-[6.9rem] 2xl:h-[6.9rem] 
                '>
                    <Image ref={imgLightCatRef} className='absolute top-0 left-0' width={662} height={597} src={IMGCatAnimLight.src} alt='Cat Animation Light Color' />
                    <Image ref={imgDarkCatRef} className='absolute top-0 left-0 w-full h-full' style={{clipPath: 'inset(100% 0% 0% 0%)'}} width={662} height={597} src={IMGCatAnim.src} alt='Cat Animation Dark Color' />
                    <div className='relative left-1/2 transform -translate-x-1/2 font-dharma-gothic-e flex font-black justify-center items-center
                    -bottom-[7rem] md:-bottom-[11.5rem] lg:-bottom-[11.5rem] xl:-bottom-[11.5rem] 2xl:-bottom-[11.5rem] 
                    '>
                        <p ref={percentParagraphRef} className='
                            text-[6.4rem] md:text-[12.8rem] lg:text-[12.8rem] xl:text-[12.8rem] 2xl:text-[12.8rem]
                            leading-[4.7rem] md:leading-[9.4rem] lg:leading-[9.4rem] xl:leading-[9.4rem] 2xl:leading-[9.4rem]
                        '>
                            {percent}%
                        </p>
                    </div>
                </div>
            </div>
            <div ref={scrollerContainerRef} className='scroller-container relative w-full h-full snap-y snap-mandatory overflow-x-hidden'>
                <div className='trigger-1 w-full h-full flex flex-col justify-center items-center snap-center'>
                    <CatAnimText1 firstAnimComplete={firstAnimComplete} />
                </div>
                <div className='trigger-2 w-full h-full flex flex-col justify-center items-center snap-center'>
                    <CatAnimText2 firstAnimComplete={firstAnimComplete} />
                </div>
                <div className='trigger-3 w-full h-full flex flex-col justify-center items-center snap-center'>
                    <CatAnimText3 firstAnimComplete={firstAnimComplete} />
                </div>
                <div className='trigger-4 w-full h-full flex flex-col justify-center items-center snap-center'>
                    <ComeBuildWithUs firstAnimComplete={firstAnimComplete} />
                </div>
            </div>
        </div>
    )
}