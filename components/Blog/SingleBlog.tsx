"use client";

import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/post";
import { getStrapiMediaUrl } from '@/app/config/api';

interface SingleBlogProps {
  blog: Post;
}

const SingleBlog = ({ blog }: SingleBlogProps) => {
  const { attributes } = blog;

  // Verifica se temos uma URL de capa
  const coverData = attributes?.cover?.data;
  const coverUrl = coverData ? getStrapiMediaUrl(coverData.attributes.url) : undefined;

  // Formata a data de publicação
  const formattedDate = attributes?.publicationDateNew
    ? new Date(attributes.publicationDateNew).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  // Verifica se temos categorias
  const categories = attributes?.categories?.data ?? [];
  const hasCategories = categories && categories.length > 0;

  return (
    <div className="relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark">
      <Link href={`/blog/${attributes.slug}`} className="relative block h-[230px]">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={attributes.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover object-center transition duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-100 dark:bg-gray-800">
            <span className="text-gray-400">Sem imagem</span>
          </div>
        )}
      </Link>
      
      <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
        <h3>
          <Link
            href={`/blog/${attributes.slug}`}
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {attributes.title}
          </Link>
        </h3>
        
        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {attributes.excerpt}
        </p>
        
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  Por {attributes.author}
                </h4>
                <p className="text-xs text-body-color">{formattedDate}</p>
              </div>
            </div>
          </div>

          {hasCategories && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category.id}
                  className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                >
                  {category.attributes.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog; 