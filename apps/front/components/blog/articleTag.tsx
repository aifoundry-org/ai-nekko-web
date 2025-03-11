import { StrapiTag } from '@/libs/litebox-lib/types/strapi/strapiBlog';

interface ArticleTagProps {
    el: StrapiTag;
    onClick?: () => void;
    className?: string;
}

export default function ArticleTag({el, onClick, className}: ArticleTagProps) {
    return (
        <div onClick={onClick} key={el.id} className={`bg-orange text-nowrap rounded-md 
            px-[3.1vw] md:px-[1.2vw] lg:px-[1vw] xl:px-[0.96vw] 2xl:px-[1vw]
            py-[0.35vw] md:py-[1.2vw] lg:py-[0.7vw] xl:py-[0.5vw] 2xl:py-[0.7vw] 
        ${className}`}>
            <p className='font-dharma-gothic-e tracking-[0.045rem] font-bold uppercase
                text-[1.8rem] md:text-[2.8vw] lg:text-[1.4vw] xl:text-[1.4vw] 2xl:text-[1.4vw]
                md:leading-[1.4vw] lg:leading-[1.4vw] xl:leading-[1.4vw] 2xl:leading-[1.4vw]
            '>
                {el.name}
            </p>
        </div>
    )
}