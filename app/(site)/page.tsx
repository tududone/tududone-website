import Hero from "@/components/Hero";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Remodela from "@/components/Remodela";
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Tududone",
            "image": "https://tududone.com/images/about/predio-sesimbra.JPG",
            "@id": "https://tududone.com",
            "url": "https://tududone.com",
            "telephone": "+351 910 165 360",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Conde de Sandomil 1A",
              "addressLocality": "Almada",
              "postalCode": "2805-244",
              "addressCountry": "PT"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 38.6749,
              "longitude": -9.1573
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/tududone",
              "https://www.instagram.com/tududone"
            ],
            "priceRange": "€€€",
            "description": "Transformamos apartamentos antigos em espaços modernos e funcionais. Especialistas em remodelação total de apartamentos em Almada, Portugal."
          })
        }}
      />
      <main>
        <Hero />
        <About />
        <Remodela />
        <FAQ />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
