import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentação - Tududone",
  description: "Documentação da Tududone sobre remodelação de apartamentos",
  // other metadata
};

const DocsPage = () => {
  return (
    <>
      <section className="pb-20 pt-35">
        <div className="container">
          <div className="prose mx-auto max-w-[1000px] dark:prose-invert">
            <h1>Documentação</h1>
            <p>
              Bem-vindo à documentação da Tududone. Aqui você encontrará informações detalhadas sobre nossos serviços de remodelação.
            </p>
            
            <h2>Serviços</h2>
            <p>
              A Tududone oferece serviços completos de remodelação de apartamentos, incluindo:
            </p>
            <ul>
              <li>Remodelação total</li>
              <li>Design de interiores</li>
              <li>Gestão de projetos</li>
            </ul>

            <h2>Processo</h2>
            <p>
              Nosso processo de trabalho é dividido em etapas claras:
            </p>
            <ol>
              <li>Avaliação inicial e orçamento</li>
              <li>Planejamento detalhado</li>
              <li>Execução do projeto</li>
              <li>Controle de qualidade</li>
              <li>Entrega final</li>
            </ol>

            <h2>Garantias</h2>
            <p>
              Todos os nossos serviços incluem:
            </p>
            <ul>
              <li>Garantia de 5 anos nos serviços</li>
              <li>Acompanhamento pós-obra</li>
              <li>Suporte técnico</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocsPage; 