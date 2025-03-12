import Main from '@/components/blog/common/main';
import { getArticles, getTags, getBlogFeaturedArticle } from '@/backend/blog/actions';
import ArticlesGrid from '@/components/blog/articlesContainer/articlesGrid';

export default async function Page({ searchParams }: { 
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const { search = '', tags = '' } = await searchParams;
  const selectedTags = tags === '' ? [] : tags.split(',');
  const articles = await getArticles(search, selectedTags);
  const allTags = await getTags();
  const featuredArticleId = await getBlogFeaturedArticle();

  return (
    <main>
      <Main />
      <ArticlesGrid
        articles={articles} 
        featuredArticleId={featuredArticleId} 
        search={search} 
        tags={allTags.data} 
        selectedTags={selectedTags} 
      />
    </main>
  );
}
