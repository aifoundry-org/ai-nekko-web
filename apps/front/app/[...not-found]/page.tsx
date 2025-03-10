import Link from 'next/link'

import Button from '@/libs/litebox-lib/ui/Button/Button'
import ImageWrapper from '@/components/common/ImageWrapper'

import IMGError from '@/public/imgs/notFound/error.webp'
import IMGGraffiti from '@/public/imgs/notFound/graffiti.webp'
import IMGNumbers from '@/public/imgs/notFound/numbers.webp'
import IMGPaper from '@/public/imgs/notFound/paper.webp'
import IMGPluses from '@/public/imgs/notFound/pluses.webp'
import IMGVertical404 from '@/public/imgs/notFound/vertical_404.webp'
import IMGVerticalNotFound from '@/public/imgs/notFound/vertical_notFound.webp'

import IMGErrorMobile from '@/public/imgs/notFound/errorMobile.webp'
import IMGGraffitiMobile from '@/public/imgs/notFound/graffitiMobile.webp'
import IMGNumbersMobile from '@/public/imgs/notFound/numbersMobile.webp'
import IMGPaperMobile from '@/public/imgs/notFound/paperMobile.webp'
import IMGPlusesMobile from '@/public/imgs/notFound/plusesMobile.webp'

export default function Content() { 
    return (
        <>
			<div className='hidden xs:flex xs:relative xs:w-full xs:h-full xs:flex-col'>
				<div className='flex relative flex-col justify-center text-center align-middle mx-auto mt-[13.9rem] gap-y-[1.6rem]'>
					<p className='font-dharma-gothic-e font-black text-[16.115vw] leading-[11.9vw]'>404</p>
					<p className='text-orange font-dharma-gothic-e font-black text-[12.5vw] leading-[9.24vw] uppercase'>page not found</p>
					<div className='absolute w-[19.375vw] -right-[4.935vw] bottom-[1.67vw]'>
						<ImageWrapper src={IMGError.src} alt="Error" />
					</div>
					<div className='absolute w-[13.89vw] right-[10.45vw] top-[5.975vw]'>
						<ImageWrapper  src={IMGGraffiti.src} alt="Graffiti" />
					</div>
					<div className='absolute w-[7.85vw] top-[8.405vw] left-[17.92vw]'>
						<ImageWrapper  src={IMGNumbers.src} alt="Numbers" />
					</div>
					<div className='absolute w-[17.64vw] -left-[1.74vw] bottom-[1.4vw] -z-[1]'>
						<ImageWrapper  src={IMGPaper.src} alt="Paper" />
					</div>
					<div className='absolute w-[18.265vw] -left-[4.31vw] bottom-[4.38vw]'>
						<ImageWrapper  src={IMGPluses.src} alt="Pluses" />
					</div>
					<div className='absolute w-[0.91vw] -right-[12vw] -top-[1vw]'>
						<ImageWrapper  src={IMGVerticalNotFound.src} alt="Vertical not found" />
					</div>
					<div className='absolute w-[1.115vw] -left-[12.5vw] -bottom-[8vw]'>
						<ImageWrapper  src={IMGVertical404.src} alt="Vertical 404" />
					</div>
				</div>
				<div className='flex relative flex-col justify-center text-center align-middle mt-[4rem] mx-auto'>
					<p className='font-host-grotesk w-fit font-normal text-[3vw] md:text-[3vw] lg:text-[1.67vw] xl:text-[1.67vw] 2xl:text-[1.67vw]'>We&#39;re sorry, something went wrong</p>
					<Button className='mx-auto mt-32' as={Link} href='/' variant='primary' content='Back to home' svg='scroll-right'/>
				</div>
			</div>
			<div className='xs:hidden flex relative w-full h-full flex-col'>
				<div className='flex relative flex-col justify-center text-center align-middle mx-auto mt-[6.9rem] gap-y-[0.3rem]'>
					<p className='font-dharma-gothic-e font-black text-[27.75vw] leading-[20.27vw]'>404</p>
					<p className='text-orange font-dharma-gothic-e font-black text-[23.47vw] leading-[17.35vw] uppercase'>page not found</p>
					<div className='absolute w-[40.8vw] left-[49vw] top-[44vw]'>
						<ImageWrapper  src={IMGErrorMobile.src} alt="Error mobile" />
					</div>
					<div className='absolute w-[33.4vw] right-[8.5vw] top-[5.5vw]'>
						<ImageWrapper src={IMGGraffitiMobile.src} alt="Graffiti mobile" />
					</div>
					<div className='absolute w-[18.15vw] top-[13vw] left-[29vw]'>
						<ImageWrapper src={IMGNumbersMobile.src} alt="Numbers mobile" />
					</div>
					<div className='absolute w-[36.6vw] left-[14vw] -z-[1]'>
						<ImageWrapper src={IMGPaperMobile.src} alt="Paper mobile" />
					</div>
					<div className='absolute w-[36.8vw] left-[11vw] top-[34vw]'>
						<ImageWrapper src={IMGPlusesMobile.src} alt="Pluses mobile" />
					</div>
				</div>
				<div className='flex relative flex-col justify-center text-center align-middle mt-[2.4rem] mx-auto'>
					<p className='font-host-grotesk w-fit font-normal text-[4.8vw]'>We&#39;re sorry,<br/>something went wrong</p>
					<Button className='mx-auto mt-[6rem]' as={Link} href='/' variant='primary' content='Back to home' svg='scroll-right'/>
				</div>
			</div>
		</>
    )
}