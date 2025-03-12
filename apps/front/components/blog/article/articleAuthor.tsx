'use client'

import Link from 'next/link'
import { StrapiAuthor, StrapiContentNavigation } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import IMGInstagramIcon from '@/public/imgs/blog/instagramIcon.webp'
import IMGLinkedinIcon from '@/public/imgs/blog/linkedinIcon.webp'
import IMGYoutubeIcon from '@/public/imgs/blog/youtubeIcon.webp'
import getStrapiMediaUrl from '@/utils/getStrapiMediaUrl';
import ArticleNavigation from './articleNavigation';
import ImageWrapper from '@/components/common/ImageWrapper';

interface AuthorProps {
    author: StrapiAuthor;
    contentNavigation: StrapiContentNavigation[];
}

export default function Author({author, contentNavigation}: AuthorProps) {
    if(author){
        const { name, role, description, instagram_link, youtube_link, linkedin_link, profileImage } = author
        return (
            <div className='border-black 
                border-t-2 lg:border-t-0 xl:border-t-0 2xl:border-t-0
                py-[2.4rem] lg:py-0 xl:py-0 2xl:py-0 
                w-full sm:w-full md:w-full lg:w-[38rem] xl:w-[42.45rem] 2xl:w-[42.45rem] 
            '>
                <div className='flex flex-wrap flex-row font-host-grotesk items-center gap-[2rem] text-[#222222]'>
                    {profileImage && <div className='flex'>
                        <div className='w-[6.4rem] h-[6.4rem] overflow-hidden'>
                            <ImageWrapper src={getStrapiMediaUrl(profileImage.url)} alt="Profile image" />
                        </div>
                    </div>}
                    <div className='flex flex-col'>
                        <p className='font-bold text-[2rem] leading-[2.4rem] text-[#222222]'>{name}</p>
                        <p className='font-normal text-[1.6rem] leading-[2.1rem['>{role}</p>
                    </div>
                </div>
                <p className='flex font-host-grotesk font-normal text-[1.4rem] leading-[2.1rem] mt-10 text-[#222222]'>{description}</p>
                <div className='flex flex-row gap-[2.4rem] mt-8 pb-[4rem] border-black 
                    border-b-0 lg:border-b-2 xl:border-b-2 2xl:border-b-2
                '>
                    {instagram_link && 
                        <Link target='_blank' href={instagram_link}>
                            <div className='w-[2.4rem] h-[2.4rem] blogSocialIcon'>
                                <ImageWrapper src={IMGInstagramIcon.src} alt="Instagram icon" />
                            </div>
                        </Link>
                    }
                    {linkedin_link && 
                        <Link target='_blank' href={linkedin_link}>
                            <div className='w-[2.4rem] h-[2.4rem] blogSocialIcon'>
                                <ImageWrapper src={IMGLinkedinIcon.src} alt="Linkedin icon" />
                            </div>
                        </Link>
                    }
                    {youtube_link && 
                        <Link target='_blank' href={youtube_link}>
                            <div className='w-[2.4rem] h-[2.4rem] blogSocialIcon'>
                                <ImageWrapper src={IMGYoutubeIcon.src} alt="Youtube icon" />
                            </div>
                        </Link>
                    }
                </div>
                {contentNavigation && contentNavigation.length > 0 && 
                    <div className='hidden lg:block xl:block 2xl:block'>
                        <ArticleNavigation contentNavigation={contentNavigation} />
                    </div>}
            </div>
        );
    }
    return (
        contentNavigation && contentNavigation.length > 0 && 
            <div className='lg:my-0 min-w-[28.6rem]'>
                <div className='flex flex-col font-normal text-[#222222] font-host-grotesk gap-y-[1.6rem]'>
                    <p className='font-bold text-[2rem]'>Content</p>
                    {contentNavigation.map(el => (
                        <Link href={`#${el.tag}`} className='cursor-pointer text-[1.6rem]' key={el.tag}>{el.content}</Link>
                    ))}
                </div>
            </div>
    );
};
