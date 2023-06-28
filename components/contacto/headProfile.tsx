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
            name: "Carlos Femat",
            correo: "cfemat@ipn.mx"
        },
        {
            imagen: "images/dani.jpg",
            name: "Daniela Meneses",
            correo: "danielameneses5170@gmail.com"
        }
    ];

    return (
        <div>
            <div className="flex flex-row justify-between">
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