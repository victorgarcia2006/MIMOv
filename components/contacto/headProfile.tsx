import React from "react";
import ProfileBase from "./profileBase";


const HeadProfile = () => {
    const profile = [
        {
            imagen: "images/camila.jpg",
            name: "Camila Jaramillo",
            correo: "camila.jaramillo.carrillo@gmail.com"
        },
        {
            imagen: "images/victor.jpg",
            name: "Víctor García",
            correo: "exporjames12@outlook.com"
        },
        {
            imagen: "images/femat.jpg",
            name: "MTI. Carlos Femat",
            correo: "cfemat@ipn.mx"
        },
        {
            imagen: "images/dani.jpg",
            name: "Daniela Meneses",
            correo: "danielameneses5170@gmail.com"
        },
        {
            imagen: "images/villa.jpg",
            name: "Diego Villa",
            correo: "dvillad06@gmail.com"
        }
    ];

    return (
        <div>
            <div className="flex flex-row justify-between max-2xl:grid max-2xl:grid-cols-3 max-md:gap-x-52 max-2xl:gap-x-60 max-2xl:justify-items-center">
                {profile.map((profile, index) => (
                    <div key={index}>
                        <ProfileBase
                        imagen={profile.imagen}
                        name={profile.name}
                        correo={profile.correo}
                    />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeadProfile;