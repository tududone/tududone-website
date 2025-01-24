"use client";

import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import { getStrapiURL, getStrapiMediaUrl } from '@/app/config/api';

interface RelatedPostProps {
  currentPostId?: number;
  currentPostCategories?: string[];
}

const RelatedPost = async ({ currentPostId, currentPostCategories = [] }: RelatedPostProps) => {
  // Busca posts relacionados do Strapi
  const fetchRelatedPosts = async () => {
    try {
      const response = await fetch(
        getStrapiURL('/posts?populate=*&pagination[limit]=3'),
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Falha ao carregar posts relacionados');
      }

      const data = await response.json();
      return data.data.filter((post: Post) => post.id !== currentPostId).slice(0, 3);
    } catch (error) {
      console.error('Erro ao buscar posts relacionados:', error);
      return [];
    }
  };

  const relatedPosts = await fetchRelatedPosts();

  return (
    <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
      <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
        Posts Relacionados
      </h4>

      <div>
        {relatedPosts.map((post: Post) => {
          const coverUrl = post.attributes.cover.data 
            ? getStrapiMediaUrl(post.attributes.cover.data.attributes.url)
            : undefined;

          return (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={post.id}
            >
              <div className="relative h-18 w-45 overflow-hidden rounded-md">
                {coverUrl ? (
                  <Image
                    fill
                    src={coverUrl}
                    alt={post.attributes.title}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-800">
                    <span className="text-sm text-gray-500">Sem imagem</span>
                  </div>
                )}
              </div>
              <h5 className="flex-1 text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <Link href={`/blog/${post.attributes.slug}`}>
                  {post.attributes.title.length > 40
                    ? `${post.attributes.title.slice(0, 40)}...`
                    : post.attributes.title}
                </Link>
              </h5>
            </div>
          );
        })}

        {relatedPosts.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400">
            Nenhum post relacionado encontrado.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedPost;
