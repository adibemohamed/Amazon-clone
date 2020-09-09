import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';

import {useStateValue} from './StateProvider';


function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    var totalPrice = 0; 
    basket.map(item => {
        totalPrice += item.price;
        console.log("price: ", item.price, "      total: ", totalPrice)
    })
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of homework */}
                            Subtotal ({basket.length} items):
                        <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={totalPrice} // part of homework
                displayType={"text"}
                thousandSeparator={true} 
                prefix={"$"}
            >
            </CurrencyFormat>
            <button>Proced to Checkout</button>
        </div>
    )
}

export default Subtotal
