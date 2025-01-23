import axios from "axios";

const API_URL = "http://localhost:1337/api";

interface Author {
  name: string;
  image: string;
  bio?: string;
}

interface Post {
  id: number;
  title: string;
  slug: string;
  metadata: string;
  body: string;
  mainImage: string;
  author?: Author;
}

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(`${API_URL}/posts?populate=author,mainImage`);
    return (response.data as { data: any[] }).data.map((post: any) => ({
      id: post.id,
      title: post.attributes.title,
      slug: post.attributes.slug,
      metadata: post.attributes.metadata,
      body: post.attributes.body,
      mainImage: post.attributes.mainImage?.data?.attributes?.url || "",
      author: post.attributes.author?.data
        ? {
            name: post.attributes.author.data.attributes.nameAuthor,
            image: post.attributes.author.data.attributes.image?.data?.attributes?.url || "",
            bio: post.attributes.author.data.attributes.bio,
          }
        : undefined,
    }));
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return [];
  }
};
