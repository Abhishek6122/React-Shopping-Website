import React, { useState } from "react";
import "./Fashion.css";
import clothes1 from "./images/tshirt.png";
import clothes2 from "./images/dress-shirt-img.png";
import clothes3 from "./images/women-clothes-img.png";
import saree1 from "./images/saree1.png";
import lehenga from "./images/lehenga.png";
import suit1 from "./images/suit1.png";
import tshirt1 from "./images/tshirt1.png";
import tshirt2 from "./images/tshirt2.png";
import shirt1 from "./images/shirt3.png";

const Fashion = () => {
  let [controls, setcontrols] = useState(0);

  let nextbtn = () => {
    setcontrols((controls -= 100));
    if (controls === -300) {
      setcontrols((controls = 0));
    }
  };
  let backbtn = () => {
    setcontrols((controls += 100));
    if (controls === 100) {
      setcontrols((controls = -200));
    }
  };
  let imgSlide = {
    transform: `translateX(${controls}%)`,
  };

  return (
    <>
      <h1 className="fashion_heading">Men & Women Fashion</h1>
      <div className="fashion_main">
        <div className="main" style={imgSlide}>
          <div className="clothes">
            <h1 className="heading">Men T-Shirt</h1>
            <h1 className="price">Start Price ₹499</h1>
            <img src={clothes1} alt="clothes"></img>
            <div className="info_btns">
              <a href="#" className="buy">
                Buy Now
              </a>
              <a href="#" className="more">
                See More
              </a>
            </div>
          </div>
          <div className="clothes">
            <h1 className="heading">Men Shirt</h1>
            <h1 className="price">Start Price ₹599</h1>
            <img src={clothes2} alt="clothes"></img>
            <div className="info_btns">
              <a href="#" className="buy">
                Buy Now
              </a>
              <a href="#" className="more">
                See More
              </a>
            </div>
          </div>
          <div className="clothes">
            <h1 className="heading">Women Scart</h1>
            <h1 className="price">Start Price ₹799</h1>
            <img src={clothes3} alt="clothes"></img>
            <div className="info_btns">
              <a href="#" className="buy">
                Buy Now
              </a>
              <a href="#" className="more">
                See More
              </a>
            </div>
          </div>
        </div>
        <div className="main" style={imgSlide}>
          <div className="clothes">
            <h1 className="heading">Mens T-Shirt</h1>
            <h1 className="price">Start Price ₹699</h1>
            <img src={shirt1} alt="clothes"></img>
            <div className="info_btns">
              <a href="#" className="buy">
                Buy Now
              </a>
              <a href="#" className="more">
                See More
              </a>
            </div>
          </div>
          <div className="clothes">
            <h1 className="heading">Men T-Shirt</h1>
            <h1 className="price">Start Price ₹499</h1>
            <img src={tshirt1} alt="clothes"></img>
            <div className="info_btns">
              <a href="#" className="buy">
                Buy Now
              </a>
              <a href="#" className="more">
                See More
              </a>
            </div>
          </div>
          <div className="clothes">
            <h1 className="heading">Men T-Shirt</h1>
            <h1 className="price">Start Price ₹599</h1>
            <img src={tshirt2} alt="clothes"></img>
            <div className="info_btns">
              <a href="#" className="buy">
                Buy Now
              </a>
              <a href="#" className="more">
                See More
              </a>
            </div>
          </div>
        </div>
        <div className="main" style={imgSlide}>
          <div className="clothes">
            <h1 className="heading">Womens Saree</h1>
            <h1 className="price">Start Price ₹1559</h1>
            <img src={saree1} alt="clothes"></img>
            <div className="info_btns">
              <a href="#" className="buy">
                Buy Now
              </a>
              <a href="#" className="more">
                See More
              </a>
            </div>
          </div>
          <div className="clothes">
            <h1 className="heading">Womens Suit</h1>
            <h1 className="price">Start Price ₹1199</h1>
            <img src={suit1} alt="clothes"></img>
            <div className="info_btns">
              <a href="#" className="buy">
                Buy Now
              </a>
              <a href="#" className="more">
                See More
              </a>
            </div>
          </div>
          <div className="clothes">
            <h1 className="heading">Womens Lehenga</h1>
            <h1 className="price">Start Price ₹1899</h1>
            <img src={lehenga} alt="clothes"></img>
            <div className="info_btns">
              <a href="#" className="buy">
                Buy Now
              </a>
              <a href="#" className="more">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="controls">
        <ion-icon name="chevron-back" onClick={backbtn}></ion-icon>
        <ion-icon name="chevron-forward" onClick={nextbtn}></ion-icon>
      </div>
    </>
  );
};

export default Fashion;