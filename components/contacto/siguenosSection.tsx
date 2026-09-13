import { IconBrandInstagram, IconBrandTiktok, IconBrandYoutube, IconBrandGmail } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const SiguenosSection = () => {
  const siguenos = [
    {
      imagen: React.createElement(IconBrandTiktok, { size: 20 }),
      texto: "TikTok",
      href: "https://www.tiktok.com/@mimo4im3",
    },
    {
      imagen: React.createElement(IconBrandInstagram, { size: 20 }),
      texto: "Instagram",
      href: "https://www.instagram.com/mimo.ipn/",
    },
    {
      imagen: React.createElement(IconBrandYoutube, { size: 20 }),
      texto: "YouTube",
      href: "https://www.youtube.com/channel/UCRuje5a2lEG8RfybMDwfxnA",
    },
    {
      imagen: React.createElement(IconBrandGmail, { size: 20 }),
      texto: "Escríbenos",
      href: "mailto:mimoficial4im3@gmail.com",
    }
  ];
  return (
    <section className="bg-base py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-heading text-2xl text-ink">¡Síguenos!</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {siguenos.map((siguenos, index) => (
            <Link key={index} href={siguenos.href} target="_blank" className="no-underline">
              <div className="flex items-center gap-2 bg-white rounded-full shadow-sm px-5 py-3 text-ink hover:bg-secondary transition-colors">
                {siguenos.imagen}
                <span className="font-heading text-sm font-medium">{siguenos.texto}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SiguenosSection;
