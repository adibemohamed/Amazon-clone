import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
      // remove item from the basket
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
      })
  }

  return (
    <div className="chackoutProduct">
      <img className="chackoutProduct__image" src={image} />

      <div className="chackoutProduct__info">
        <p className="chackoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="chackoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
