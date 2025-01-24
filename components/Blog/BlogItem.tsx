"use client";
import { Post } from "@/types/post";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getStrapiMediaUrl } from '@/app/config/api';

const BlogItem = ({ blog }: { blog: Post }) => {
  if (!blog?.attributes) {
    console.log("Post sem atributos:", blog);
    return null;
  }

  const { attributes } = blog;

  if (!attributes.title || !attributes.slug) {
    console.log("Post sem título ou slug:", attributes);
    return null;
  }

  // Construir a URL da capa
  const coverUrl = attributes.cover?.data?.attributes?.url 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${attributes.cover.data.attributes.url}`
    : null;

  console.log("URL da capa construída:", coverUrl);

  // Formata a data de publicação
  const formattedDate = attributes.publicationDateNew 
    ? new Date(attributes.publicationDateNew).toLocaleDateString("pt-PT", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  // Verifica se temos categorias
  const categories = attributes.categories?.data ?? [];
  const hasCategories = categories.length > 0;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="animate_top group relative overflow-hidden rounded-lg bg-white shadow-solid-8 dark:bg-blacksection"
    >
      <Link className="relative block aspect-[1.7/1] w-full" href={`/blog/${attributes.slug || ""}`}>
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
          <div className="flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-800">
            <span className="text-gray-500">Imagem não disponível</span>
          </div>
        )}
      </Link>

      <div className="p-7.5 xl:p-10">
        <div className="mb-5 flex items-center gap-4">
          {attributes.author && (
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">
                Por {attributes.author}
              </span>
            </div>
          )}
          {formattedDate && (
            <span className="text-sm font-medium">{formattedDate}</span>
          )}
        </div>
        
        <h3 className="mb-3.5 line-clamp-2">
          <Link
            href={`/blog/${attributes.slug || ""}`}
            className="text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {attributes.title}
          </Link>
        </h3>
        
        <p className="line-clamp-3">{attributes.excerpt}</p>

        {hasCategories && (
          <div className="mt-5 flex flex-wrap gap-2">
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
    </motion.div>
  );
};

export default BlogItem;
