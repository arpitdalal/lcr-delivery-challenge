import { createContext, useEffect, useState } from "react";

import { cardData } from "../cardData";

const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [activeCardType, setActiveCardType] = useState("default");
  const [activeCardTile, setActiveCardTile] = useState();
  const [sort, setSort] = useState("ASC");

  useEffect(() => {
    setActiveCardTile();
  }, [activeCardType, sort]);

  const getUniqueCardTypes = () => {
    const cardTypes = cardData.map((card) => card.type);
    getTheUiTiles();
    return cardTypes.filter((val, idx) => cardTypes.indexOf(val) === idx);
  };

  const getTheUiTiles = () => {
    const relevantUiTiles = cardData.filter((card) => {
      if (card.type !== activeCardType) {
        return;
      }
      return card;
    });
    if (sort === 'ASC') {
      relevantUiTiles.sort((a, b) => {
        return a.amount - b.amount;
      });
    } else {
      relevantUiTiles.sort((a, b) => {
        return b.amount - a.amount;
      });
    }
    return relevantUiTiles;
  };

  return (
    <AppContext.Provider
      value={{
        activeCardType,
        setActiveCardType,
        getUniqueCardTypes,
        getTheUiTiles,
        activeCardTile,
        setActiveCardTile,
        sort,
        setSort
      }}
      {...props}
    />
  );
};

export default AppContext;
