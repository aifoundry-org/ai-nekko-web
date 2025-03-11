'use client'

import { usePathname } from 'next/navigation';
import IMGCat from '@/public/imgs/footer/cat.webp'
import IMGSticker from '@/public/imgs/footer/sticker.webp'
import SVGIconLinkedin from '@/public/svgs/common/IconLinkedin.svg'
import ImageWrapper from '@/components/common/ImageWrapper';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Footer(){
    const pathname = usePathname();

    useGSAP(() => {
        gsap.to('.footer-sticker', {
            rotation: 360,
            repeat: -1,
            duration: 2.5,
            ease: 'none'
        })
    })
    
    return (
        <footer className={`relative w-full flex ${pathname.includes('/blog/') ? 'bg-peach' : 'bg-none'} overflow-hidden
            h-[43.3rem] sm:h-[35rem] md:h-[45rem] lg:h-[55rem] xl:h-[60.1rem] 2xl:h-[60.1rem] 
        `}>
            <div className='relative w-full flex bg-black rounded-t-[2rem] text-sand'>
                <div className='relative w-full flex flex-col
                    mx-[2.4rem] sm:mx-[4.2rem] md:mx-[6.2rem] lg:mx-[11.2rem] xl:mx-[11.2rem] 2xl:mx-[11.2rem] 
                    mt-[4rem] sm:mt-[4rem] md:mt-[6.4rem] lg:mt-[6.4rem] xl:mt-[6.4rem] 2xl:mt-[6.4rem] 
                '>
                    <div className='relative w-full h-fit flex border-t-2 border-sand 
                        flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row
                        pt-[2.4rem] sm:pt-[2.9rem] md:pt-[2.9rem] lg:pt-[2.9rem] xl:pt-[2.9rem] 2xl:pt-[2.9rem] 
                    '>
                        <div className='relative w-full h-fit uppercase font-bold tracking-wider justify-start 
                            flex xs:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:hidden
                            gap-x-[3.2rem] lg:gap-x-[4.8rem] xl:gap-x-[4.8rem] 2xl:gap-x-[4.8rem] 
                            text-[1.8rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2rem] 
                            leading-[1.8rem] lg:leading-[2rem] xl:leading-[2rem] 2xl:leading-[2rem] 
                        '>
                            <div onClick={() => window.open('https://aifoundry.org')} >ai foundry</div>
                            <div onClick={() => window.location.href='/#team'} >team</div>
                            <div onClick={() => window.location.href='/blog'} >blog</div>
                            <div onClick={() => window.location.href='/privacy-policy'} className='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>privacy policy</div>
                        </div>
                        <div className='relative w-full h-fit uppercase font-bold tracking-wider items-end justify-end
                            mt-[1.4rem] sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 
                            flex xs:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:hidden
                            gap-x-[3.2rem] lg:gap-x-[4.8rem] xl:gap-x-[4.8rem] 2xl:gap-x-[4.8rem] 
                            text-[1.8rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2rem] 
                            leading-[1.8rem] lg:leading-[2rem] xl:leading-[2rem] 2xl:leading-[2rem] 
                        '>
                            <div className='hidden sm:block md:block lg:block xl:block 2xl:block
                                basis-1/3 sm:basis-auto md:basis-auto lg:basis-auto xl:basis-auto 2xl:basis-auto
                            ' onClick={() => window.location.href='/privacy-policy'} >privacy policy</div>
                            <div className='basis-1/2 sm:basis-auto md:basis-auto lg:basis-auto xl:basis-auto 2xl:basis-auto' onClick={() => window.location.href='/terms-of-service'} >terms of service</div>
                            <div className='basis-1/2 sm:basis-auto md:basis-auto lg:basis-auto xl:basis-auto 2xl:basis-auto' onClick={() => window.location.href='/cookie-policy'} >cookie policy</div>
                            <div className='basis-1/4 justify-end mt-0
                                flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden 
                            '>
                                <div className=' w-[2.4rem] h-[2.4rem]'>
                                    <div onClick={() => window.open('https://www.linkedin.com/company/nekko-ai/')}>
                                        <ImageWrapper src={SVGIconLinkedin.src} alt="Linkedin" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-full h-fit uppercase font-bold tracking-wider justify-between
                            hidden xs:flex sm:flex md:flex lg:hidden xl:hidden 2xl:flex
                            xs:gap-x-[1.8rem] sm:gap-x-[2.2rem] md:gap-x-[4.2rem] 2xl:gap-x-[4rem]
                            xs:text-[2rem] sm:text-[2rem] md:text-[2rem] 2xl:text-[4rem]
                            xs:leading-[2rem] sm:leading-[2rem] md:leading-[2rem] 2xl:leading-[4rem]
                        '>
                            <div onClick={() => window.open('https://aifoundry.org')}>ai foundry</div>
                            <div onClick={() => window.location.href='/#team'}>team</div>
                            <div onClick={() => window.location.href='/blog'}>blog</div>
                            <div onClick={() => window.location.href='/privacy-policy'} >privacy policy</div>
                            <div onClick={() => window.location.href='/terms-of-service'} >terms of service</div>
                            <div onClick={() => window.location.href='/cookie-policy'} >cookie policy</div>
                        </div>
                    </div>
                    <div className='relative w-full h-fit justify-end 
                    hidden xs:flex sm:flex md:flex lg:flex xl:flex 2xl:flex 
                    '>
                        <div className='
                            mt-[3.2rem] sm:mt-[2rem] md:mt-[3.2rem] lg:mt-[3.2rem] xl:mt-[3.2rem] 2xl:mt-[3.2rem] 
                            w-[2.8rem] sm:w-[2.8rem] md:w-[2.8rem] lg:w-[2.8rem] xl:w-[2.8rem] 2xl:w-[2.8rem] 
                            h-[2.8rem] sm:h-[2.8rem] md:h-[2.8rem] lg:h-[2.8rem] xl:h-[2.8rem] 2xl:h-[2.8rem] 
                        '>
                            <div onClick={() => window.open('https://www.linkedin.com/company/nekko-ai/')}>
                                <ImageWrapper src={SVGIconLinkedin.src} alt="Linkedin" />
                            </div>
                        </div>
                    </div>
                    <div className='relative flex w-fit h-fit flex-col
                        mt-[4rem] xs:mt-0 sm:mt-0 md:mt-0 lg:mt-[3.9rem] xl:mt-[5.9rem] 2xl:mt-[5.9rem]
                        gap-y-[1.6rem] sm:gap-y-[1.4rem] md:gap-y-[2.4rem] lg:gap-y-[1rem] xl:gap-y-[2.4rem] 2xl:gap-y-[2.4rem] 
                    '>
                        <p className='font-black text-orange uppercase font-dharma-gothic-e w-fit h-fit 
                            leading-[6.5rem] xs:leading-[8.9rem] sm:leading-[8.9rem] md:leading-[8.9rem] lg:leading-[15.9rem] xl:leading-[15.9rem] 2xl:leading-[15.9rem] 
                            text-[8.8rem] xs:text-[10.6rem] sm:text-[10.6rem] md:text-[10.6rem] lg:text-[15.6rem] xl:text-[21.6rem] 2xl:text-[21.6rem] 
                        '>
                            join us
                        </p>
                        <p className='font-black uppercase font-dharma-gothic-e w-fit h-fit tracking-wide
                            leading-[2.6rem] sm:leading-[2.4rem] md:leading-[2.5rem] lg:leading-[2.8rem] xl:leading-[3.3rem] 2xl:leading-[3.3rem] 
                            text-[3.2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[4rem] 
                        '>
                            Ainekko, Co. is a global, <br className='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden' />remote-first company<br/> headquartered in San<br className='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden' />Francisco, CA, USA.
                        </p>
                        <p className='font-normal font-host-grotesk w-fit h-fit
                            leading-[1.8rem] sm:leading-[1.8rem] md:leading-[1.8rem] lg:leading-[1.8rem] xl:leading-[1.8rem] 2xl:leading-[1.8rem] 
                            text-[1.2rem] sm:text-[1.2rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.2rem] 2xl:text-[1.2rem] 
                        '>
                            © 2024 AI Foundry. All rights reserved.
                        </p>
                        <div className='footer-sticker absolute 
                            right-[calc(50%-2.1rem)] xs:right-[calc(50%-4.7rem)] sm:right-[calc(50%+2.1rem)] md:right-[calc(50%+5.8rem)] lg:right-[calc(50%-2.5rem)] xl:right-[calc(50%-5rem)] 2xl:right-[calc(50%-4.8rem)] 
                            top-[calc(50%-10rem)] sm:top-[calc(50%-7.5rem)] md:top-[calc(50%-9rem)] lg:top-[calc(50%-8.8rem)] xl:top-[calc(50%-12.2rem)] 2xl:top-[calc(50%-11.8rem)] 
                            w-[4.3rem] sm:w-[5rem] md:w-[5.5rem] lg:w-[7rem] xl:w-[10rem] 2xl:w-[10rem] 
                        '>
                            <ImageWrapper style={{height: '100%'}} src={IMGSticker.src} alt="AINekko sticker" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute
                left-[calc(50%+5rem)] xs:left-auto sm:left-auto md:left-auto lg:left-auto xl:left-auto 2xl:left-auto
                xs:right-0 sm:right-0 md:right-0 lg:right-0 xl:right-0 2xl:right-0 
                -bottom-[calc(50%-20.7rem)] xs:bottom-0 sm:bottom-0 md:bottom-0 lg:bottom-0 xl:bottom-0 2xl:bottom-0 
                w-[25.9rem] xs:w-[20rem] sm:w-[20.2rem] md:w-[27.2rem] lg:w-[40.2rem] xl:w-[50.2rem] 2xl:w-[50.2rem] 
            '>
                <ImageWrapper style={{height: '100%'}} src={IMGCat.src} alt="AINekko cat" />
            </div>
        </footer>
    )
}