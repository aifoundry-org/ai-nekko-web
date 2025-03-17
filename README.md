# Website

This README provides instructions on how to set up and run the marketing site.

## Running the Marketing Site

To run the marketing site, follow these steps:

1. Populate the `.env` file with the correct values based on the `.env.example` file.
2. Modify the `next.config.ts` file as shown below:
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
3. Navigate to the marketing site directory with: `cd apps/front`.
4. Install the necessary dependencies with: `yarn install`.
5. Start the development server with: `yarn dev`.