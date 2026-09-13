import React from "react";
import { Avatar } from "@mantine/core";


interface ProfileBaseProps {
  imagen: string;
  name: string;
}

function ProfileBase({ imagen, name }: ProfileBaseProps) {
  return (
    <div className="flex flex-col items-center gap-3 bg-white rounded-2xl shadow-sm p-5">
      <Avatar src={imagen} size={80} radius={999} />
      <h3 className="font-heading text-sm text-ink text-center">{name}</h3>
    </div>
  );
}

export default ProfileBase;
