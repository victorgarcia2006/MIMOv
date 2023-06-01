import { Inter } from "next/font/google";
import React from "react";
import HeadProfile from "./headProfile";


const inter = Inter({ subsets: ["latin"] });

export default function ContactoHead() {
  return (
    <section>
      <div>
        <div className="w-full h-screen bg-[url('/images/mimo.jpg')] bg-[center_-10rem] bg-cover px-40 flex items-start justify-center text-center">
          <div>
            <h1 className="text-5xl py-10">¡CONTACTANOS!</h1>
            <HeadProfile/>
          </div>
        </div>
      </div>
    </section>
  );
}
