import { useState, useEffect, useMemo } from 'react';
import { getArticles } from '@/backend/blog/actions';
import { ArticlesContainerProps } from './types';
import Spinner from '@/libs/litebox-lib/ui/Spinner/Spinner';

const ArticlesContainer = ({
  search,
  tags,
  initArticles,
  featuredArticleId,
  ArticleComponent
}: ArticlesContainerProps) => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState(initArticles);
    const [hasMoreArticles, setHasMoreArticles] = useState(false);

    const showMoreArticles = async () => {
        const offset = articles.meta.pagination.start+articles.meta.pagination.limit;
        const newArticles = await getArticles(search, tags, offset);
        const { start, limit, total } = newArticles.meta.pagination;
        setHasMoreArticles((start+limit) < total)

        setArticles(prevArticles => {
            const uniqueArticles = newArticles.data.filter(newArticle => !prevArticles.data.some(prevArticle => prevArticle.id === newArticle.id));
            return {
                meta: newArticles.meta,
                data: [...prevArticles.data, ...uniqueArticles]
            };
        });
    };

    const sortedArticles = useMemo(() => {
        if(featuredArticleId){
            articles.data = articles.data.sort((a, b) => {
                if (a.id === featuredArticleId) return -1;
                if (b.id === featuredArticleId) return 1;
                return 0;
            });
        }
        return articles;
    }, [articles, featuredArticleId]);

    useEffect(() => {
        setLoading(true)
        setArticles(initArticles);
        const { start, limit, total } = initArticles.meta.pagination;
        setHasMoreArticles((start+limit) < total)
        setLoading(false)
    }, [search, tags, initArticles]);

    return (
        loading ? 
            <Spinner /> : 
            <ArticleComponent 
                sortedArticles={sortedArticles}
                hasMoreArticles={hasMoreArticles}
                showMoreArticles={showMoreArticles}
                featuredArticleId={featuredArticleId} 
            />
    );
};

export default ArticlesContainer;
