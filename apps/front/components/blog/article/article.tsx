'use client'

import { useState } from 'react';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import Headline from './articleHeadline';
import ArticleContent from './articleContent';
import Author from './articleAuthor';
import ArticleNavigation from './articleNavigation';
import ArticlesRelated from './articlesRelated'

interface BlogArticleProps {
    article: StrapiArticle;
}

export default function Article({ article }: BlogArticleProps) {
    const [currentHeaderId, setCurrentHeaderId] = useState<string | null>(null);
    
    return (
        <div>
            <div className='h-full mx-auto root-on-enter-view
                pt-[10rem] sm:pt-[15rem] md:pt-[15rem] lg:pt-[15rem] xl:pt-[15rem] 2xl:pt-[15rem] 
                w-[32.7rem] sm:w-[50rem] md:w-[70rem] lg:w-[100rem] xl:w-[121.6rem] 2xl:w-[121.6rem] 
            '>
                <Headline article={article} />
                <div className='block lg:hidden xl:hidden 2xl:hidden'>
                    <ArticleNavigation contentNavigation={article.contentNavigation} onCurrentHeaderIdChange={setCurrentHeaderId} currentHeaderId={currentHeaderId} />
                </div>
                <div className='flex flex-row flex-wrap lg:flex-nowrap gap-x-[12.7rem] mb-[5rem]
                mt-[4rem] sm:mt-[4rem] md:mt-[5.2rem] lg:mt-[7.2rem] xl:mt-[7.2rem] 2xl:mt-[7.2rem]
                '>
                    <ArticleContent paragraphs={article.paragraphs} coverImage={article.coverImage} onCurrentHeaderIdChange={setCurrentHeaderId} />
                    <Author author={article.authors[0]} contentNavigation={article.contentNavigation} onCurrentHeaderIdChange={setCurrentHeaderId} currentHeaderId={currentHeaderId} />
                </div>
            </div>
            <ArticlesRelated articles={article.relatedArticles} />
        </div>
    );
};
