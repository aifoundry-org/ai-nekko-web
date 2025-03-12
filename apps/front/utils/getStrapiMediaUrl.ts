/**
 * The `getStrapiMediaUrl` function receives a StrapiImage object, and returns the actual url from it. If you’re in development, it will concatenate your NEXT_PUBLIC_STRAPI_URL to the strapi image url.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/getStrapiMediaUrl-1-0-0-01f9855eb9a94abdb037cf7bac6e0228
 *
 * @param image - An strapi media object
 *
 * @returns {string} a url of the strapi media object that you’ve just passed it.
 */
const getStrapiMediaUrl = (image: string) => {
  const path = image;
  return `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${path}`;
};

export default getStrapiMediaUrl;
