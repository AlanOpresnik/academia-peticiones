import React from "react";

export default function CharacterCard({ personaje }) {
  return (
    <div className="flex gap-2 text-white bg-gray-700 p-4">
      <div>
        <img
          src={personaje.image}
          alt={personaje.name}
          width={250}
          height={250}
        />
      </div>
      <div>
        <h4 className="font-bold text-2xl">{personaje.name}</h4>
        <div className="relative flex gap-2 items-center">
          <div
            className={` h-4 w-4 rounded-full ${
              personaje.status === "Alive"
                ? "bg-green-500"
                : personaje.status === "unknown"
                ? "bg-yellow-400"
                : "bg-red-500"
            }`}
          ></div>
          <span>{personaje.status}</span>-<span>{personaje.species}</span>
        </div>
        <p>Ultima ubicacion conocida</p>
        <p>{personaje.location.name}</p>
        <p>Primera vez visto en:</p>
        <p>{personaje.origin.name}</p>
      </div>
    </div>
  );
}
