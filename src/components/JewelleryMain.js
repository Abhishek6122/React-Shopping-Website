import React, { useState } from "react";
import "./Jewellery.css";
import Jewellery from "./Jewellery";
import necklace1 from "./images/necklace1.png";
import necklace2 from "./images/necklace2.png";
import necklace3 from "./images/necklace3.png";
import earrings1 from "./images/earrings1.png";
import earrings2 from "./images/earrings2.png";
import earrings3 from "./images/earrings3.png";

const JewelleryMain = () => {
  let [controls, setcontrols] = useState(0);

  let nextbtn = () => {
    setcontrols((controls -= 100));
    if (controls === -200) {
      setcontrols((controls = 0));
    }
  };
  let backbtn = () => {
    setcontrols((controls += 100));
    if (controls === 100) {
      setcontrols((controls = -100));
    }
  };
  let imgSlide = {
    transform: `translateX(${controls}%)`,
  };
  return (
    <>
      <h1 className="jewellery_heading">Jewellery</h1>
      <div className="jewellery_main">
        <div className="main" style={imgSlide}>
          <Jewellery img = {necklace1} JewelleryPrice = '₹499' JewelleryName = 'Necklace'/>
          <Jewellery img = {necklace2} JewelleryPrice = '₹399' JewelleryName = 'Necklace'/>
          <Jewellery img = {necklace3} JewelleryPrice = '₹199' JewelleryName = 'Necklace'/>
        </div>
        <div className="main" style={imgSlide}>
          <Jewellery img = {earrings1} JewelleryPrice = '₹199' JewelleryName = 'EarRings'/>
          <Jewellery img = {earrings2} JewelleryPrice = '₹249' JewelleryName = 'EarRings'/>
          <Jewellery img = {earrings3} JewelleryPrice = '₹339' JewelleryName = 'EarRings'/>
        </div>
      </div>
      <div className="controls">
        <ion-icon name="chevron-back" onClick={backbtn}></ion-icon>
        <ion-icon name="chevron-forward" onClick={nextbtn}></ion-icon>
      </div>
    </>
  );
};

export default JewelleryMain;
