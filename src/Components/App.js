import { useContext } from "react";

import HeaderText from "./HeaderText";
import UiControl from "./UiControl";
import OrderSummary from "./OrderSummary";
import UiControlTiles from "./UiControlTiles";
import AppContext from "../Context/app";
import PaymentForm from "./PaymentForm";

const App = () => {
  const { activeCardTile, activeCardType } = useContext(AppContext);

  return (
    <div className='app'>
      <HeaderText />
      <UiControl />
      <UiControlTiles />
      {activeCardTile && activeCardType ? (
        <div className='grid-2'>
          <div>
            <PaymentForm />
          </div>
          <OrderSummary />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
