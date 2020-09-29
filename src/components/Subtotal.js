import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducers/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h1>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </h1>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      ></CurrencyFormat>
      <button onClick={(e) => history.push("/payment")}>
        Proced to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
