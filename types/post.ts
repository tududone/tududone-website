export interface Post {
  id: number;
  documentId: string;
  attributes: {
    title: string;
    content: Array<{
      type: string;
      children: Array<{
        type: string;
        text: string;
      }>;
    }>;
    excerpt: string;
    slug: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    publicationDateNew: string;
    cover: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            thumbnail: ImageFormat;
            small: ImageFormat;
            medium: ImageFormat;
            large: ImageFormat;
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: any;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
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

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
} 