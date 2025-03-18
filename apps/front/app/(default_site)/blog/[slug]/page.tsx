import { redirect } from 'next/navigation'
import { Suspense } from 'react';
import Main from '@/components/blog/article/article'
import { getArticle } from '@/backend/blog/actions';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const article = await getArticle(slug);
    if(!Object.keys(article).includes('id')){
        redirect('/page-not-found');
    }

    return (
        <main>
            <Suspense>
                <Main article={article} />
            </Suspense>
        </main>
    );
}