import React from 'react'
import './Subtotal'
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
    return (
        <div className="Subtotal">
            <CurrencyFormat
                renderText={(text) => (
                    <>
                        <p>
                            Subtotal ({0} items):
                        <strong>0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            >

            </CurrencyFormat>
        </div>
    )
}

export default Subtotal
