import { getStrapiURL } from '@/app/config/api';

export interface Post {
  id: number;
  attributes: {
    title: string;
    content: string;
    excerpt: string;
    slug: string;
    author: string;
    publicationDate: string;
    publicationDateNew?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: {
      data: {
        attributes: {
          url: string;
          formats: {
            thumbnail: { url: string };
            small: { url: string };
            medium: { url: string };
            large: { url: string };
          };
        };
      };
    };
    categories: {
      data: Array<{
        id: number;
        attributes: {
          name: string;
          slug: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      }>;
    };
  };
}

export async function fetchPosts(slug?: string): Promise<Post | null> {
  try {
    const path = slug
      ? `/posts?filters[slug][$eq]=${slug}&populate=*`
      : '/posts?populate=*';

    const url = getStrapiURL(path);
    const res = await fetch(url);
    
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }

    const { data } = await res.json();
    
    if (slug) {
      // Se estiver buscando por slug, retorna o primeiro post encontrado
      return data[0] || null;
    }

    // Se não houver slug, retorna todos os posts
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return null;
  }
} 