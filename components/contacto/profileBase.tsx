import React from "react";
import { Avatar } from "@mantine/core";


interface ProfileBaseProps {
  imagen: string;
  name: string;
  correo: string;
}

function ProfileBase({ imagen, name, correo }: ProfileBaseProps) {
  return (
    <div className="flex flex-col items-center m-10">
      <Avatar src={imagen} size={144} radius={144}></Avatar>
      <div>
        <h3 className="text-white">{name}</h3>
        <a href={`mailto:${correo}`} className="text-white">{correo}</a>
      </div>
    </div>
  );
}

export default ProfileBase;
