import React from "react";
import ProfileBase from "./profileBase";


const HeadProfile = () => {
    const profile = [
        {
            imagen: "images/victor.jpg",
            name: "CEO Víctor García"
        },
        {
            imagen: "images/villa.jpg",
            name: "CTO Diego Villa"
        }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
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
