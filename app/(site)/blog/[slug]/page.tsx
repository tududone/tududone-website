import { Metadata } from "next";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStrapiURL, getStrapiMediaUrl } from '@/app/config/api';

interface PostDetailsProps {
  params: {
    slug: string;
  };
}

// Busca o post do Strapi
async function fetchPost(slug: string) {
  try {
    const response = await fetch(
      getStrapiURL(`/posts?filters[slug][$eq]=${slug}&populate=*`),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Falha ao carregar o post');
    }

    const data = await response.json();
    return data.data[0];
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return null;
  }
}

// Gera os metadados da página dinamicamente
export async function generateMetadata({ params }: PostDetailsProps): Promise<Metadata> {
  const post = await fetchPost(params.slug);
  
  if (!post) {
    return {
      title: "Post não encontrado - Tududone",
      description: "O post que você procura não foi encontrado.",
    };
  }

  const coverUrl = post.attributes.cover.data 
    ? getStrapiMediaUrl(post.attributes.cover.data.attributes.url)
    : undefined;

  const ogImageUrl = post.attributes.cover.data 
    ? getStrapiMediaUrl(post.attributes.cover.data.attributes.url)
    : undefined;

  return {
    title: `${post.attributes.title} - Tududone`,
    description: post.attributes.excerpt,
    openGraph: {
      title: post.attributes.title,
      description: post.attributes.excerpt,
      url: `https://tududone.com/blog/${params.slug}`,
      siteName: "Tududone",
      locale: "pt-PT",
      type: "article",
      publishedTime: post.attributes.publicationDateNew,
      authors: [post.attributes.author],
      images: ogImageUrl
        ? [{
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: post.attributes.title,
          }]
        : [],
    },
  };
}

const PostDetails = async ({ params }: PostDetailsProps) => {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  const { attributes } = post;
  
  // Processa a URL da imagem de capa
  const coverUrl = attributes.cover.data 
    ? getStrapiMediaUrl(attributes.cover.data.attributes.url)
    : null;

  // Formata a data de publicação
  const formattedDate = attributes.publicationDateNew
    ? new Date(attributes.publicationDateNew).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Breadcrumb */}
        <div className="mb-10">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-700 hover:text-primary dark:text-gray-300">
                  Início
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2.5 text-gray-500">/</span>
                  <Link href="/blog" className="text-gray-700 hover:text-primary dark:text-gray-300">
                    Blog
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2.5 text-gray-500">/</span>
                  <span className="text-gray-500 dark:text-gray-400 line-clamp-1">
                    {attributes.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          {/* Sidebar */}
          <div className="md:w-1/2 lg:w-[32%]">
            <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="w-full rounded-lg border border-stroke bg-transparent px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:shadow-none dark:focus:border-primary"
                />
                <button 
                  type="submit"
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-primary text-white"
                >
                  <svg
                    className="fill-current"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Posts Relacionados */}
            <RelatedPost currentPostId={post.id} />
          </div>

          {/* Conteúdo Principal */}
          <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              {coverUrl && (
                <div className="mb-10 w-full overflow-hidden rounded-md">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={coverUrl}
                      alt={attributes.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                </div>
              )}

              <h1 className="mb-5 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                {attributes.title}
              </h1>

              <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                {attributes.author && (
                  <li>
                    <span className="text-black dark:text-white">Autor: </span>
                    {attributes.author}
                  </li>
                )}
                {formattedDate && (
                  <li>
                    <span className="text-black dark:text-white">
                      Publicado em: 
                    </span>{" "}
                    {formattedDate}
                  </li>
                )}
                {attributes.categories?.data?.length > 0 && (
                  <li>
                    <span className="text-black dark:text-white">
                      Categorias:{" "}
                    </span>
                    {attributes.categories.data
                      .map((cat) => cat.attributes.name)
                      .join(", ")}
                  </li>
                )}
              </ul>

              <div className="blog-details prose prose-lg max-w-none dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: attributes.content }} />
              </div>

              <SharePost title={attributes.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetails; 