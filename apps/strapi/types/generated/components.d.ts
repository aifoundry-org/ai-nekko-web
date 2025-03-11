import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleContentNavigation extends Struct.ComponentSchema {
  collectionName: 'components_article_content_navigations';
  info: {
    description: '';
    displayName: 'ContentNavigation';
  };
  attributes: {
    content: Schema.Attribute.String;
    tag: Schema.Attribute.String;
  };
}

export interface ArticleParagraphs extends Struct.ComponentSchema {
  collectionName: 'components_article_paragraphs';
  info: {
    description: '';
    displayName: 'Paragraphs';
    icon: 'bulletList';
  };
  attributes: {
    alternativeStyle: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    content: Schema.Attribute.Blocks;
    tag: Schema.Attribute.String;
  };
}

export interface CommonSeo extends Struct.ComponentSchema {
  collectionName: 'components_common_seos';
  info: {
    description: '';
    displayName: 'SEO';
  };
  attributes: {
    canonical: Schema.Attribute.String;
    openGraphImages: Schema.Attribute.Media<'images', true>;
    openGraphSiteName: Schema.Attribute.String;
    openGraphUrl: Schema.Attribute.String;
    twitterCardType: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
    twitterCreatorId: Schema.Attribute.String;
    twitterSiteId: Schema.Attribute.String;
  };
}

export interface SeoMetadata extends Struct.ComponentSchema {
  collectionName: 'components_seo_metadata';
  info: {
    description: '';
    displayName: 'metadata';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    og_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required & Schema.Attribute.DefaultTo<'ai-foundry.litebox.dev'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article.content-navigation': ArticleContentNavigation;
      'article.paragraphs': ArticleParagraphs;
      'common.seo': CommonSeo;
      'seo.metadata': SeoMetadata;
    }
  }
}
