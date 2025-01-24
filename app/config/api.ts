// URL base do Strapi
export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
export const STRAPI_API_URL = `${STRAPI_URL}/api`;

// Função auxiliar para construir URLs de mídia do Strapi
export const getStrapiMediaUrl = (url: string | null | undefined): string | undefined => {
  if (!url) return undefined;
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
};

// Função auxiliar para construir URLs da API do Strapi
export const getStrapiURL = (path: string = ''): string => {
  return `${STRAPI_API_URL}${path}`;
}; 