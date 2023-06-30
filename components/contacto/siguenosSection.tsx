import { IconBrandInstagram, IconBrandTiktok, IconBrandYoutube } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const SiguenosSection = () => {
  const siguenos = [
    {
      imagen: React.createElement(IconBrandTiktok),
      texto: "TikTok",
      href: "https://www.tiktok.com/@mimo4im3",
    },
    {
      imagen: React.createElement(IconBrandInstagram),
      texto: "Instagram",
      href: "https://www.instagram.com/mimo.ipn/",
    },
    {
      imagen: React.createElement(IconBrandYoutube),
      texto: "YouTube",
      href: "https://www.youtube.com/channel/UCRuje5a2lEG8RfybMDwfxnA",
    },
  ];
  return (
    <section>
      <h2 className="text-center">¡SÍGUENOS!</h2>
      <div className="grid grid-cols-3">
        {siguenos.map((siguenos, index) => (
          <div key={index}>
            <div className="flex justify-around">
              <div className="flex items-center justify-start my-10">
                {siguenos.imagen}
                <Link href={siguenos.href} target="_blank" className="no-underline"><h3 className="flex items-center justify-center">{siguenos.texto}</h3></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SiguenosSection;
