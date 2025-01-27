"use client";

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
            <div className="animate_left relative mx-auto block aspect-[588/526.5] md:w-1/2">
              <Swiper
                modules={[EffectFade, Autoplay]}
                effect="fade"
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                className="h-full w-full"
              >
                {carouselImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="animate_right md:w-1/2">
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Remodelação Total de Apartamentos em Almada
              </h2>
              <p>
                Transformamos apartamentos antigos em espaços modernos e funcionais, com foco na qualidade e atenção aos detalhes. Nossa equipe especializada cuida de todo o processo, desde o planejamento até a entrega final.
              </p>
              <p className="mt-4">
                Oferecemos serviços completos de remodelação, incluindo:
              </p>
              <ul className="mt-4 list-inside list-disc">
                <li>Demolição e reconstrução</li>
                <li>Instalações elétricas e hidráulicas</li>
                <li>Revestimentos e acabamentos</li>
                <li>Carpintaria e marcenaria</li>
                <li>Pintura e decoração</li>
              </ul>
              <p className="mt-4">
                Nosso compromisso é entregar projetos de alta qualidade, respeitando prazos e orçamentos estabelecidos.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default Remodela;
