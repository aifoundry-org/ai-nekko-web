import ArticleTag from '@/components/blog/article/articleTag';
import { StrapiTag } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import Button from '@/libs/litebox-lib/ui/Button/Button';
import Link from 'next/link';
import getStrapiMediaUrl from '@/utils/getStrapiMediaUrl';
import ImageWrapper from '@/components/common/ImageWrapper';
import { ArticleBoxProps } from '@/components/blog/common/types';

export default function ArticleBox({article, isFeaturedArticle = false}: ArticleBoxProps) {
    const { id, title, date, authors, coverImage, slug, tags } = article;

    return (
        <div onClick={() => window.location.href = `/blog/${slug}`} key={id} className={`flex flex-col w-full h-full cursor-pointer border-2 border-black rounded-[0.4rem] ${isFeaturedArticle ? 'sm:col-start-1 sm:col-end-3' : ''}`}>
            <div className='flex flex-col flex-1 w-full h-full border-b-2 border-black '>
                {coverImage ? 
                    <div className='flex w-full h-[21.4rem]'>
                        <ImageWrapper className='object-cover object-top' src={getStrapiMediaUrl(coverImage.url)} alt="cover" /> 
                    </div> :
                    <div className='flex w-full h-[21.4rem] items-center justify-center uppercase
                        text-[4rem] sm:text-[5.7rem] md:text-[5.7rem] lg:text-[5.7rem] xl:text-[5.7rem] 2xl:text-[5.7rem] 
                    '>No cover image</div>
                }
            </div>
            <div className='flex flex-col flex-grow-0 w-full h-full bg-sand
                p-[2.4rem] sm:p-[3.2rem] md:p-[3.2rem] lg:p-[3.2rem] xl:p-[3.2rem] 2xl:p-[3.2rem] 
            '>
                {tags.length > 0 && 
                    <div className='max-w-[100%] flex flex-row justify-start items-center flex-wrap overflow-x-auto gap-[0.8rem]'>
                        {tags.map((el: StrapiTag) => ArticleTag({el})) }
                    </div>
                }
                <div className='flex flex-row text-start mb-[2vw] md:mb-[1.25vw] lg:mb-[1.25vw] xl:mb-[1.25vw] 2xl:mb-[1.25vw]'>
                    <p style={{wordBreak: 'break-word'}} className={`font-dharma-gothic-e font-black uppercase my-[1.6rem]
                        text-[3.2rem] md:text-[4vw] lg:text-[2.778vw] ${isFeaturedArticle ? 'xl:text-[3.34vw]' : 'xl:text-[2.8vw]' } 2xl:text-[3.34vw] 
                        leading-[2.5rem] md:leading-[4vw] lg:leading-[2.3vw] ${isFeaturedArticle ? 'xl:leading-[2.8vw]' : 'xl:leading-[2.4vw]'} 2xl:leading-[2.8vw]
                    `}>{title}</p>
                </div>
                <div className='flex flex-row font-normal text-[3vw] md:text-[2vw] lg:text-[1vw] xl:text-[1vw] 2xl:text-[1vw] sm:leading-[4vw] lg:leading-[1.5vw] xl:leading-[1.5vw] 2xl:leading-[1.5vw] font-host-grotesk mb-8'>
                    {authors && authors.length > 0 && `${authors[0].name} | `}{date && new Date(date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </div>
                <div className='flex flex-row items-end justify-start mt-auto mr-auto mb-0 ml-0'>
                    <Button as={Link} href={`/blog/${slug}`} variant='secondary' content='Read more' />
                </div>
            </div>  
        </div>
    )
}