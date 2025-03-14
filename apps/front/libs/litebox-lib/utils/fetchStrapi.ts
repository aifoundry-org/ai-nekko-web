import { StrapiData } from '../types/strapi/strapi';

type HandledErrorCode = 404 | 500;

const ERROR_CODES_MESSAGES: Record<HandledErrorCode, string> = {
    404: "404. We couldn't find the endpoint you specified",
    500: '500. There was a problem in the server',
};

/**
 * `fetchStrapi` function make a request to the specified strapi api endpoint. Additionally it handles the error codes received from strapi api.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/fetchStrapi-1-0-0-834d094a4811497fbf9e57c5cbe52783
 *
 * @param {string} endpoint - Full strapi api endpoint with the query parameters included
 * @param {RequestInit} config - The string to capitalize
 *
 * @returns strapiResponse - The strapi response without parse or anything
 */
export const fetchStrapi = async <T>(endpoint: string, config?: RequestInit) => {
    const strapiEndpoint = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api${endpoint}`;
    const response = await fetch(strapiEndpoint, {...config,
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
    });

    if (!response.ok) {
        const handledErrorCodes = Object.keys(ERROR_CODES_MESSAGES);
        const { status: errorCode } = response;

        if (handledErrorCodes.includes(errorCode.toString())) {
        throw new Error(ERROR_CODES_MESSAGES[errorCode as HandledErrorCode]);
        }

        throw new Error('Something went wrong!');
    }

    const strapiResponse = (await response.json()) as StrapiData<T>;
    return strapiResponse;
};
