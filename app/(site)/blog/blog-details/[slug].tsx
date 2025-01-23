import axios from "axios";
import Image from "next/image";

const API_URL = "http://localhost:1337/api";

export async function getServerSideProps({ params }: any) {
  const { slug } = params;
  try {
    const response = await axios.get<{ data: { data: any[] } }>(
      `${API_URL}/posts?filters[slug][$eq]=${slug}&populate=author,mainImage`
    );
    const post = response.data.data[0];

    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post: {
          id: post.id,
          title: post.attributes.title,
          body: post.attributes.body,
          mainImage: post.attributes.mainImage?.data?.attributes?.url || "",
          author: post.attributes.author?.data?.attributes || null,
          metadata: post.attributes.metadata,
        },
      },
    };
  } catch (error) {
    console.error("Erro ao buscar os detalhes do post:", error);
    return {
      notFound: true,
    };
  }
}

const PostDetails = ({ post }: any) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      {post.mainImage && (
        <div className="mb-6">
          <Image
            src={post.mainImage}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>
      )}

      <p className="text-gray-600 mb-6">{post.metadata}</p>

      <div className="prose">
        <p>{post.body}</p>
      </div>

      {post.author && (
        <div className="mt-10">
          <h4 className="text-xl font-semibold">Sobre o autor:</h4>
          <p className="mt-2">{post.author.bio}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
