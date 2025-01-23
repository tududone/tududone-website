"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-10 pt-10 md:pt-20 xl:pt-24">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-8">
            {/* Área do texto com largura menor */}
            <div className="md:w-2/5">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                TRANSFORMANDO LARES NA MARGEM SUL
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Renove Seu Ambiente {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-purple-300 dark:before:bg-titlebgdark">
                  Conosco
                </span>
              </h1>
              <p>
                Descubra o potencial da sua casa! Solicite agora um orçamento
                personalizado e inicie sua jornada de transformação
              </p>

              <div className="mt-8 flex items-center gap-6 xl:mt-7">
                <Link
                  href="/support"
                  aria-label="get started button"
                  className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  Entre em contacto
                </Link>
              </div>
            </div>

            {/* Área do SVG com largura maior */}
            <div className="animate_right hidden md:w-3/5 lg:block">
              <div className="relative h-full w-full">
                {/*<Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />*/}
                <div className="flex h-[700px] w-full items-center">
                  <div className="relative h-full w-full">
                    <Image
                      className="dark:hidden"
                      src="/images/hero/hero2.svg"
                      alt="Hero"
                      fill
                      style={{ objectFit: "contain" }} // Garante que o SVG mantenha suas proporções
                    />
                    <Image
                      className="hidden dark:block"
                      src="/images/hero/hero2.svg"
                      alt="Hero"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
