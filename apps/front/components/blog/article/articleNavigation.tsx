'use client'

import { Dispatch, SetStateAction } from 'react';
import { StrapiContentNavigation } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import scrollToElement from '@/hooks/useScrollToElement'

export default function ArticleNavigation({contentNavigation, currentHeaderId, onCurrentHeaderIdChange}: {contentNavigation: StrapiContentNavigation[], currentHeaderId: string | null, onCurrentHeaderIdChange: Dispatch<SetStateAction<string | null>>}) {
    return (
        <div className='flex flex-col font-normal font-host-grotesk gap-y-[1.6rem] pt-[4rem]'>
            <h3 className='font-bold text-[2rem] text-[#222222] normal-case'>Content</h3>
            {contentNavigation.map(el => (
                <a onClick={() => {
                    if (window.innerWidth <= 639) {
                        scrollToElement(el.tag, 100)
                    } else if (window.innerWidth >= 640 && window.innerWidth <= 767) {
                        scrollToElement(el.tag, 110)
                    } else if (window.innerWidth >= 768 && window.innerWidth <= 1219) {
                        scrollToElement(el.tag, 130)
                    } else {
                        scrollToElement(el.tag, 140)
                    }
                    onCurrentHeaderIdChange(el.tag)
                }} className={`cursor-pointer text-[1.6rem] text-black hover:font-bold ${currentHeaderId === el.tag ? 'font-bold' : 'font-normal'} `} key={el.tag}>{el.content}</a>
            ))}
        </div>
    )
}