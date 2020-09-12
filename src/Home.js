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
            id={1234}
            title="TApple AirPods Pro"
            image="https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_UL320_.jpg"
            price={46.35}
            rating={5}
          />
          <Product
            id={1235}
            title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
            image="https://m.media-amazon.com/images/I/71k3fJh5EwL._AC_UL320_.jpg"
            price={949.99}
            rating={5}
          />
          <Product
            id={1236}
            title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case with Black Sport Band"
            image="https://m.media-amazon.com/images/I/71fwbMm1NBL._AC_UL320_.jpg"
            price={41.34}
            rating={5}
          />
          <Product
            id={1237}
            title="Magic Keyboard for 12.9-inch iPad Pro (4th Generation) - US English"
            image="https://m.media-amazon.com/images/I/71vh06cKISL._AC_UL320_.jpg"
            price={329.98}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={1238}
            title="Apple TV 4K (32GB, Latest Model)"
            image="https://m.media-amazon.com/images/I/51Y-Dulc3bL._AC_UL320_.jpg"
            price={9255.00}
            rating={5}
          />
          <Product
            id={1239}
            title="Seneo Wireless Charger, 3 in 1 Wireless Charging Station for Apple Watch, AirPods Pro/2, Detachable and Magnetic..."
            image="https://m.media-amazon.com/images/I/716YRwe5nrL._AC_UL320_.jpg"
            price={25.99}
            rating={4}
          />
          <Product
            id={1230}
            title="Apple iPad mini Wi-Fi 256GB - Space Gray 5th Gen (2019)"
            image="https://m.media-amazon.com/images/I/71Ha06XS-VL._AC_UL320_.jpg"
            price={499.99}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={1638}
            title="Microsoft Surface Studio, Windows 10 Pro (64), Intel:I7-6820HQ/CI7, 2.7 GHz, NVIDIA-GEFORCEGTX965M/2GB, 1 TB, "
            image="https://m.media-amazon.com/images/I/51cv1881dzL._AC_UL320_.jpg"
            price={2398.66}
            rating={5}
          />
          <Product
            id={1639}
            title="Apple 16`` MacBook Pro with Touch Bar, 9th-Gen 8-Core Intel i9 2.3GHz, 32GB RAM, 1TB SSD, AMD Radeon Pro 5500M 4GB, "
            image="https://m.media-amazon.com/images/I/61qNHbx9LDL._AC_UL320_.jpg"
            price={2999.00}
            rating={5}
          />
          <Product
            id={1630}
            title="Apple Watch Series 5 (GPS, 44mm) - Gold Aluminum Case with Pink Sport Band with AppleCare+ Bundle"
            image="https://m.media-amazon.com/images/I/61tjld02v9L._AC_UL320_.jpg"
            price={374.00}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={1645}
            title="Apple Mac Pro Desktop Computer, 3.5GHz 8-Core Intel Xeon W, 32GB Memory, 256GB SSD, Radeon Pro 580X 8GB, "
            image="https://m.media-amazon.com/images/I/71XeBfvi-CL._AC_UL320_.jpg"
            price={5999.00}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
