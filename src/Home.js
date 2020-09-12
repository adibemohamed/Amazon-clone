import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt=""
          src="https://www.amazon.fr/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/FromDec-19/FR_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg"
        ></img>

        <div className="home__row">
          <Product
            id={32409234}
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id={8798459}
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg"
            price={49.99}
            rating={5}
          />
          <Product
            id={3433434}
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg"
            price={49.99}
            rating={5}
          />
          <Product
            id={34366677}
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg"
            price={49.99}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={8709845}
            title="Samsung Electronics EVO Select 256GB microSDXC"
            image="https://images-na.ssl-images-amazon.com/images/I/41OPgpci5iL._AC_US160_.jpg"
            price={31.99}
            rating={5}
          />
          <Product
            id={5934850923}
            title="VicTsing MM057 2.4G Wireless MoHP VH240a 23.8-inch Full HD 1080p "
            image="https://m.media-amazon.com/images/I/71MD3ultk-L._AC_UL320_.jpg"
            price={11.99}
            rating={4}
          />
          <Product
            id={23452345}
            title="Xbox Wireless Controller - Red"
            image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg"
            price={61.99}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={87305987}
            title="Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 Full HD IPS Display, "
            image="https://m.media-amazon.com/images/I/71s1LRpaprL._AC_UL320_.jpg"
            price={999.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
