# AI NEKKO

## Overview

This is the marketing site for AINekko, there are two apps implemented:

1. **Marketing site**: The frontend for the AINekko.org web site
2. **Strapi**: Here, you'll find the content management system (CMS) that powers our marketing site, making it easy for us to create and manage content (blog articles).

## Development Environment Variables

### Environment Variables for `front`

```
NEXT_PUBLIC_STRAPI_BASE_URL=
NEXT_PUBLIC_STRAPI_API_TOKEN=
NEXT_PUBLIC_HIDE_SECTIONS=
```

### Environment Variables for `strapi`

```
HOST=0.0.0.0
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
JWT_SECRET=tobemodified
```

## Project Folder Structure

```
├── README.md
├── apps
│   ├── front
│   │   ├── README.md
│   │   ├── app
│   │   │   ├── (default_site)
│   │   │   │   ├── blog
│   │   │   │   │   ├── [slug]
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── cookie-policy
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   ├── privacy-policy
│   │   │   │   │   └── page.tsx
│   │   │   │   └── terms-of-service
│   │   │   │       └── page.tsx
│   │   │   ├── [...not-found]
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css
│   │   │   ├── robots.ts
│   │   │   └── sitemap.ts
│   │   ├── backend
│   │   │   └── blog
│   │   │       ├── actions.ts
│   │   │       └── queries.ts
│   │   ├── components
│   │   │   ├── blog
│   │   │   │   ├── article
│   │   │   │   │   ├── article.tsx
│   │   │   │   │   ├── articleAuthor.tsx
│   │   │   │   │   ├── articleContent.tsx
│   │   │   │   │   ├── articleHeadline.tsx
│   │   │   │   │   ├── articleNavigation.tsx
│   │   │   │   │   ├── articleTag.tsx
│   │   │   │   │   ├── articlesRelated.tsx
│   │   │   │   │   └── socialShareLink.tsx
│   │   │   │   ├── articlesContainer
│   │   │   │   │   ├── articleBox.tsx
│   │   │   │   │   ├── articlesContainer.tsx
│   │   │   │   │   └── articlesGrid.tsx
│   │   │   │   └── common
│   │   │   │       ├── filters.tsx
│   │   │   │       ├── input.tsx
│   │   │   │       ├── main.tsx
│   │   │   │       ├── searchInput.tsx
│   │   │   │       └── types.tsx
│   │   │   ├── common
│   │   │   │   ├── ImageWrapper.tsx
│   │   │   │   └── LottiePlayer.tsx
│   │   │   ├── header
│   │   │   │   ├── announcement.tsx
│   │   │   │   └── main.tsx
│   │   │   ├── home
│   │   │   │   ├── aiAsASystem
│   │   │   │   │   └── main.tsx
│   │   │   │   ├── faqs
│   │   │   │   │   ├── main.tsx
│   │   │   │   │   └── modal.tsx
│   │   │   │   ├── footer
│   │   │   │   │   └── main.tsx
│   │   │   │   ├── hero
│   │   │   │   │   ├── catAnimText1.tsx
│   │   │   │   │   ├── catAnimText2.tsx
│   │   │   │   │   ├── catAnimText3.tsx
│   │   │   │   │   ├── comeBuildWithUs.tsx
│   │   │   │   │   └── main.tsx
│   │   │   │   ├── marquee
│   │   │   │   │   └── main.tsx
│   │   │   │   ├── paperDiscussions
│   │   │   │   │   └── main.tsx
│   │   │   │   └── theTeam
│   │   │   │       ├── card.tsx
│   │   │   │       └── main.tsx
│   │   │   └── navbar
│   │   │       └── main.tsx
│   │   ├── eslint.config.mjs
│   │   ├── hooks
│   │   │   ├── useDebounce.tsx
│   │   │   ├── useOnEnterView.tsx
│   │   │   ├── useQueryString.tsx
│   │   │   └── useScrollToElement.tsx
│   │   ├── libs
│   │   │   └── litebox-lib
│   │   │       ├── hooks
│   │   │       │   └── useScrollLock.ts
│   │   │       ├── types
│   │   │       │   └── strapi
│   │   │       │       ├── strapi.ts
│   │   │       │       └── strapiBlog.ts
│   │   │       ├── ui
│   │   │       │   ├── Accordion
│   │   │       │   │   └── Accordion.tsx
│   │   │       │   ├── Button
│   │   │       │   │   └── Button.tsx
│   │   │       │   ├── Input
│   │   │       │   │   └── Input.tsx
│   │   │       │   ├── Modal
│   │   │       │   │   └── Modal.tsx
│   │   │       │   └── Spinner
│   │   │       │       └── Spinner.tsx
│   │   │       └── utils
│   │   │           ├── cn.ts
│   │   │           └── fetchStrapi.ts
│   │   ├── next-env.d.ts
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   ├── public
│   │   │   ├── fonts
│   │   │   │   └── HostGrotesk-VariableFont_wght.ttf
│   │   │   ├── imgs
│   │   │   │   ├── aiAsASystem
│   │   │   │   │   └── logo.webp
│   │   │   │   ├── blog
│   │   │   │   │   ├── arrows.webp
│   │   │   │   │   ├── background.webp
│   │   │   │   │   ├── cat.webp
│   │   │   │   │   ├── catMobile.webp
│   │   │   │   │   ├── computer.webp
│   │   │   │   │   ├── decorations.webp
│   │   │   │   │   ├── error.webp
│   │   │   │   │   ├── graffiti.webp
│   │   │   │   │   ├── instagramIcon.webp
│   │   │   │   │   ├── linkedinIcon.webp
│   │   │   │   │   ├── marquee.webp
│   │   │   │   │   ├── marqueeMobile.webp
│   │   │   │   │   ├── moto.webp
│   │   │   │   │   ├── paper.webp
│   │   │   │   │   ├── verticalText.webp
│   │   │   │   │   ├── xIcon.webp
│   │   │   │   │   └── youtubeIcon.webp
│   │   │   │   ├── comeBuildWithUs
│   │   │   │   │   ├── cat.webp
│   │   │   │   │   ├── data.webp
│   │   │   │   │   ├── dots.webp
│   │   │   │   │   ├── error.webp
│   │   │   │   │   ├── findOut.webp
│   │   │   │   │   ├── punchCard.webp
│   │   │   │   │   └── sticker.webp
│   │   │   │   ├── faqs
│   │   │   │   │   ├── banner.webp
│   │   │   │   │   ├── bannerMobile.webp
│   │   │   │   │   ├── chevron.webp
│   │   │   │   │   └── closeButton.webp
│   │   │   │   ├── footer
│   │   │   │   │   ├── cat.webp
│   │   │   │   │   └── sticker.webp
│   │   │   │   ├── hero
│   │   │   │   │   ├── arrows.webp
│   │   │   │   │   ├── catAnim.webp
│   │   │   │   │   ├── catAnimLight.webp
│   │   │   │   │   ├── circles.webp
│   │   │   │   │   ├── error.webp
│   │   │   │   │   ├── errorMobile.webp
│   │   │   │   │   ├── gloves.webp
│   │   │   │   │   ├── googles.webp
│   │   │   │   │   ├── graffiti_1.webp
│   │   │   │   │   ├── graffiti_2.webp
│   │   │   │   │   ├── graffiti_3.webp
│   │   │   │   │   └── spray.webp
│   │   │   │   ├── navbar
│   │   │   │   │   ├── logo.webp
│   │   │   │   │   └── logoMobile.webp
│   │   │   │   ├── notFound
│   │   │   │   │   ├── error.webp
│   │   │   │   │   ├── errorMobile.webp
│   │   │   │   │   ├── graffiti.webp
│   │   │   │   │   ├── graffitiMobile.webp
│   │   │   │   │   ├── numbers.webp
│   │   │   │   │   ├── numbersMobile.webp
│   │   │   │   │   ├── paper.webp
│   │   │   │   │   ├── paperMobile.webp
│   │   │   │   │   ├── pluses.webp
│   │   │   │   │   ├── plusesMobile.webp
│   │   │   │   │   ├── vertical_404.webp
│   │   │   │   │   └── vertical_notFound.webp
│   │   │   │   ├── og
│   │   │   │   │   ├── og_blog.png
│   │   │   │   │   └── og_home.png
│   │   │   │   ├── paperDiscussions
│   │   │   │   │   ├── cat.webp
│   │   │   │   │   ├── text.webp
│   │   │   │   │   └── textMobile.webp
│   │   │   │   └── theTeam
│   │   │   │       ├── advisors
│   │   │   │       │   ├── advisor-1.webp
│   │   │   │       │   ├── advisor-2.webp
│   │   │   │       │   ├── advisor-3.webp
│   │   │   │       │   ├── advisor-4.webp
│   │   │   │       │   └── advisor-5.webp
│   │   │   │       ├── graffiti.webp
│   │   │   │       ├── paper.webp
│   │   │   │       ├── punchCard.webp
│   │   │   │       └── team
│   │   │   │           ├── team-1.webp
│   │   │   │           ├── team-2.webp
│   │   │   │           └── team-3.webp
│   │   │   ├── lotties
│   │   │   │   ├── marqueeDesktop.lottie
│   │   │   │   └── marqueeMobile.lottie
│   │   │   ├── next.svg
│   │   │   ├── svgs
│   │   │   │   ├── blog
│   │   │   │   │   └── arrowLeft.svg
│   │   │   │   ├── common
│   │   │   │   │   ├── ArrowUpRight.svg
│   │   │   │   │   ├── ArrowUpRight.tsx
│   │   │   │   │   ├── ArrowUpRightMobile.tsx
│   │   │   │   │   ├── CloseButton.svg
│   │   │   │   │   ├── Discord.tsx
│   │   │   │   │   ├── Github.tsx
│   │   │   │   │   ├── Hamburger.svg
│   │   │   │   │   ├── IconLinkedin.svg
│   │   │   │   │   ├── Plus.tsx
│   │   │   │   │   ├── ScrollArrowLeftMobile.tsx
│   │   │   │   │   └── ScrollArrowRightMobile.tsx
│   │   │   │   └── theTeam
│   │   │   │       └── iconLinkedin.svg
│   │   │   └── vercel.svg
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── utils
│   │       ├── getReadTime.tsx
│   │       └── getStrapiMediaUrl.ts
│   └── strapi
│       ├── README.md
│       ├── config
│       │   ├── admin.ts
│       │   ├── api.ts
│       │   ├── database.ts
│       │   ├── middlewares.ts
│       │   ├── plugins.ts
│       │   └── server.ts
│       ├── database
│       │   └── migrations
│       ├── favicon.png
│       ├── package.json
│       ├── public
│       │   ├── robots.txt
│       │   └── uploads
│       │       ├── Tanya_Dadasheva_3c4e48d905.png
│       │       ├── ai_Event_b2ab9a9c4c.png
│       │       ├── llama_Event_ad44dccb84.png
│       │       ├── low_Level_Event_96e1a78fb2.png
│       │       ├── medium_ai_Event_b2ab9a9c4c.png
│       │       ├── medium_llama_Event_ad44dccb84.png
│       │       ├── medium_low_Level_Event_96e1a78fb2.png
│       │       ├── small_ai_Event_b2ab9a9c4c.png
│       │       ├── small_llama_Event_ad44dccb84.png
│       │       ├── small_low_Level_Event_96e1a78fb2.png
│       │       ├── thumbnail_ai_Event_b2ab9a9c4c.png
│       │       ├── thumbnail_llama_Event_ad44dccb84.png
│       │       └── thumbnail_low_Level_Event_96e1a78fb2.png
│       ├── src
│       │   ├── admin
│       │   │   ├── app.example.tsx
│       │   │   ├── tsconfig.json
│       │   │   └── vite.config.example.ts
│       │   ├── api
│       │   │   ├── article
│       │   │   │   ├── content-types
│       │   │   │   │   └── article
│       │   │   │   │       └── schema.json
│       │   │   │   ├── controllers
│       │   │   │   │   └── article.ts
│       │   │   │   ├── routes
│       │   │   │   │   └── article.ts
│       │   │   │   └── services
│       │   │   │       └── article.ts
│       │   │   ├── author
│       │   │   │   ├── content-types
│       │   │   │   │   └── author
│       │   │   │   │       └── schema.json
│       │   │   │   ├── controllers
│       │   │   │   │   └── author.ts
│       │   │   │   ├── routes
│       │   │   │   │   └── author.ts
│       │   │   │   └── services
│       │   │   │       └── author.ts
│       │   │   ├── blog
│       │   │   │   ├── content-types
│       │   │   │   │   └── blog
│       │   │   │   │       └── schema.json
│       │   │   │   ├── controllers
│       │   │   │   │   └── blog.ts
│       │   │   │   ├── routes
│       │   │   │   │   └── blog.ts
│       │   │   │   └── services
│       │   │   │       └── blog.ts
│       │   │   └── tag
│       │   │       ├── content-types
│       │   │       │   └── tag
│       │   │       │       └── schema.json
│       │   │       ├── controllers
│       │   │       │   └── tag.ts
│       │   │       ├── routes
│       │   │       │   └── tag.ts
│       │   │       └── services
│       │   │           └── tag.ts
│       │   ├── components
│       │   │   ├── article
│       │   │   │   ├── content-navigation.json
│       │   │   │   └── paragraphs.json
│       │   │   ├── common
│       │   │   │   └── seo.json
│       │   │   └── seo
│       │   │       └── metadata.json
│       │   ├── extensions
│       │   └── index.ts
│       ├── tsconfig.json
│       └── types
│           └── generated
│               ├── components.d.ts
│               └── contentTypes.d.ts
├── commitlint.config.js
├── package-lock.json
├── package.json
├── packages
│   └── eslint-config-custom
│       ├── index.js
│       └── package.json
├── turbo.json
└── yarn.lock
```

## Running the Marketing Site

To run the marketing site, follow these steps:

1. Navigate to the marketing site directory with: `cd apps/front`
2. Populate the `.env` file with the correct values based on the `.env.example` file
3. Modify the `next.config.ts` file as shown below:
```
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["<strapi_url_domain>"],
    },
};

export default nextConfig;

```
to enable the images to be loaded correctly from strapi. The url <strapi_url_domain> does not
need the https:// part (i.e. "strapi.ai-nekko.litebox.dev").
4. Install the necessary dependencies with: `yarn install`
5. Start the development server with: `yarn dev`

## Running Strapi

To run Strapi, follow these steps:

1. Populate the `.env` file with the correct values based on the `.env.example` file.
2. Navigate to the Strapi directory with: `cd apps/strapi`.
3. Install the necessary dependencies with: `yarn install`.
4. Start the development server with: `yarn develop`.