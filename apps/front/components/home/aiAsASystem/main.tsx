import IMGLogo from '@/public/imgs/aiAsASystem/logo.webp'
import ImageWrapper from '@/components/common/ImageWrapper'

export default function Main() {
    return (
        <div className='relative w-full h-auto flex justify-center'>
            <div className='flex
                mx-[2.4rem] sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto
                mt-[8rem] sm:mt-0 md:mt-[10rem] lg:mt-[10rem] xl:mt-[10rem] 2xl:mt-[10rem]
                mb-[17rem] sm:mb-[10rem] md:mb-[18rem] lg:mb-[18rem] xl:mb-[18rem] 2xl:mb-[18rem]
                w-[32.7rem] sm:w-[32.7rem] md:w-[51rem] lg:w-[51rem] xl:w-[51rem] 2xl:w-[51rem]
            '>
                <ImageWrapper src={IMGLogo.src} alt='Logo' />
            </div>
        </div>
    )
}