import React, { useEffect, useState, useContext } from "react";

import AppContext from "../Context/app";

const UiControl = () => {
  const [uniqueCardTypes, setUniqueCardTypes] = useState([]);

  const {
    getTheUiTiles,
    getUniqueCardTypes,
    setActiveCardType,
    activeCardType,
    sort,
    setSort,
  } = useContext(AppContext);

  useEffect(() => {
    setUniqueCardTypes(getUniqueCardTypes());
  }, []);

  const handleChange = (e) => {
    setActiveCardType(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    getTheUiTiles(e.target.value);
  };

  return (
    <div className='ui-control'>
      <select
        class='type-select'
        value={activeCardType}
        defaultValue='default'
        onChange={(e) => handleChange(e)}
      >
        <option disabled value='default'>
          Select Type
        </option>
        ;
        {uniqueCardTypes.map((cardType, cardTypeIdx) => (
          <option value={cardType} key={cardTypeIdx}>
            {cardType}
          </option>
        ))}
      </select>

      <select class='sort-select' value={sort} onChange={(e) => handleSort(e)}>
        <option value='ascending' value='ASC'>
          Lowest - Highest
        </option>
        <option value='ascending' value='DESC'>
          Highest - Lowest
        </option>
      </select>
    </div>
  );
};

export default UiControl;
