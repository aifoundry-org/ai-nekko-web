'use client'

import { useRef } from 'react';
import Link from 'next/link';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import IMGBackground from '@/public/imgs/blog/background.webp'
import IMGMarquee from '@/public/imgs/blog/marquee.webp'
import IMGMarqueeMobile from '@/public/imgs/blog/marqueeMobile.webp'
import IMGMoto from '@/public/imgs/blog/moto.webp'
import IMGDecorations from '@/public/imgs/blog/decorations.webp'
import IMGArrows from '@/public/imgs/blog/arrows.webp'
import Button from '@/libs/litebox-lib/ui/Button/Button';
import ArticleBox from '@/components/blog/articlesContainer/articleBox';
import ImageWrapper from '@/components/common/ImageWrapper';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function RelatedArticles({ articles }: {articles?: StrapiArticle[]}) {
    const refMotoCat = useRef<HTMLDivElement | null>(null)
    
    useGSAP(() => {
        if(refMotoCat && refMotoCat.current){
            const {x: motoCatStartingPoint, width: motoCatWidth} = refMotoCat.current.getBoundingClientRect()
            const {innerWidth: windowWidth} = window
            const motoCatEndingPoint = windowWidth - motoCatWidth

            setTimeout(() => {
                ScrollTrigger.create({
                    trigger: '.scroller',
                    start: () => 'top center',
                    end: () => 'bottom center',
                    scroller: 'body',
                    onUpdate: self => {
                        if(motoCatStartingPoint && windowWidth && motoCatWidth){
                            const {progress} = self
                            const newPosition = (motoCatEndingPoint - motoCatStartingPoint) * progress;
                            
                            gsap.to(refMotoCat.current, {
                                ease: 'none',
                                duration: 0,
                                x: newPosition
                            })
                        }
                    },
                    onEnter: () => {
                        gsap.to(refMotoCat.current, {
                            ease: 'none',
                            duration: 0,
                            x: 0
                        })
                    },
                    onLeave: () => {
                        console.log('onLeave ', motoCatEndingPoint)
                        gsap.to(refMotoCat.current, {
                            ease: 'none',
                            duration: 0,
                            x: motoCatEndingPoint - motoCatStartingPoint
                        })
                    }
                })

                ScrollTrigger.refresh()
            }, 100)
        }
    }, [])

    return (
        <div className='w-full h-full bg-orange relative pt-[10rem] mt-[14rem]'>
            <div className='flex w-full absolute -top-[4vw]'>
                <ImageWrapper style={{objectFit: 'cover'}} src={IMGBackground.src} alt="Background" />
            </div>
            <div className='flex flex-col mx-auto relative
                w-[32.7rem] sm:w-[54rem] md:w-[72rem] lg:w-[95.6rem] xl:w-[121.6rem] 2xl:w-[130rem]
            '>
                <p className='font-black text-[4rem] md:text-[6.4rem] lg:text-[6.4rem] xl:text-[6.4rem] 2xl:text-[6.4rem] justify-start leading-[5.3rem] uppercase mb-[4.8rem]'>Related posts</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[2.4rem] gap-y-20 mx-auto
                    w-[32.7rem] sm:w-[54rem] md:w-[72rem] lg:w-[95.6rem] xl:w-[121.6rem] 2xl:w-[130rem]
                '>
                    {articles && articles.map((article: StrapiArticle) => ArticleBox({article}))}
                </div>
                <div className='flex w-full mx-auto mt-[4.8rem] 
                    mb-[10rem] sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0
                    justify-start sm:justify-end md:justify-end lg:justify-end xl:justify-end 2xl:justify-end
                '>
                    <Button as={Link} href='/blog/' variant='primary' content='View all blog posts' />
                </div>
                <div className='w-[16.9rem] relative -top-[6.5rem] -left-[2rem]
                    hidden sm:flex md:flex lg:flex xl:flex 2xl:flex
                '>
                    <ImageWrapper src={IMGArrows.src} alt="Arrows" />
                </div>
            </div>
            <div className='scroller flex relative w-full
                h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] xl:h-[45rem] 2xl:h-[45rem] 
                mb-[16rem] sm:mb-[10rem] md:mb-[10rem] lg:mb-[4rem] xl:mb-[10rem] 2xl:mb-[10rem] 
            '>
                <div className='w-full h-fit absolute left-0 top-[15rem]
                    hidden sm:flex md:flex lg:flex xl:flex 2xl:flex 
                '>
                    <ImageWrapper src={IMGMarquee.src} alt="Marquee" />
                </div>
                <div className='w-full h-fit absolute left-0 top-[7rem]
                    flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden 
                '>
                    <ImageWrapper src={IMGMarqueeMobile.src} alt="Marquee" />
                </div>
                <div ref={refMotoCat} className='motoCat flex absolute
                    w-[29.2rem] sm:w-[25.9rem] md:w-[31.9rem] lg:w-[35.9rem] xl:w-[45.9rem] 2xl:w-[45.9rem] 
                    top-[2.5rem] sm:top-[calc(50%-10.5rem)] md:top-[calc(50%-10.5rem)] lg:top-[calc(50%-16.5rem)] xl:top-[calc(50%-20.1rem)] 2xl:top-[calc(50%-20.1rem)]
                    left-[calc(50%-28rem)] sm:left-[calc(50%-30rem)] md:left-[calc(50%-38rem)] lg:left-[calc(50%-52rem)] xl:left-[calc(50%-62rem)] 2xl:left-[calc(50%-62rem)]
                '>
                    <ImageWrapper src={IMGMoto.src} alt="Cat" />
                </div>
            </div>
            <div className='flex w-full h-full relative bg-orange'>
                <div className='flex absolute
                    -bottom-[7rem] sm:-bottom-[5.5rem] md:-bottom-[7rem] lg:-bottom-[9rem] xl:-bottom-[13.5rem] 2xl:-bottom-[13.5rem] 
                    right-0 sm:right-0 md:right-0 lg:right-0 xl:right-[4rem] 2xl:right-[4rem]
                    w-[24rem] sm:w-[20rem] md:w-[24rem] lg:w-[30rem] xl:w-[44rem] 2xl:w-[44rem] 
                '>
                    <ImageWrapper src={IMGDecorations.src} alt="Background" />
                </div>
            </div>
        </div>
    );
};