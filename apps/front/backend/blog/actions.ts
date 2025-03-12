import { StrapiArticle, StrapiTag, StrapiBlogData, StrapiSeoComponent, StrapiParagraph, StrapiContentNavigation, StrapiAuthor } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import { fetchStrapi } from '@/libs/litebox-lib/utils/fetchStrapi';
import { getArticlesQueryParams, getArticleQueryParams, getBlogFeaturedArticleQueryParams, getArticlesExcludingSlugQueryParams } from './queries'
import { StrapiMedia } from '@/libs/litebox-lib/types/strapi/strapi';

export const getArticles = async (search?: string, tags?: string[], offset = 0) => {
    try{
        const articlesQueryParams = getArticlesQueryParams(search, tags, offset);
        const articles = await fetchStrapi<StrapiArticle[]>(`/articles?${articlesQueryParams}`);
        return articles;
    } catch(error){
        return {
            data: [] as StrapiArticle[],
            meta: {
                pagination: {
                    start: 0,
                    limit: 0,
                    total: 0
                }
            }
        };
    }
};

export const getLastArticles = async (limit = 3) => {
    try{
        const articlesQueryParams = getArticlesQueryParams(undefined, undefined, 0, limit);
        const articles = await fetchStrapi<StrapiArticle[]>(`/articles?${articlesQueryParams}`);
        return articles;
    } catch(error){
        return {
            data: [] as StrapiArticle[]
        };
    }
};

export const getArticle = async (slug: string) => {
    try{
        const articleQueryParams = getArticleQueryParams(slug);
        const article = await fetchStrapi<StrapiArticle[]>(`/articles?${articleQueryParams}`);
        const relatedArticlesQueryParams = getArticlesExcludingSlugQueryParams(slug, 3);
        const relatedArticles = await fetchStrapi<StrapiArticle[]>(`/articles?${relatedArticlesQueryParams}`);
        const output = {
            ...article?.data?.[0], 
            relatedArticles: relatedArticles.data
        };
        return output
    } catch(error){
        return {
            id: 0,
            slug: '',
            title: '',
            coverImage: {} as StrapiMedia,
            seo: {} as StrapiSeoComponent,
            authors: [] as StrapiAuthor[],
            date: '',
            paragraphs: [] as StrapiParagraph[],
            contentNavigation: [] as StrapiContentNavigation[],
            tags: [] as StrapiTag[],
            relatedArticles: [] as StrapiArticle[],
            createdAt: '',
            publishedAt: '',
            updatedAt: ''
        }
    }
};

export const getTags = async () => {
    try{
        const strapiTags = await fetchStrapi<StrapiTag[]>(`/tags`);
        return strapiTags;
    } catch(error) {
        return {
            data: [] as StrapiTag[]
        };
    }
};

export const getBlogFeaturedArticle = async () => {
    try{
        const blogFeaturedArticleQueryParams = getBlogFeaturedArticleQueryParams();
        const blogFeaturedArticle = await fetchStrapi<StrapiBlogData>(`/blog?${blogFeaturedArticleQueryParams}`);
        return blogFeaturedArticle.data.featuredArticle.id
    } catch(error){
        // No featured article found
        return 0;
    }
}