"use client";
import React, { useEffect, useState } from "react";
import { Post } from "@/types/post";
import BlogItem from "./BlogItem";
import SectionTitle from '@/components/Common/SectionTitle';
import { getStrapiURL } from '@/app/config/api';

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<any>(null);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const apiUrl = getStrapiURL('/posts?populate=*');
      console.log("Buscando posts em:", apiUrl);
      
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data?.data || !Array.isArray(data.data)) {
        console.error("Formato de dados inválido:", data);
        throw new Error('Formato de dados inválido');
      }

      console.log(`Encontrados ${data.data.length} posts`);
      setPosts(data.data);
      setError(null);
    } catch (err) {
      console.error('Erro ao carregar posts:', err);
      setError(`Erro ao carregar os posts: ${err instanceof Error ? err.message : 'Erro desconhecido'}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      console.log("Posts atualizados:", posts.map(post => ({
        id: post.id,
        title: post.attributes?.title,
        slug: post.attributes?.slug
      })));
    }
  }, [posts]);

  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Nosso Blog"
          paragraph="Confira nossas últimas publicações sobre remodelação e design de interiores."
          center
        />

        {isLoading && (
          <div className="text-center">
            <p>Conectando ao servidor Strapi...</p>
            <p className="text-sm text-gray-500 mt-2">Aguarde enquanto carregamos os posts...</p>
          </div>
        )}

        {error && (
          <div className="text-center text-red-600">
            <p>{error}</p>
            <ul className="list-disc list-inside">
              <li>O servidor Strapi está rodando em http://localhost:1337</li>
              <li>As permissões estão configuradas corretamente em Settings {'->'} Roles {'->'} Public</li>
              <li>Existem posts publicados no Strapi</li>
            </ul>
            {debugInfo && (
              <div className="mt-4 p-4 bg-gray-100 rounded text-left">
                <p className="font-bold">Informações de Debug:</p>
                <pre className="text-xs overflow-auto mt-2">
                  {JSON.stringify(debugInfo, null, 2)}
                </pre>
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {posts.length === 0 && !isLoading && (
            <div className="col-span-full text-center text-gray-500">
              Nenhum post encontrado. Crie alguns posts no painel do Strapi.
            </div>
          )}
          {posts.map((post) => (
            <div key={post.id} className="w-full">
              <BlogItem blog={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
