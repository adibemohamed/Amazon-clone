import React from 'react'
import './Header.css'
import 

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://jordantravers.com/wp-content/uploads/2018/10/Amazon-Logo-1024x373.png" />

            <div className="header__search">
                <input
                    type="text"
                    className="header__searchInput" />
                {/* Logo */}
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineTwo">Signin</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                </div>  
                
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineTwo">Returns</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineTwo">Returns</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Orders</span>
                </div>

            </div>
        </div>
    )
}

export default Header
