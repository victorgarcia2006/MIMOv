import React from "react";
import ProfileBase from "./profileBase";


const HeadProfile = () => {
    const profile = [
        {
            imagen: "images/camila.jpg",
            name: "Camila Jaramillo"
        },
        {
            imagen: "images/victor.jpg",
            name: "Víctor García"
        },
        {
            imagen: "images/dani.jpg",
            name: "Daniela Meneses"
        },
        {
            imagen: "images/villa.jpg",
            name: "Diego Villa"
        }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {profile.map((profile, index) => (
                <ProfileBase
                    key={index}
                    imagen={profile.imagen}
                    name={profile.name}
                />
            ))}
        </div>
    );
};

export default HeadProfile;
