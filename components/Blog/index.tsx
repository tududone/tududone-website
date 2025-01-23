"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import { fetchPosts } from "@/app/context/fetchPosts";

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]); // Estado local para armazenar os posts
  const [loading, setLoading] = useState(true); // Estado para indicar carregamento

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts(); // Função que busca os posts do Strapi
        setPosts(data as any[]); // Atualiza o estado com os posts carregados
      } catch (error) {
        console.error("Erro ao carregar os posts:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    loadPosts(); // Chama a função ao montar o componente
  }, []);

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NOSSO BLOG`,
              subtitle: `Novidades e Dicas`,
              description: `Fique por dentro das tendências de remodelação e construção. Dicas práticas, novidades do setor e histórias de projetos bem-sucedidos para inspirar a transformação do seu espaço.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        {loading ? (
          <p className="text-center">Carregando posts...</p> // Indica carregamento
        ) : (
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {posts.length > 0 ? (
              posts.map((blog, key) => (
                <BlogItem blog={blog} key={key} />
              ))
            ) : (
              <p className="text-center">Nenhum post encontrado.</p> // Caso não existam posts
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
