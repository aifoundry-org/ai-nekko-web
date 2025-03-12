import { useState, useEffect, useMemo } from 'react';
import { getArticles } from '@/backend/blog/actions';
import { ArticlesContainerProps } from '@/components/blog/common/types';
import Spinner from '@/libs/litebox-lib/ui/Spinner/Spinner';
import Button from '@/libs/litebox-lib/ui/Button/Button';
import ArticleBox from './articleBox';

const ArticlesContainer = ({
  search,
  tags,
  initArticles,
  featuredArticleId
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
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[2.4rem] gap-y-20'>
                    {sortedArticles.data.map(article => {
                        const isFeaturedArticle = article.id === featuredArticleId;
    
                        return ArticleBox({article, isFeaturedArticle})
                    })}
                </div>
                {hasMoreArticles && (
                    <div className='flex flex-row justify-center my-32'>
                        <Button onClick={showMoreArticles} variant='secondary' content='Load more articles' />
                    </div>
                )}
            </div>
    );
};

export default ArticlesContainer;
