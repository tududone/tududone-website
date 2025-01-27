"use client";

import Image from "next/image";

const About = () => {
  return (
    <>
      {/* Ponto de âncora invisível */}
      <div id="about-anchor" className="-mt-20 h-20"></div>
      {/* <!-- ===== About Start ===== --> */}
      <section id="about" className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <div className="animate_left relative mx-auto hidden md:block md:w-1/2">
              <div className="relative w-full h-[526.5px]">
                <Image
                  src="/images/about/about-light-01.svg"
                  alt="Sobre"
                  className="dark:hidden"
                  fill
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/images/about/about-dark-01.svg"
                  alt="Sobre"
                  className="hidden dark:block"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="animate_right md:w-1/2">
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Sobre a Tududone
              </h2>
              <p className="mb-6">
                A Tududone é uma empresa especializada em remodelação de apartamentos em Almada, Portugal. 
                Nossa missão é transformar espaços antigos em ambientes modernos e funcionais, sempre 
                priorizando a qualidade e a satisfação dos nossos clientes.
              </p>
              <p className="mb-6">
                Com uma equipe altamente qualificada e anos de experiência no mercado, oferecemos 
                soluções completas em remodelação, desde o planejamento até a execução final do projeto.
              </p>
              <p>
                Nosso compromisso é entregar projetos dentro do prazo e orçamento estabelecidos, 
                garantindo a qualidade em cada detalhe e proporcionando uma experiência tranquila 
                e satisfatória aos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      {/*<section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Launch Your SaaS Fast
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Packed with All Essential {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  Integrations
                </span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                ultricies lacus non fermentum ultrices. Fusce consectetur le.
              </p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Know More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>*/}
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
