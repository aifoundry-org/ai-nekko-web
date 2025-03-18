'use client'

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import useDebounce from '@/hooks/useDebounce';
import { useQueryString } from '@/hooks/useQueryString';

import { ArticlesMainContainerProps, CheckOption } from '@/components/blog/common/types';
import { FiltersOption } from '@/components/blog/common/types';

import ImageWrapper from '@/components/common/ImageWrapper';
import IMGComputer from '@/public/imgs/blog/computer.webp'

import ArticlesContainer from '@/components/blog/articlesContainer/articlesContainer';
import Filters from '@/components/blog/common/filters';
import SearchInput from '@/components/blog/common/searchInput';

const getInitTags = (tags: FiltersOption[], selectedTags: string[]) => {
    const formattedTags = tags.map(tag => ({
        ...tag,
        isChecked: selectedTags.includes(tag.id.toString()),
    }));
  
    return formattedTags;
};

export default function ArticlesGrid({articles, search, tags, selectedTags, featuredArticleId}: ArticlesMainContainerProps) {
    const { replace } = useRouter();
    const { createQueryString } = useQueryString();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const [searchTerm, setSearchTerm] = useState<string>(search);
    const [filtersOptions, setFiltersOptions] = useState<FiltersOption[]>(getInitTags(tags, selectedTags));
    const handleSearchChange = (newSearch: string) => setSearchTerm(newSearch);
    const handleFilterChange = (updatedFilters: FiltersOption[]) => setFiltersOptions(updatedFilters);
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    const tagsParams = searchParams.get('tags');
    const hasMoreArticles = useMemo(() => articles.data.length > 0, [articles]);

    useEffect(() => {
        const newUrl = debouncedSearchTerm
            ? `${pathname}?${createQueryString('search', [debouncedSearchTerm])}`
            : `${pathname}${tagsParams ? `?tags=${tagsParams}` : ''}`;

        replace(newUrl, { scroll: false });
    }, [debouncedSearchTerm, pathname, replace, createQueryString, tagsParams]);

    const handleFilterClick = (updatedOption: CheckOption) => {
        const updatedFilters = filtersOptions.map(option => ({
            ...option,
            isChecked: option.id === updatedOption.id ? updatedOption.isChecked : option.isChecked,
        }));

        handleFilterChange(updatedFilters);

        const checkedFilters = updatedFilters.filter(option => option.isChecked).map(option => option.id);
        replace(`${pathname}?${createQueryString('tags', checkedFilters)}`, { scroll: false });
    };

    return (
        <div className='flex flex-col h-fit mx-auto my-[5rem] 
            w-[32.7rem] sm:w-[54rem] md:w-[72rem] lg:w-[95.6rem] xl:w-[121.6rem] 2xl:w-[130rem] 
        '>
            <div className='flex items-center gap-4 mb-20 justify-center
                flex-col lg:flex-row xl:flex-row 2xl:flex-row 
            '>
                <Filters options={filtersOptions} onClick={handleFilterClick} />
                <SearchInput className='
                    mt-[2.4rem] lg:mt-0 xl:mt-0 2xl:mt-0
                    w-full lg:w-[28.6rem] xl:w-[28.6rem] 2xl:w-[28.6rem] 
                    h-full lg:h-[4.8rem] xl:h-[4.8rem] 2xl:h-[4.8rem] 
                ' inputClassName='h-[4.1rem] lg:h-[4.8rem] xl:h-[4.8rem] 2xl:h-[4.8rem] text-[1.6rem]' value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} />
            </div>
            <div>
                {!hasMoreArticles && 
                    <div className='flex flex-col w-full items-center my-[10vw]
                        text-center sm:text-inherit md:text-inherit lg:text-inherit xl:text-inherit 2xl:text-inherit
                    '>
                        <p className='font-dharma-gothic-e text-[4rem] text-black font-black uppercase mb-[1.6rem]
                            leading-[3.5rem] sm:leading-none md:leading-none lg:leading-none xl:leading-none 2xl:leading-none
                        '>
                            There are no exact matches found
                        </p>
                        <p className='font-host-grotesk text-[2rem] text-black font-bold'>
                            Please, try again!
                        </p>
                        <div className='w-[23.2rem] mt-[4.8rem]'>
                            <ImageWrapper src={IMGComputer.src} alt="Not found" />
                        </div>
                    </div>
                }

                <ArticlesContainer
                    search={debouncedSearchTerm}
                    tags={filtersOptions.filter(option => option.isChecked).map(option => option.id)}
                    initArticles={articles}
                    featuredArticleId={featuredArticleId}
                />
            </div>
        </div>
    )
}