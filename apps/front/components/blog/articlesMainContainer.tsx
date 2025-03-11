'use client'

import { useState } from 'react';
import { ArticlesMainContainerProps } from './types';
import { FiltersOption } from './types';
import ArticlesList from '@/components/blog/articlesList'

const getInitTags = (tags: FiltersOption[], selectedTags: string[]) => {
    const formattedTags = tags.map(tag => ({
        ...tag,
        isChecked: selectedTags.includes(tag.id.toString()),
    }));
  
    return formattedTags;
};

export default function ArticlesMainContainer({articles, search, tags, selectedTags, featuredArticleId}: ArticlesMainContainerProps) {
    const [searchTerm, setSearchTerm] = useState<string>(search);
    const [filtersOptions, setFiltersOptions] = useState<FiltersOption[]>(getInitTags(tags, selectedTags));

    const handleSearchChange = (newSearch: string) => setSearchTerm(newSearch);
    const handleFilterChange = (updatedFilters: FiltersOption[]) => setFiltersOptions(updatedFilters);

    return (
        <ArticlesList
            articles={articles}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            filtersOptions={filtersOptions}
            onFilterChange={handleFilterChange}
            featuredArticleId={featuredArticleId}
        />
    )
}