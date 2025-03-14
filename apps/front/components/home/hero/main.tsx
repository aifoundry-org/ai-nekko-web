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

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
    const percentParagraphRef = useRef(null);
    const [percent, setpercent] = useState(0);
    const [firstAnimComplete, setFirstAnimComplete] = useState(false);

    // eslint-disable-next-line prefer-const
    let skipAnim = false;

    useGSAP(() => {
        if(skipAnim || window.scrollY > 10){
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
            gsap.set('.navbar-team-link', {color: 'black', pointerEvents: 'auto'})

            return;
        }

        const tl = gsap.timeline({paused:true, onComplete: () => {setFirstAnimComplete(true)}});
        const mm = gsap.matchMedia();

        tl.set('.navbar', {top: '9.4rem'});
        tl.set('.navbar-team-link', {color: 'gray', pointerEvents: 'none'})

        // Remove scroll from body
        tl.set('body', {overflowY: 'hidden'})

        // Remove scroll from main container
        tl.set('.scroller-container', {overflowY: 'hidden'})

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
                gsap.to('.dark-cat', {
                    clipPath: `inset(${100 - progress}% 0% 0% 0%)`,
                    duration: 0,
                });
            },
        }, '<');

        // Hide light cat image
        tl.set('.light-cat', { display: 'none' })
    
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
            tl.to('.anim-container', { width: '69.2rem', height: '59.6rem', duration: 0.75, ease: 'power2.out' });
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
        tl.set('.scroller-container', {overflowY: 'scroll'})

        // Enable going back to previous section
        ScrollTrigger.create({
            scroller: 'body',
            start: () => 'top top',
            end: () => 'top+=1px top',
            trigger: 'body',
            onEnter: () => {
                gsap.set('.main-container', { pointerEvents: 'none'})
            },
            onEnterBack: () => {
                gsap.set('.main-container', { pointerEvents: 'auto'})
            }
        })

        tl.play();
    });
    
    return (
        <div className='main-container relative w-full h-screen overflow-hidden translate-x-0 translate-y-0 bg-black'>
            <div className='absolute w-full h-full flex justify-center items-center rounded-t-[2rem] bg-sand'>
                <div className='anim-container absolute flex opacity-0 -translate-y-1/2 transform 
                    w-[5.6rem] md:w-[7.5rem] lg:w-[7.5rem] xl:w-[7.5rem] 2xl:w-[7.5rem] 
                    h-[5.1rem] md:h-[6.9rem] lg:h-[6.9rem] xl:h-[6.9rem] 2xl:h-[6.9rem] 
                    top-[calc(50%+4.5rem)] sm:top-[calc(50%+4.5rem)] md:top-[calc(50%+4.5rem)] lg:top-[calc(50%+4.5rem)] xl:top-[calc(50%+4.5rem)] 2xl:top-[calc(50%+4.5rem)] 
                '>
                    <Image className='light-cat absolute transform left-1/2 -translate-x-1/2
                    -top-[4.5rem] sm:-top-[5rem] md:-top-[5rem] lg:-top-[5rem] xl:-top-[5rem] 2xl:-top-[5rem]
                    ' width={662} height={597} src={IMGCatAnimLight.src} alt='Cat Animation Light Color' />
                    <Image className='dark-cat absolute transform left-1/2 -translate-x-1/2 w-full h-full
                    -top-[4.5rem] sm:-top-[5rem] md:-top-[5rem] lg:-top-[5rem] xl:-top-[5rem] 2xl:-top-[5rem]
                    ' style={{clipPath: 'inset(100% 0% 0% 0%)'}} width={662} height={597} src={IMGCatAnim.src} alt='Cat Animation Dark Color' />
                    <div className='absolute transform left-1/2 -translate-x-1/2 font-dharma-gothic-e flex font-black justify-center items-center
                        -bottom-[2rem] sm:-bottom-[3rem] md:-bottom-[8rem] lg:-bottom-[9rem] xl:-bottom-[9rem] 2xl:-bottom-[9rem] 
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
            <div className='scroller-container relative w-full h-full snap-y snap-mandatory overflow-x-hidden'>
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