import React, { useContext, useEffect, useState } from "react";

import AppContext from "../Context/app";

const UiControlTiles = () => {
  const [controlTiles, setControlTiles] = useState();
  const [activeCardTileId, setActiveCardTileId] = useState();
  const { getTheUiTiles, activeCardType, sort, setActiveCardTile } =
    useContext(AppContext);

  useEffect(() => {
    setControlTiles(getTheUiTiles());
    setActiveCardTileId();
  }, [activeCardType, sort]);

  const handleTileClick = (e) => {
    const tileId = e.target.id;
    const selectedTile = controlTiles[tileId.replace("tile-", "")];
    setActiveCardTileId(tileId.replace("tile-", ""));
    console.log(tileId.replace("tile-", ""));
    setActiveCardTile(selectedTile);
  };

  return (
    <div className='ui-control-tiles'>
      {controlTiles &&
        controlTiles.map(({ type, amount, cost }, tileIdx) => (
          <div
            className={`ui-control-tile${
              activeCardTileId == tileIdx ? " active" : ""
            }`}
            key={tileIdx}
            id={`tile-${tileIdx}`}
            onClick={(e) => handleTileClick(e)}
          >
            <p className='pointer-events-none'>
              {type[0].toUpperCase() + type.substring(1)} {amount} miles
            </p>
            <p className='pointer-events-none'>
              <strong>${cost}</strong>
            </p>
          </div>
        ))}
    </div>
  );
};

export default UiControlTiles;
