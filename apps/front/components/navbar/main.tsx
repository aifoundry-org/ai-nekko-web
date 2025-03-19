'use client';

// import Link from 'next/link';
import { usePathname } from 'next/navigation'
import IMGAiNekkoLogo from '@/public/imgs/navbar/logo.webp'
import IMGAiNekkoLogoMobile from '@/public/imgs/navbar/logoMobile.webp'
import SVGIconHamburger from '@/public/svgs/common/Hamburger.svg'
import SVGIconLinkedin from '@/public/svgs/common/IconLinkedin.svg'
import SVGIconCloseButton from '@/public/svgs/common/CloseButton.svg'
// import Button from '@/libs/litebox-lib/ui/Button/Button';
import ImageWrapper from '@/components/common/ImageWrapper';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function NavBar() {
    const pathname = usePathname();
    const hiddenAnnouncement = pathname !== "/"

    useGSAP(() => {
        ScrollTrigger.create({
            start: () => 'top+=1px top',
            end: () => 'top+=1px top',
            id: 'navbar-trigger',
            scroller: 'body',
            onEnter: () => {
                gsap.fromTo('.navbar', {
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    width: '90vw',
                    top: hiddenAnnouncement ? '2.4rem': '9.4rem',
                    marginLeft: '5vw',
                    marginRight: '5vw',
                },{
                    position: 'fixed',
                    backgroundColor: '#F6EFE4', // sand
                    width: '66.815vw',
                    top: '4rem',
                    marginLeft: '16.6vw',
                    marginRight: '16.6vw',
                })

                gsap.fromTo('.navbar', {
                    borderWidth: '0px',
                    borderColor: 'transparent',
                    paddingTop: '0',
                    paddingBottom: '0',
                    paddingLeft: '0',
                    paddingRight: '0',
                },{
                    borderWidth: '2px',
                    borderColor: 'black',
                    paddingTop: '1.05rem',
                    paddingBottom: '1.05rem',
                    paddingLeft: '2.8vw',
                    paddingRight: '2.8vw',
                })

                gsap.fromTo('.navbar .navbar-links', {
                    columnGap: '2.8vw',
                },{
                    columnGap: '1.667vw'
                })

                const tl = gsap.timeline({paused: true})
                .fromTo('.logo', {
                    opacity: 1
                },{
                    opacity: 0,
                    duration: 0.2
                })
                .set('.logo', {
                    display: 'none'
                })
                .set('.logoMobile', {
                    opacity: 0
                })
                .fromTo('.logoMobile', {
                    display: 'none'
                },{
                    display: 'block',
                    duration: 0.2
                })
                .fromTo('.logoMobile', {
                    opacity: 0
                },{
                    opacity: 1,
                    duration: 0.2
                })

                tl.play()
            },
            onEnterBack: () => {
                gsap.fromTo('.navbar', {
                    position: 'fixed',
                    backgroundColor: '#F6EFE4', // sand
                    width: '66.815vw',
                    top: '4rem',
                    marginLeft: '16.6vw',
                    marginRight: '16.6vw',
                },{
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    width: '90vw',
                    top: hiddenAnnouncement ? '2.4rem': '9.4rem',
                    marginLeft: '5vw',
                    marginRight: '5vw',
                })

                gsap.fromTo('.navbar', {
                    borderWidth: '2px',
                    borderColor: 'black',
                    paddingTop: '1.05rem',
                    paddingBottom: '1.05rem',
                    paddingLeft: '2.8vw',
                    paddingRight: '2.8vw',
                },{
                    borderWidth: '0px',
                    borderColor: 'transparent',
                    paddingTop: '0',
                    paddingBottom: '0',
                    paddingLeft: '0',
                    paddingRight: '0',
                })

                gsap.fromTo('.navbar .navbar-links', {
                    columnGap: '1.667vw',
                },{
                    columnGap: '2.8vw'
                })

                const tl = gsap.timeline({paused: true})
                .fromTo('.logoMobile', {
                    opacity: 1
                },{
                    opacity: 0,
                    duration: 0.2
                })
                .set('.logoMobile', {
                    display: 'none'
                })
                .set('.logo', {
                    display: 'block'
                })
                .fromTo('.logo', {
                    opacity: 0
                },{
                    opacity: 1,
                    duration: 0.2
                })
                tl.play()
            }
        })

        ScrollTrigger.create({
            start: () => 'top+=1px top',
            end: () => 'top+=1px top',
            id: 'navbar-mobile-trigger',
            scroller: 'body',
            onEnter: () => {
                gsap.fromTo('.navbar-mobile', {
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    borderWidth: '0px',
                    borderColor: 'transparent',
                    top: hiddenAnnouncement ? '0': '5.4rem',
                },{
                    position: 'fixed',
                    backgroundColor: '#F6EFE4', // sand
                    borderWidth: '2px',
                    borderColor: 'black',
                    top: 0,
                })

                const tl = gsap.timeline({paused: true})
                .fromTo('.navbar-mobile .logo', {
                    opacity: 1
                },{
                    opacity: 0,
                    duration: 0.2
                })
                .set('.navbar-mobile .logo', {
                    display: 'none'
                })
                .set('.navbar-mobile .logoMobile', {
                    opacity: 0
                })
                .fromTo('.navbar-mobile .logoMobile', {
                    display: 'none'
                },{
                    display: 'block',
                    duration: 0.2
                })
                .fromTo('.navbar-mobile .logoMobile', {
                    opacity: 0
                },{
                    opacity: 1,
                    duration: 0.2
                })

                tl.play()
            },
            onEnterBack: () => {
                gsap.fromTo('.navbar-mobile', {
                    position: 'fixed',
                    backgroundColor: '#F6EFE4', // sand
                    borderWidth: '2px',
                    borderColor: 'black',
                    top: 0,
                },{
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    borderWidth: '0px',
                    borderColor: 'transparent',
                    top: hiddenAnnouncement ? '0': '5.4rem',
                })

                const tl = gsap.timeline({paused: true})
                .fromTo('.navbar-mobile .logoMobile', {
                    opacity: 1
                },{
                    opacity: 0,
                    duration: 0.2
                })
                .set('.navbar-mobile .logoMobile', {
                    display: 'none'
                })
                .set('.navbar-mobile .logo', {
                    display: 'block'
                })
                .fromTo('.navbar-mobile .logo', {
                    opacity: 0
                },{
                    opacity: 1,
                    duration: 0.2
                })
                tl.play()
            }
        })
    })

    const { contextSafe } = useGSAP();
    const showMenu = contextSafe(() => {
        gsap.fromTo('.sideMenu', {
            left: '100%'
        },{
            left: '0',
            duration: 0.6,
            ease: 'power1.in'
        })
    })

    const closeMenu = contextSafe(() => {
        gsap.fromTo('.sideMenu', {
            left: '0'
        },{
            left: '100%',
            duration: 0.6,
            ease: 'power1.out'
        })
    })

    return (
        <>
            <nav className={`navbar z-10 absolute bg-transparent w-[90vw] ${hiddenAnnouncement ? 'top-[2.4rem]': 'top-[9.4rem]'} mx-[5vw] items-center bg-sand
                hidden xs:flex sm:flex md:flex lg:flex xl:flex 2xl:flex 
            `}>
                <div className='relative w-full flex flex-col'>
                    <div className='flex flex-row items-center'>
                        <div className='navbar-links
                            flex flex-row font-medium gap-x-[2.8vw]
                            basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3
                            text-[2rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[4rem]
                            md:w-full sm:w-full lg:w-full xl:w-full 2xl:w-full justify-start
                        '>
                            <div onClick={() => window.open("https://ai-foundry.litebox.dev")} className="uppercase cursor-pointer relative after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300">
                                AI Foundry
                            </div>
                            {pathname == '/' && 
                                <div onClick={() => window.location.href="/#team"} className="navbar-team-link pointer-events-none cursor-pointer uppercase relative after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300">
                                    Team
                                </div>
                            }
                            <div onClick={() => window.location.href="/blog"} className="uppercase cursor-pointer relative after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300">
                                Blog
                            </div>
                        </div>
                        <div className="flex justify-center items-center relative
                            basis-0 md:basis-1/3 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3 
                        ">
                            <div className='hidden sm:block lg:block xl:block 2xl:block'>
                                <div className='logoMobile hidden w-[3.265vw] cursor-pointer'>
                                    <ImageWrapper onClick={() => window.location.href= '/'} style={{height: '100%'}} src={IMGAiNekkoLogoMobile.src} alt='AINekko logo mobile' />
                                </div>
                                <div className='logo w-[15.14vw] cursor-pointer'>
                                    <ImageWrapper onClick={() => window.location.href= '/'} style={{height: '100%'}} src={IMGAiNekkoLogo.src} alt='AINekko logo' />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end
                            basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3
                        ">
                            {/* <Button target='_blank' as={Link} href='/' variant="primary" content="Contact us" /> */}
                        </div>
                    </div>
                </div>
            </nav>
            <nav className={`navbar-mobile z-10 absolute left-0 h-[8.6rem] bg-transparent w-full ${hiddenAnnouncement ? 'top-0': 'top-[5.4rem]'} items-center bg-sand
                flex xs:hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden
            `}>
                <div className='flex flex-row justify-between items-center w-full p-[2.4rem]'>
                    <div className='w-[15.4rem]'>
                        <div className='logo w-[15.4rem] justify-start cursor-pointer'>
                            <ImageWrapper onClick={() => window.location.href= '/'} src={IMGAiNekkoLogo.src} alt='AINekko logo' />
                        </div>
                        <div className='logoMobile hidden w-[4.5rem] cursor-pointer'>
                            <ImageWrapper onClick={() => window.location.href= '/'} src={IMGAiNekkoLogoMobile.src} alt='AINekko logo mobile' />
                        </div>
                    </div>
                    <div className='w-[2.4rem] justify-end cursor-pointer'>
                        <ImageWrapper src={SVGIconHamburger.src} onClick={showMenu} alt="Side menu button" />
                    </div>
                </div>
            </nav>
            <aside className='sideMenu fixed left-full w-full h-[100vh] top-0 bg-orange z-20'>
                <div className='flex flex-col p-[6vw]'>
                    <div className='flex flex-row w-full items-center justify-between'>
                        <div className='flex justify-start'>
                            <div className='w-[15.4rem] cursor-pointer'>
                                <ImageWrapper src={IMGAiNekkoLogo.src} alt='AINekko logo mobile' />
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <div className='w-[2.4rem] cursor-pointer'>
                                <ImageWrapper onClick={closeMenu} src={SVGIconCloseButton.src} alt='Close button' />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full my-[10.667vw] xs:my-[4vw] font-dharma-gothic-e font-black text-[10.667vw] xs:text-[6.5vw] leading-[8.8vw] gap-[8.8vw] xs:gap-0">
                        <div onClick={() => {closeMenu(); window.open("https://ai-foundry.litebox.dev")}} className="uppercase cursor-pointer">
                            ai foundry
                        </div>
                        {pathname == '/' &&
                            <div onClick={() => {closeMenu(); window.location.href="/#team"}} className="uppercase navbar-team-link pointer-events-none cursor-pointer">
                                team
                            </div>
                        }
                        <div onClick={() => {closeMenu(); window.location.href="/blog"}} className="uppercase cursor-pointer">
                            blog
                        </div>
                    </div>
                    <div className="flex flex-col w-full mb-[10.667vw] xs:mb-[5vw] font-dharma-gothic-e font-bold text-[4.8vw] xs:text-[4vw] leading-[4.8vw] gap-[4.8vw] xs:gap-[2vw]">
                        <div onClick={() => {closeMenu(); window.location.href="/privacy-policy"}} className="uppercase cursor-pointer">
                            privacy policy
                        </div>
                        <div onClick={() => {closeMenu(); window.location.href="/terms-of-service"}} className="uppercase cursor-pointer">
                            terms of service
                        </div>
                        <div onClick={() => {closeMenu(); window.location.href="/cookie-policy"}} className="uppercase cursor-pointer">
                            cookie policy
                        </div>
                    </div>
                    <div className='flex w-full justify-start'>
                        {/* <Button target='_blank' as={Link} href='/' variant='primary' content='Contact us' /> */}
                    </div>
                    <div className='flex flex-row gap-[8.55vw] xs:gap-[2vw] mt-[8.27vw]'>
                        <div className='w-[2.4rem] h-[2.4rem]'>
                            <div className='cursor-pointer' onClick={() => window.open('https://www.linkedin.com/company/nekko-ai/')}>
                                <ImageWrapper className='dark:invert' src={SVGIconLinkedin.src} alt="Linkedin" />
                            </div>
                        </div>
                    </div>
                    <div className='font-host-grotesk font-normal text-[3.2vw] leading-[4.8vw] mt-[4.8vw]'>
                        © 2024 AI Foundry. All rights reserved.
                    </div>
                </div>
            </aside>
        </>
    )
}