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
            imagen: "images/femat.jpg",
            name: "MTI. Carlos Femat"
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
        <div>
            <div className="flex flex-row justify-between max-2xl:grid max-2xl:grid-cols-2 max-md:gap-x-0 max-2xl:gap-x-60 max-2xl:justify-items-center ">
                {profile.map((profile, index) => (
                    <div key={index}>
                        <ProfileBase
                        imagen={profile.imagen}
                        name={profile.name}
                    />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeadProfile;