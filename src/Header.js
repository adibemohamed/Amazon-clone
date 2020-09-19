import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function Header() {
  const [{ basket, user }, { dispatch }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <h2>
            Like<span>Amazon</span>{" "}
          </h2>
        </div>
      </Link>

      <div className="header__search">
        <div className="header__dropdown">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            All
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          > 

            <MenuItem onClick={handleClose}>All Departments</MenuItem>
            <MenuItem onClick={handleClose}>Arts &amp; Crafts</MenuItem>
            <MenuItem onClick={handleClose}>Automotive</MenuItem>
            <MenuItem onClick={handleClose}>Baby</MenuItem>
            <MenuItem onClick={handleClose}>Beauty &amp; Personal Care</MenuItem>
            <MenuItem onClick={handleClose}>Books</MenuItem>
            <MenuItem onClick={handleClose}>Computers</MenuItem>
            <MenuItem onClick={handleClose}>Digital Music</MenuItem>
            <MenuItem onClick={handleClose}>Electronics</MenuItem>
            <MenuItem onClick={handleClose}>Kindle Store</MenuItem>
            <MenuItem onClick={handleClose}>Prime Video</MenuItem>
            <MenuItem onClick={handleClose}>Women's Fashion</MenuItem>
            <MenuItem onClick={handleClose}>Men's Fashion</MenuItem>
            <MenuItem onClick={handleClose}>Girls' Fashion</MenuItem>
            <MenuItem onClick={handleClose}>Boys' Fashion</MenuItem>
            <MenuItem onClick={handleClose}>Deals</MenuItem>
            <MenuItem onClick={handleClose}>Health &amp; Household</MenuItem>
            <MenuItem onClick={handleClose}>Home &amp; Kitchen</MenuItem>
            <MenuItem onClick={handleClose}>Industrial &amp; Scientific</MenuItem>
            <MenuItem onClick={handleClose}>Luggage</MenuItem>
            <MenuItem onClick={handleClose}>Movies &amp; TV</MenuItem>
            <MenuItem onClick={handleClose}>Music, CDs &amp; Vinyl</MenuItem>
            <MenuItem onClick={handleClose}>Pet Supplies</MenuItem>
            <MenuItem onClick={handleClose}>Software</MenuItem>
            <MenuItem onClick={handleClose}>Sports &amp; Outdoors</MenuItem>
            <MenuItem onClick={handleClose}>Tools &amp; Home Improvement</MenuItem>
            <MenuItem onClick={handleClose}>Toys &amp; Games</MenuItem>
            <MenuItem onClick={handleClose}>Video Games</MenuItem>
          </Menu>
        </div>
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineOne header__basketCount">
              <strong> {basket?.length}</strong>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
