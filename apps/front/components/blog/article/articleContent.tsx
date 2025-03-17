'use client'
 
import { useEffect, useState } from 'react';
import { StrapiParagraph } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import getStrapiMediaUrl from '@/utils/getStrapiMediaUrl';
import { StrapiBaseMedia } from '@/libs/litebox-lib/types/strapi/strapi';
import ImageWrapper from '@/components/common/ImageWrapper';

interface ContentProps {
    paragraphs: StrapiParagraph[];
    coverImage: StrapiBaseMedia;
}

export default function Content({paragraphs, coverImage}: ContentProps) {
    // Hack to enable the youtube video in an iframe and 
    // pass it to the dangerouslySetInnerHTML attribute of the div
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <div className='h-full mx-auto mb-[4rem]
            w-[32.7rem] sm:w-[50rem] md:w-[70rem] lg:w-[100rem] xl:w-[121.6rem] 2xl:w-[121.6rem] 
        '>
            <div className='mb-[3.2rem] relative w-full'>
                {coverImage ? 
                    <div className='relative border-2 border-black rounded-lg
                        w-[32.7rem] sm:w-[50rem] md:w-[70rem] lg:w-full xl:w-full 2xl:w-full
                        h-[21.4rem] sm:h-[29.8rem] md:h-[29.8rem] lg:h-[29.8rem] xl:h-[29.8rem] 2xl:h-[29.8rem]
                    '>
                        <ImageWrapper style={{height: '100%', objectFit: 'cover', objectPosition: 'top'}} src={getStrapiMediaUrl(coverImage.url)} alt="Cover image" />
                    </div> 
                    :
                    <div className='flex w-[80.3rem] h-[44.3rem] border-2 border-black bg-sand rounded-lg text-center justify-center items-center text-[2vw] uppercase'>No cover image</div>
                }
            </div>
            {paragraphs && paragraphs.length > 0 && paragraphs.map((paragraph: StrapiParagraph) => (
                <div key={paragraph.id} id={paragraph.tag} className={`flex flex-col ${paragraph.alternativeStyle ? 'font-black text-[4rem] font-dharma-gothic-e text-orange uppercase leading-[3.3rem]' : 'font-normal text-[1.6rem] font-host-grotesk text-dark'} gap-y-[2.4rem] mb-[2.4rem]`} dangerouslySetInnerHTML={{__html: paragraph.content.flatMap((el) => el.children.flatMap((el: {type:string, text: string}) => el.text)).join('')}}></div>
            ))}
        </div>
    );
};
