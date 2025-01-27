"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import emailjs from '@emailjs/browser';

// Inicializa o EmailJS
emailjs.init('w3jVfCBK18DHUjvXJ');

const Footer = () => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      alert('Por favor, insira seu email.');
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        'service_tududone',
        'template_tududone',
        {
          from_name: 'Newsletter Subscriber',
          to_name: 'Geral Tududone',
          reply_to: email,
          subject: 'Nova Inscrição na Newsletter',
          message: `Novo pedido de inscrição na newsletter com o email: ${email}`,
        },
        'w3jVfCBK18DHUjvXJ'
      );
      
      alert('Inscrição realizada com sucesso!');
      setEmail('');
    } catch (error) {
      console.error('Erro ao se inscrever:', error);
      alert('Erro ao realizar inscrição. Por favor, tente novamente.');
    }
    setLoading(false);
  };

  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Footer Top */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <div className="w-1/2 lg:w-1/4">
                <a href="/" className="mb-8 inline-block">
                  <img src="/images/logo/logo-light.svg" alt="Logo" className="hidden dark:block" />
                  <img src="/images/logo/logo-dark.svg" alt="Logo" className="dark:hidden" />
                </a>

                <p className="mb-10 text-base font-medium leading-relaxed text-body-color">
                  Transformamos apartamentos antigos em espaços modernos e funcionais.
                </p>

                <div className="flex items-center gap-5">
                  <a href="https://www.facebook.com/tududone" target="_blank" rel="nofollow noreferrer" className="hover:text-primary">
                    <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.503 6.798c-.241-1.282-1.132-2.173-2.414-2.414C18.404 4 12 4 12 4s-6.404 0-8.089.384c-1.282.241-2.173 1.132-2.414 2.414C1.113 8.483 1.113 12 1.113 12s0 3.517.384 5.202c.241 1.282 1.132 2.173 2.414 2.414C5.596 20 12 20 12 20s6.404 0 8.089-.384c1.282-.241 2.173-1.132 2.414-2.414.384-1.685.384-5.202.384-5.202s0-3.517-.384-5.202zM9.719 15.149V8.851l5.396 3.149-5.396 3.149z" />
                    </svg>
                  </a>

                  <a href="https://www.instagram.com/tududone" target="_blank" rel="nofollow noreferrer" className="hover:text-primary">
                    <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="w-1/2 lg:w-2/12">
                <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                  Links Rápidos
                </h4>

                <ul>
                  <li>
                    <a href="/" className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary">
                      Início
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary">
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a href="#remodela" className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary">
                      Remodelação
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-3/12">
                <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                  Contatos
                </h4>
                <p className="mb-4 text-base font-medium text-body-color">
                  <strong>Endereço:</strong><br />
                  Rua Conde de Sandomil 1A<br />
                  2805-244 Almada<br />
                  Portugal
                </p>
                <p className="mb-4 text-base font-medium text-body-color">
                  <strong>Telefone:</strong><br />
                  <a href="tel:+351910165360" className="hover:text-primary">
                    +351 910 165 360
                  </a>
                </p>
                <p className="mb-4 text-base font-medium text-body-color">
                  <strong>Email:</strong><br />
                  <a href="mailto:geral@tududone.com" className="hover:text-primary">
                    geral@tududone.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* Footer Top */}

          {/* Footer Bottom */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
            <div>
              <ul className="flex items-center gap-8">
                <li>
                  <a href="/privacy-policy" className="text-base text-body-color hover:text-primary">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-base text-body-color hover:text-primary">
                    Termos de Serviço
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base text-body-color">
                &copy; {new Date().getFullYear()} Tududone. Todos os direitos reservados
              </p>
            </div>
          </div>
          {/* Footer Bottom */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
