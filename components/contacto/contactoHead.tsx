import React from "react";
import HeadProfile from "./headProfile";


export default function ContactoHead() {
  return (
    <section>
      <div>
        <div className="w-full h-screen bg-fixed bg-[url('/images/mimo.jpg')] bg-[center_-10rem] bg-cover px-40 flex items-start justify-center text-center max-2xl:bg-[center_top_0rem] max-md:h-[1000px]">
          <div>
            <h1 className="text-5xl py-10 max-xl:py-0">¡CONTACTANOS!</h1>
            <HeadProfile/>
          </div>
        </div>
      </div>
    </section>
  );
}
