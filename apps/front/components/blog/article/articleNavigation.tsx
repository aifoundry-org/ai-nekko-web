import { StrapiContentNavigation } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import Link from 'next/link';

export default function ArticleNavigation({contentNavigation}: {contentNavigation: StrapiContentNavigation[]}) {
    return (
        <div className='flex flex-col font-normal text-[#222222] font-host-grotesk gap-y-[1.6rem] pt-[4rem]'>
            <p className='font-bold text-[2rem]'>Content</p>
            {contentNavigation.map(el => (
                <Link href={`#${el.tag}`} className='cursor-pointer text-[1.6rem]' key={el.tag}>{el.content}</Link>
            ))}
        </div>
    )
}