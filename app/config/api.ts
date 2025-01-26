// URL base do Strapi
export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
export const STRAPI_API_URL = `${STRAPI_URL}/api`;

// Função auxiliar para construir URLs da API do Strapi
export function getStrapiURL(path: string = ''): string {
  if (!path) {
    return STRAPI_URL;
  }
  return `${STRAPI_API_URL}${path}`;
}

// Função auxiliar para construir URLs de mídia do Strapi
export function getStrapiMediaUrl(url: string | null | undefined): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
} 