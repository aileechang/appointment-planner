import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ dataList }) => {
  return (
    <div>
      {dataList.map((item, index) => (
        <Tile 
          key={index}
          name={item.name}
          {...item}
        />
      ))}
    </div>
  );
};
