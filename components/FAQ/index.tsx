"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, HTMLAttributes } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";

interface MotionDivProps extends HTMLAttributes<HTMLDivElement> {
  variants: {
    hidden: {
      opacity: number;
      x: number;
    };
    visible: {
      opacity: number;
      x: number;
    };
  };
  initial: string;
  whileInView: string;
  transition: { duration: number; delay: number };
  viewport: { once: boolean };
}

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  const leftMotionProps: MotionDivProps = {
    variants: {
      hidden: {
        opacity: 0,
        x: -20,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },
    initial: "hidden",
    whileInView: "visible",
    transition: { duration: 1, delay: 0.1 },
    viewport: { once: true },
    className: "animate_left w-full md:w-[45%] lg:w-1/2"
  };

  const rightMotionProps: MotionDivProps = {
    variants: {
      hidden: {
        opacity: 0,
        x: 20,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },
    initial: "hidden",
    whileInView: "visible",
    transition: { duration: 1, delay: 0.1 },
    viewport: { once: true },
    className: "animate_right relative mx-auto w-full md:w-[45%] lg:w-1/2"
  };

  return (
    <>
      {/* <!-- ===== FAQ Start ===== --> */}
      <section className="mt-20 overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="absolute -bottom-16 -z-1 h-full w-full">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center xl:gap-32.5">
            <motion.div {...(leftMotionProps as any)}>
              <h2 className="mb-10 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Perguntas Frequentes
              </h2>
              <div>
                {faqData.map((faq, key) => (
                  <FAQItem
                    key={key}
                    faqData={{ ...faq, activeFaq, handleFaqToggle }}
                  />
                ))}
              </div>
            </motion.div>
            <motion.div {...(rightMotionProps as any)}>
              <Image
                src="/images/faq/faq-light.svg"
                alt="FAQ"
                className="dark:hidden"
                width={800}
                height={600}
              />
              <Image
                src="/images/faq/faq-dark.svg"
                alt="FAQ"
                className="hidden dark:block"
                width={800}
                height={600}
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== FAQ End ===== --> */}
    </>
  );
};

export default FAQ;
