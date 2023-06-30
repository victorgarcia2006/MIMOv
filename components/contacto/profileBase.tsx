import React from "react";
import { Avatar } from "@mantine/core";


interface ProfileBaseProps {
  imagen: string;
  name: string;
  correo: string;
}

function ProfileBase({ imagen, name, correo }: ProfileBaseProps) {
  return (
    <div className="flex flex-col items-center m-10 ">
      <Avatar src={imagen} size={100} radius={120} className=""></Avatar>
      <div>
        <h3 className="text-white max-md:text-xl">{name}</h3>
        <a href={`mailto:${correo}`} className="text-white max-md:text-xs">{correo}</a>
      </div>
    </div>
  );
}

export default ProfileBase;
