import React from "react";
import "./Jewellery.css";

const Jewellery = (props) => {
  return (
    <>
      <div className="jewellery">
        <h1 className="heading">{props.JewelleryName}</h1>
        <h1 className="price">Start Price {props.JewelleryPrice}</h1>
        <img src={props.img} alt="electronic"></img>
        <div className="info_btns">
          <a href="#" className="buy">
            Buy Now
          </a>
          <a href="#" className="more">
            See More
          </a>
        </div>
      </div>
    </>
  );
};

export default Jewellery;
