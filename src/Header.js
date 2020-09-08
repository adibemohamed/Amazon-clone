import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';



function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://jordantravers.com/wp-content/uploads/2018/10/Amazon-Logo-1024x373.png" />

            <div className="header__search">
                <input
                    type="text"
                    className="header__searchInput" />
                <SearchIcon className="header__serachIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Signin</span>
                    <span className="header__optionLineThree">Hello Guest</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

            </div>
        </div>
    )
}

export default Header
