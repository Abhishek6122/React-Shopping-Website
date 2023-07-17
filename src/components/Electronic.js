import React, { useState } from "react";
import "./Electronic.css";
import electronic1 from "./images/laptop.png";
import electronic2 from "./images/pc.png";
import electronic3 from "./images/mobiles.png";
import mobile1 from "./images/iphone14.png";
import mobile2 from "./images/samsungs23ultra.png";
import mobile3 from "./images/iphone14pro.png";
import laptop1 from "./images/laptop2.png";
import laptop2 from "./images/laptop3.png";
import laptop3 from "./images/laptop4.png";

const Electronic = () => {
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
      <h1 className="electronic_heading">Electronics</h1>
      <div className="electronic_main">
        <div className="main" style={imgSlide}>
          <div className="electronic">
            <h1 className="heading">Laptops</h1>
            <h1 className="price">Start Price ₹25,000</h1>
            <img src={electronic1} alt="electronic"></img>
            <div className="info_btns">
              <a href="#" className="buy">
                Buy Now
              </a>
              <a href="#" className="more">
                See More
              </a>
            </div>
          </div>
          <div className="electronic">
            <h1 className="heading">PC</h1>
            <h1 className="price">Start Price ₹30,000</h1>
            <img src={electronic2} alt="electronic"></img>
            <div className="info_btns">
              <a href="#" className="buy">
                Buy Now
              </a>
              <a href="#" className="more">
                See More
              </a>
            </div>
          </div>
          <div className="electronic">
            <h1 className="heading">Mobiles</h1>
            <h1 className="price">Start Price ₹50,000</h1>
            <img src={electronic3} alt="electronic"></img>
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
          <div className="electronic">
            <h1 className="heading">Iphone 14</h1>
            <h1 className="price">Start Price ₹59,990</h1>
            <img src={mobile1} alt="electronic"></img>
            <div className="info_btns">
              <a href="#" className="buy">
                Buy Now
              </a>
              <a href="#" className="more">
                See More
              </a>
            </div>
          </div>
          <div className="electronic">
            <h1 className="heading">Samsung Galaxy s23</h1>
            <h1 className="price">Start Price ₹119,990</h1>
            <img src={mobile2} alt="electronic"></img>
            <div className="info_btns">
              <a href="#" className="buy">
                Buy Now
              </a>
              <a href="#" className="more">
                See More
              </a>
            </div>
          </div>
          <div className="electronic">
            <h1 className="heading">Iphone 14 Pro Plus</h1>
            <h1 className="price">Start Price ₹129,990</h1>
            <img src={mobile3} alt="electronic"></img>
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
          <div className="electronic">
            <h1 className="heading">HP Victus</h1>
            <h1 className="price">Start Price ₹59,499</h1>
            <img src={laptop1} alt="electronic"></img>
            <div className="info_btns">
              <a href="#" className="buy">
                Buy Now
              </a>
              <a href="#" className="more">
                See More
              </a>
            </div>
          </div>
          <div className="electronic">
            <h1 className="heading">Asus Rog Strix G16</h1>
            <h1 className="price">Start Price ₹99,990</h1>
            <img src={laptop2} alt="electronic"></img>
            <div className="info_btns">
              <a href="#" className="buy">
                Buy Now
              </a>
              <a href="#" className="more">
                See More
              </a>
            </div>
          </div>
          <div className="electronic">
            <h1 className="heading">Apple Macbook Air</h1>
            <h1 className="price">Start Price ₹89,999</h1>
            <img src={laptop3} alt="electronic"></img>
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

export default Electronic;

