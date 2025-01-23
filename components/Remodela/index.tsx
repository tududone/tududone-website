"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const carouselImages = [
  {
    src: "/images/about/predio-sesimbra.JPG",
    alt: "Prédio em Sesimbra - Vista frontal do edifício em processo de remodelação",
    width: 1200,
    height: 800
  },
  {
    src: "/images/about/image2.jpg",
    alt: "Interior do apartamento após remodelação - Sala de estar moderna e espaçosa",
    width: 1200,
    height: 800
  },
  {
    src: "/images/about/image3.jpg",
    alt: "Detalhes de acabamento - Pormenores de qualidade na remodelação",
    width: 1200,
    height: 800
  }
];

const Remodela = () => {
  return (
    <>
      <div id="remodela" className="-mt-20 h-20"></div>
      {/* <!-- ===== About Two Start ===== --> */}
      <section>
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
                NOSSO PRINCIPAL SERVIÇO
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Remodeção total de {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-violet-200 dark:before:bg-titlebgdark">
                  Apartamentos
                </span>
              </h2>
              <p>
                Na Tududone, transformamos apartamentos antigos ou
                desatualizados em espaços modernos, funcionais e personalizados.
                Oferecemos remodelação completa, cuidando de todas as etapas:
                desde o planeamento e projeto até à execução e entrega final.
                Trabalhamos com foco em qualidade, prazo e transparência,
                assegurando que cada detalhe atenda às necessidades e
                expectativas dos nossos clientes.
              </p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Saiba Mais
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
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                speed={2000}
                autoplay={{
                  delay: 8000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="h-full w-full"
              >
                {carouselImages.map((image, index) => (
                  <SwiperSlide key={index} className="relative h-full w-full">
                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="object-cover transition-transform duration-[9000ms] scale-100 swiper-slide-active:scale-125"
                        priority={index === 0}
                        quality={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default Remodela;
