import React from "react"
import { Tile } from "../tile/Tile"

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, index) => {
        // se destructura el objeto para que solo se muestre el nombre y el resto de datos se muestre en la descripcion.
        const { name, ...description } = tile;
        return (
          <Tile key={index} name={name} description={description} />
        );
      }
      )}
    </div>
  );
};