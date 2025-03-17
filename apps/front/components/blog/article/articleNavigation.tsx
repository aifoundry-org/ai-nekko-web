import { Dispatch, SetStateAction } from 'react';
import { StrapiContentNavigation } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import scrollToElement from '@/hooks/useScrollToElement'

export default function ArticleNavigation({contentNavigation, currentHeaderId, onCurrentHeaderIdChange}: {contentNavigation: StrapiContentNavigation[], currentHeaderId: string | null, onCurrentHeaderIdChange: Dispatch<SetStateAction<string | null>>}) {
    return (
        <div className='flex flex-col font-normal font-host-grotesk gap-y-[1.6rem] pt-[4rem]'>
            <p className='font-bold text-[2rem] text-[#222222]'>Content</p>
            {contentNavigation.map(el => (
                <a onClick={() => {
                    scrollToElement(el.tag, 140)
                    onCurrentHeaderIdChange(el.tag)
                }} className={`cursor-pointer text-[1.6rem] text-black hover:font-bold ${currentHeaderId === el.tag ? 'font-bold' : 'font-normal'} `} key={el.tag}>{el.content}</a>
            ))}
        </div>
    )
}