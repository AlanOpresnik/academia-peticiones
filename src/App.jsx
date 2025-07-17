import { useState, useEffect } from "react";
import CharacterCard from "./characterCard/CharacterCard";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const api = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    const obtenerPersonajes = async () => {
      const res = await fetch(`${api}`).then((res) => res.json());
      if (!res.results) {
        console.log("ERROR al hacer la peticion de personajes");
        return;
      }

      setPersonajes(res.results);
    };
    obtenerPersonajes();
  }, []);

  console.log(personajes);

  return (
    <div className="bg-black/70  gap-12">
      <div>
        <h2 className="text-6xl h-screen flex justify-center items-center text-white font-bold">Rick And Morty APP</h2>
      </div>
      <div className="flex gap-12 flex-wrap">
        {personajes && personajes.length > 0
          ? personajes.map((personaje) => (
              <div key={personaje}>
                <CharacterCard personaje={personaje} />
              </div>
            ))
          : "No hay personajes"}
      </div>
    </div>
  );
}

export default App;
