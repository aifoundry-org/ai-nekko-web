'use client'

import Link from 'next/link';
import { getReadTime } from '@/utils/getReadTime';
import SVGIconArrowLeft from '@/public/svgs/blog/arrowLeft.svg';
import IMGCat from '@/public/imgs/blog/cat.webp'
import IMGCatMobile from '@/public/imgs/blog/catMobile.webp'
import SocialShareLink from './socialShareLink';
import { StrapiArticle, StrapiParagraph, StrapiTag } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import ImageWrapper from '@/components/common/ImageWrapper';

interface HeadlineProps {
    article: StrapiArticle;
}

const Headline = ({ article }: HeadlineProps) => {
    const { title, date, authors, tags, paragraphs } = article;
    const paragraphsContent = paragraphs.flatMap((el: StrapiParagraph) => el.content.flatMap((el) => el.children.flatMap((el: {type:string, text: string}) => el.text))).join(' ');
    const cleanParagraphsContent = paragraphsContent.replace(/<[^>]*>/g, ' ');

    return (
        <div className='relative'>
            <Link className='flex items-center gap-4 mb-10' href='/blog' rel='noreferrer'>
                <div className='w-[2.4rem]'>
                    <ImageWrapper src={SVGIconArrowLeft.src} alt="Arrow left" />
                </div>
                <p className='font-dharma-gothic-e font-bold text-[2rem] leading-[2rem] uppercase'>Go Back to Blog</p>
            </Link>
            <div className='flex flex-wrap gap-2 pb-[2.4rem]'>
                {tags.map((tag: StrapiTag) => (
                    <div key={tag.id} className='bg-orange rounded-md px-[1.4rem] py-[1rem]'>
                        <p className='font-dharma-gothic-e font-bold text-[2rem] leading-[2rem] uppercase'>
                            {tag.name}
                        </p>
                    </div>
                ))}
            </div>
            <h1 className='font-dharma-gothic-e font-black uppercase
                w-full sm:w-4/6 md:w-3/4 lg:w-4/6 xl:w-4/6 2xl:w-4/6
                text-[4.8rem] sm:text-[4.4rem] md:text-[4.4rem] lg:text-[4.4rem] xl:text-[6.4rem] 2xl:text-[6.4rem] 
                leading-[4.1rem] sm:leading-[3.3rem] md:leading-[3.3rem] lg:leading-[3.3rem] xl:leading-[5.3rem] 2xl:leading-[5.3rem] 
            '>{title}</h1>
            <div className='relative font-host-grotesk border-b-2 border-black flex flex-wrap justify-between gap-y-[2rem] pt-[3.2rem] pb-[2.4rem] font-paralucent gap-2'>
                <div className='absolute 
                    hidden sm:block md:block lg:block xl:block 2xl:block
                    sm:w-[9rem] md:w-[12.9rem] lg:w-[18rem] xl:w-[22.9rem] 2xl:w-[22.9rem] 
                    sm:right-[calc(50%-23rem)] md:right-[calc(50%-33rem)] lg:right-[calc(50%-45rem)] xl:right-[calc(50%-56rem)] 2xl:right-[calc(50%-56rem)]
                    sm:top-[calc(50%-5.5rem)] md:top-[calc(50%-9.8rem)] lg:top-[calc(50%-15.2rem)] xl:top-[calc(50%-20.7rem)] 2xl:top-[calc(50%-20.7rem)]
                '>
                    <ImageWrapper src={IMGCat.src} alt="Cat" />
                </div>
                <div className='absolute
                    block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden
                    w-[14.5rem]
                    right-[calc(50%-16.8rem)]
                    top-[calc(50%+1.5rem)]
                '>
                    <ImageWrapper src={IMGCatMobile.src} alt="Cat" />
                </div>
                <div className='flex flex-wrap gap-4 text-black items-center font-normal 
                    text-[1.6rem] sm:text-[1.2rem] md:text-[1.6rem] lg:text-[1.6rem] xl:text-[1.6rem] 2xl:text-[1.6rem] 
                    leading-[2.4rem] sm:leading-[2.4rem] md:leading-[2.4rem] lg:leading-[2.4rem] xl:leading-[2.4rem] 2xl:leading-[2.4rem] 
                '>
                    {authors && authors[0] && 
                        <>
                            <span className='flex text-wrap'>{authors[0].name}</span>
                            <div className='bg-black w-[1px] h-6' />
                        </>
                    }
                    {date && 
                        <time className='flex flex-nowrap text-nowrap' dateTime={date}>
                            {new Date(date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    }
                    <div className='bg-black w-[1px] h-6' />
                    <span className='flex flex-nowrap text-nowrap items-center'>{getReadTime(cleanParagraphsContent)}</span>
                </div>
            </div>
            <div className='flex w-full justify-start mt-[2.4rem]
                gap-[1.6rem] sm:gap-[2.4rem] md:gap-[2.4rem] lg:gap-[2.4rem] xl:gap-[2.4rem] 2xl:gap-[2.4rem] 
                items-start sm:items-center md:items-center lg:items-center xl:items-center 2xl:items-center 
                flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 
            '>
                <p className='flex font-host-grotesk text-[1.6rem] text-black'>Share:</p>
                <div className='flex items-center gap-[2.4rem]'>
                    <SocialShareLink className='w-[2.4rem] blogSocialIcon' platform='instagram' title={title} articleContent={title} />
                    <SocialShareLink className='w-[2.4rem] blogSocialIcon' platform='linkedin' title={title} articleContent={title} />
                    <SocialShareLink className='w-[2.4rem] blogSocialIcon' platform='x' title={title} articleContent={title} />
                </div>
            </div>
        </div>
    );
};

export default Headline;
