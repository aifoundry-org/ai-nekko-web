 
import IMGComputer from '@/public/imgs/blog/computer.webp'
import IMGVerticalText from '@/public/imgs/blog/verticalText.webp'
import IMGArrows from '@/public/imgs/blog/arrows.webp'
import IMGError from '@/public/imgs/blog/error.webp'
import IMGPaper from '@/public/imgs/blog/paper.webp'
import IMGGraffiti from '@/public/imgs/blog/graffiti.webp'
import ImageWrapper from '../common/ImageWrapper';

export default function Main() {
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='w-full h-[22rem]' />
            <div className='flex flex-col h-fit mx-auto my-[8rem]
                w-[121.6rem] sm:w-[54rem] md:w-[72rem] lg:w-[95.6rem] xl:w-[121.6rem] 2xl:w-[130rem] 
            '>
                <div className='flex flex-row w-full text-center relative'>
                    <div className='relative justify-center flex flex-col basis-3/4 w-fit gap-y-[0.2rem] text-start uppercase font-dharma-gothic-e font-black
                        text-[7.2rem] sm:text-[5.8rem] md:text-[8.8rem] lg:text-[9.8rem] xl:text-[12.8rem] 2xl:text-[12.8rem] 
                        leading-[5.3rem] sm:leading-[4.4rem] md:leading-[6.4rem] lg:leading-[7.4rem] xl:leading-[9.4rem] 2xl:leading-[9.4rem] 
                    '>
                        <p className='text-orange'>latest news</p>
                        <p className='text-orange'>from the</p>
                        <p>ainekko world</p>
                        <div className='relative top-0 left-0'>
                            <div className='absolute 
                                w-[9.2rem] sm:w-[6.9rem] md:w-[10.9rem] lg:w-[13.9rem] xl:w-[16.9rem] 2xl:w-[16.9rem] 
                                top-[calc(50%-22.5rem)] sm:top-[calc(50%-10.8rem)] md:top-[calc(50%-15.5rem)] lg:top-[calc(50%-18rem)] xl:top-[calc(50%-22.5rem)] 2xl:top-[calc(50%-22.5rem)] 
                                right-[calc(50%-12.2rem)] sm:right-[calc(50%-5.1rem)] md:right-[calc(50%-11.5rem)] lg:right-[calc(50%-9.8rem)] xl:right-[calc(50%-12.2rem)] 2xl:right-[calc(50%-8.2rem)] 
                            '>
                                <ImageWrapper src={IMGArrows.src} alt="Arrows" />
                            </div>
                            <div className='absolute 
                                w-[19.6rem] sm:w-[8.6rem] md:w-[12.6rem] lg:w-[16.6rem] xl:w-[19.6rem] 2xl:w-[19.6rem] 
                                top-[calc(50%-15.5rem)] sm:top-[calc(50%-7.4rem)] md:top-[calc(50%-10.5rem)] lg:top-[calc(50%-12.5rem)] xl:top-[calc(50%-15.5rem)] 2xl:top-[calc(50%-15.5rem)] 
                                left-[calc(50%-40.5rem)] sm:left-[calc(50%-18.2rem)] md:left-[calc(50%-23.8rem)] lg:left-[calc(50%-31.5rem)] xl:left-[calc(50%-40.5rem)] 2xl:left-[calc(50%-44rem)] 
                            '>
                                <ImageWrapper src={IMGError.src} alt="Error" />
                            </div>
                            <div className='absolute 
                                w-[11.7rem] sm:w-[4.7rem] md:w-[6.7rem] lg:w-[8rem] xl:w-[11.7rem] 2xl:w-[11.7rem] 
                                top-[calc(50%-17rem)] sm:top-[calc(50%-8rem)] md:top-[calc(50%-11rem)] lg:top-[calc(50%-13.1rem)] xl:top-[calc(50%-17rem)] 2xl:top-[calc(50%-17rem)] 
                                left-[calc(50%-5.8rem)] sm:left-[calc(50%-2.2rem)] md:left-[calc(50%)] lg:left-[calc(50%-4.8rem)] xl:left-[calc(50%-5.8rem)] 2xl:left-[calc(50%-9.5rem)] 
                            '>
                                <ImageWrapper src={IMGGraffiti.src} alt="Graffiti" />
                            </div>
                            <div className='absolute 
                                w-[23.4rem] sm:w-[12.4rem] md:w-[16.4rem] lg:w-[18.4rem] xl:w-[23.4rem] 2xl:w-[23.4rem] 
                                bottom-[calc(50%-1rem)] sm:bottom-[calc(50%-0.5rem)] md:bottom-[calc(50%-0.5rem)] lg:bottom-[calc(50%-0.5rem)] xl:bottom-[calc(50%-1rem)] 2xl:bottom-[calc(50%-1rem)] 
                                right-[calc(50%-25rem)] sm:right-[calc(50%-11.7rem)] md:right-[calc(50%-21rem)] lg:right-[calc(50%-18.5rem)] xl:right-[calc(50%-25rem)] 2xl:right-[calc(50%-22rem)] 
                            '>
                                <ImageWrapper src={IMGPaper.src} alt="Paper" />
                            </div>
                        </div>
                    </div> 
                    <div className='relative flex basis-1/12 w-fit h-full'>
                        <div className='
                            w-[35.5rem] sm:w-[15.5rem] md:w-[21.5rem] lg:w-[28.5rem] xl:w-[35.5rem] 2xl:w-[35.5rem] 
                        '>
                            <ImageWrapper src={IMGComputer.src} alt="Computer" />
                        </div>
                    </div>
                    <div className='relative flex basis-1/12 w-fit h-full justify-end'>
                        <div className='absolute 
                            w-[1.6rem] sm:w-[0.6rem] md:w-[1rem] lg:w-[1.2rem] xl:w-[1.6rem] 2xl:w-[1.6rem] 
                            top-[calc(50%+11.8rem)] sm:top-[calc(50%+5.8rem)] md:top-[calc(50%+8.2rem)] lg:top-[calc(50%+10.5rem)] xl:top-[calc(50%+11.8rem)] 2xl:top-[calc(50%+12.8rem)] 
                        '>
                            <ImageWrapper src={IMGVerticalText.src} alt="Vertical text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}