/* eslint-disable */
import { StrapiData } from '@/libs/litebox-lib/types/strapi/strapi';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';

export type CheckOption = {
    id: string;
    isChecked: boolean;
};

export interface FiltersOption {
  id: string;
  isChecked?: boolean;
  name: string;
}

export interface ArticlesListProps {
    articles: StrapiData<StrapiArticle[]>;
    searchTerm: string;
    onSearchChange: (newSearch: string) => void;
    filtersOptions: FiltersOption[];
    onFilterChange: (updatedFilters: any[]) => void;
    featuredArticleId: number;
}

export interface ArticlesContainerProps {
    search: string;
    tags: string[];
    initArticles: StrapiData<StrapiArticle[]>;
    featuredArticleId?: number;
    ArticleComponent: any;
}

export interface ArticlesMainContainerProps {
    articles: StrapiData<StrapiArticle[]>;
    search: string;
    tags: FiltersOption[];
    selectedTags: string[];
    featuredArticleId: number;
}

export const PAGINATION_LIMIT = 6