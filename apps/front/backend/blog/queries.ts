import qs from 'qs';
import { PAGINATION_LIMIT } from '@/components/blog/types';

export const getArticlesQueryParams = (search?: string, tags?: string[], offset?: number, limit?: number) => {
    const config = {
        fields: ['slug', 'title', 'date', 'createdAt', 'updatedAt'],
        filters: {
            ...(search && {
                title: {
                    $containsi: search,
                }
            }),
            ...(tags && tags.length && {
                tags: {
                    $in: tags,
                },
            }),
        },
        populate: {
            coverImage: true,
            seo: true,
            tags: true,
            authors: {
                fields: ['name'],
            },
        },
        sort: ['updatedAt:desc'],
        pagination: {
            start: offset,
            limit: limit ?? PAGINATION_LIMIT,
        },
    }

    return qs.stringify(config);
};

export const getArticlesExcludingSlugQueryParams = (slug: string, limit: number) => {
    const config = {
        fields: ['slug', 'title', 'date', 'createdAt', 'updatedAt'],
        filters: {
            ...(slug && {
                slug: {
                    $ne: slug,
                }
            }),
        },
        populate: {
            coverImage: true,
            seo: true,
            tags: true,
            authors: {
                fields: ['name'],
            },
        },
        sort: ['updatedAt:desc'],
        pagination: {
            limit,
        },
    }

    return qs.stringify(config);
};

export const getArticleQueryParams = (slug: string) => {
    const config = {
        filters: {
            ...(slug && {
                slug: {
                    $eq: slug,
                }
            })
        },
        populate: {
            coverImage: true,
            seo: true,
            tags: true,
            authors: {
                populate: {
                    profileImage: true,
                },
            },
            paragraphs: true,
            contentNavigation: true
        }
    }

    return qs.stringify(config);
}

export const getBlogFeaturedArticleQueryParams = () => {
    const config = {
        populate: {
            featuredArticle: true,
        }
    }

    return qs.stringify(config);
};