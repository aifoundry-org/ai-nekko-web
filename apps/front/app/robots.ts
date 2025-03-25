import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cookie-policy/', '/privacy-policy/', '/terms-of-service/', '/not-found/'],
    },
    sitemap: 'https://ainekko.ai/sitemap.xml',
  }
}