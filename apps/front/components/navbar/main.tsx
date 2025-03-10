'use client';

import Link from 'next/link';
import { redirect } from 'next/navigation'

import IMGAiNekkoLogo from '@/public/imgs/navbar/logo.webp'
import IMGAiNekkoLogoMobile from '@/public/imgs/navbar/logoMobile.webp'
import SVGIconHamburger from '@/public/svgs/common/Hamburger.svg'
import SVGIconLinkedin from '@/public/svgs/common/IconLinkedin.svg'
import SVGIconCloseButton from '@/public/svgs/common/CloseButton.svg'
import Button from '@/libs/litebox-lib/ui/Button/Button';
import ImageWrapper from '@/components/common/ImageWrapper';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
    useGSAP(() => {
        ScrollTrigger.create({
            start: 'top+=1px top',
            end: 'top+=1px top',
            id: 'navbar-trigger',
            scroller: 'body',
            onEnter: () => {
                gsap.fromTo('.navbar', {
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    width: '90vw',
                    top: '9.4rem',
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

                gsap.fromTo('.navbar nav', {
                    borderWidth: '0px',
                    borderColor: 'transparent',
                    paddingTop: '0',
                    paddingBottom: '0',
                    paddingLeft: '0',
                    paddingRight: '0',
                },{
                    borderWidth: '2px',
                    borderColor: 'black',
                    paddingTop: '1.6rem',
                    paddingBottom: '1.6rem',
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
                    top: '9.4rem',
                    marginLeft: '5vw',
                    marginRight: '5vw',
                })

                gsap.fromTo('.navbar nav', {
                    borderWidth: '2px',
                    borderColor: 'black',
                    paddingTop: '1.6rem',
                    paddingBottom: '1.6rem',
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
            start: 'top+=1px top',
            end: 'top+=1px top',
            id: 'navbar-mobile-trigger',
            scroller: 'body',
            onEnter: () => {
                gsap.fromTo('.navbar-mobile', {
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    width: '32.7rem',
                    height: '4rem',
                    top: '9.4rem',
                    marginLeft: '2.4rem',
                    marginRight: '2.4rem',
                    paddingLeft: '0',
                    paddingRight: '0',
                    borderWidth: '0px',
                    borderColor: 'transparent',
                },{
                    position: 'fixed',
                    backgroundColor: '#F6EFE4', // sand
                    width: '37.5rem',
                    height: '8.6rem',
                    top: '0',
                    marginLeft: '0',
                    marginRight: '0',
                    paddingLeft: '2.4rem',
                    paddingRight: '2.4rem',
                    borderWidth: '2px',
                    borderColor: 'black',
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
                    width: '37.5rem',
                    height: '8.6rem',
                    top: '0',
                    marginLeft: '0',
                    marginRight: '0',
                    paddingLeft: '2.4rem',
                    paddingRight: '2.4rem',
                    borderWidth: '2px',
                    borderColor: 'black'
                },{
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    width: '32.7rem',
                    height: '4rem',
                    top: '9.4rem',
                    marginLeft: '2.4rem',
                    marginRight: '2.4rem',  
                    paddingLeft: '0',
                    paddingRight: '0',
                    borderWidth: '0px',
                    borderColor: 'transparent'
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
            <div className='navbar z-[1] absolute bg-transparent w-[90vw] top-[9.4rem] mx-[5vw] items-center bg-sand
                hidden xs:flex sm:flex md:flex lg:flex xl:flex 2xl:flex 
            '>
                <nav className='relative w-full flex flex-col'>
                    <div className='flex flex-row items-center'>
                        <div className='navbar-links
                            flex flex-row font-medium gap-x-[2.8vw]
                            basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3
                            text-[2rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[4rem]
                            md:w-full sm:w-full lg:w-full xl:w-full 2xl:w-full justify-start
                        '>
                            <Link href="https://aifoundry.org" target="_blank" className="uppercase relative after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300">
                                AI Foundry
                            </Link>
                            <Link href="/#team" className="navbar-team-link uppercase relative after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300">
                                Team
                            </Link>
                            <Link href="/blog" className="uppercase relative after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300">
                                Blog
                            </Link>
                        </div>
                        <div className="flex justify-center items-center relative
                            basis-0 md:basis-1/3 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3 
                        ">
                            <div className='hidden sm:block lg:block xl:block 2xl:block'>
                                <div className='logoMobile hidden w-[3.265vw]'>
                                    <ImageWrapper onClick={() => redirect('/')} style={{height: '100%'}} src={IMGAiNekkoLogoMobile.src} alt='AINekko logo mobile' />
                                </div>
                                <div className='logo w-[15.14vw]'>
                                    <ImageWrapper onClick={() => redirect('/')} style={{height: '100%'}} src={IMGAiNekkoLogo.src} alt='AINekko logo' />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end
                            basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3
                        ">
                            <Button target='_blank' as={Link} href='/' variant="primary" content="Contact us" />
                        </div>
                    </div>
                </nav>
            </div>
            <div className='navbar-mobile z-[1] absolute bg-transparent w-[32.7rem] top-[9.4rem] mx-[2.4rem] items-center bg-sand
                flex xs:hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden
            '>
                <nav className='flex flex-row justify-between items-center w-full'>
                    <div className='w-[15.4rem]'>
                        <div className='logo w-[15.4rem] justify-start'>
                            <ImageWrapper onClick={() => redirect('/')} src={IMGAiNekkoLogo.src} alt='AINekko logo' />
                        </div>
                        <div className='logoMobile hidden w-[4.5rem]'>
                            <ImageWrapper onClick={() => redirect('/')} src={IMGAiNekkoLogoMobile.src} alt='AINekko logo mobile' />
                        </div>
                    </div>
                    <div className='w-[2.4rem] justify-end'>
                        <ImageWrapper src={SVGIconHamburger.src} onClick={showMenu} alt="Side menu button" />
                    </div>
                </nav>
            </div>
            <div className='sideMenu fixed left-full w-full h-[100vh] top-0 bg-orange z-20'>
                <div className='flex flex-col p-[6vw]'>
                    <div className='flex flex-row w-full items-center justify-between'>
                        <div className='flex justify-start'>
                            <div className='w-[15.4rem]'>
                                <ImageWrapper src={IMGAiNekkoLogo.src} alt='AINekko logo mobile' />
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <div className='w-[2.4rem]'>
                                <ImageWrapper onClick={closeMenu} src={SVGIconCloseButton.src} alt='Close button' />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full my-[10.667vw] xs:my-[4vw] font-dharma-gothic-e font-black text-[10.667vw] xs:text-[6.5vw] leading-[8.8vw] gap-[8.8vw] xs:gap-0">
                        <Link className="uppercase" onClick={closeMenu} href="https://aifoundry.org" target="_blank">
                            ai foundry
                        </Link>
                        <Link className="uppercase navbar-team-link" onClick={closeMenu} href="/#team">
                            team
                        </Link>
                        <Link className="uppercase" onClick={closeMenu} href="/blog">
                            blog
                        </Link>
                    </div>
                    <div className="flex flex-col w-full mb-[10.667vw] xs:mb-[5vw] font-dharma-gothic-e font-bold text-[4.8vw] xs:text-[4vw] leading-[4.8vw] gap-[4.8vw] xs:gap-[2vw]">
                        <Link className="uppercase" onClick={() => {
                            window.scrollTo(0, 0);
                            closeMenu()}
                        } href="/privacy-policy">
                            privacy policy
                        </Link>
                        <Link className="uppercase" onClick={() => {
                            window.scrollTo(0, 0);
                            closeMenu()}
                        } href="/terms-of-service">
                            terms of service
                        </Link>
                        <Link className="uppercase" onClick={() => {
                            window.scrollTo(0, 0);
                            closeMenu()}
                        } href="/cookie-policy">
                            cookie policy
                        </Link>
                    </div>
                    <div className='flex w-full justify-start'>
                        <Button target='_blank' as={Link} href='/' variant='primary' content='Contact us' />
                    </div>
                    <div className='flex flex-row gap-[8.55vw] xs:gap-[2vw] mt-[8.27vw]'>
                        <div className='w-[2.4rem] h-[2.4rem]'>
                            <Link target="_blank" href='https://www.linkedin.com/company/nekko-ai/'>
                                <ImageWrapper className='dark:invert' src={SVGIconLinkedin.src} alt="Linkedin" />
                            </Link>
                        </div>
                    </div>
                    <div className='font-host-grotesk font-normal text-[3.2vw] leading-[4.8vw] mt-[4.8vw]'>
                        © 2024 AI Foundry. All rights reserved.
                    </div>
                </div>
            </div>
        </>
    )
}