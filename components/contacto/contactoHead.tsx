import React from "react";
import HeadProfile from "./headProfile";

export default function ContactoHead() {
  return (
    <>
      <section className="bg-primary-light pt-32 pb-14 md:pt-40 md:pb-16 text-center">
        <h1 className="font-heading text-4xl md:text-5xl text-ink">¡Contáctanos!</h1>
      </section>
      <section className="bg-base py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <HeadProfile />
        </div>
      </section>
    </>
  );
}
