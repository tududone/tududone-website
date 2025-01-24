import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Tududone Remodelações",
  description: "Dicas, tendências e inspirações para remodelação de apartamentos em Almada e região.",
  openGraph: {
    title: "Blog - Tududone Remodelações",
    description: "Dicas, tendências e inspirações para remodelação de apartamentos em Almada e região.",
    url: "https://tududone.com/blog",
    siteName: "Tududone",
    locale: "pt-PT",
    type: "website",
  },
};

const BlogPage = () => {
  return (
    <>
      <section className="relative z-10 pt-32 pb-16 md:pb-20 lg:pt-36 lg:pb-28">
        <div className="container relative">
          <Blog />
        </div>
      </section>
    </>
  );
};

export default BlogPage;
