import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  let [btn, setbtn] = useState(false);

  let showMenu = () => {
    setbtn(true);
  };

  let closeMenu = () => {
    setbtn(false);
  };
  let menuActive = btn ? "active" : "";
  
  let[line, setline] = useState(0);
  
  let scrollline = () =>{
    window.addEventListener('scroll', () =>{
      let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      let updateline = ((window.pageYOffset / scrollHeight) * 100).toFixed();
      setline(line = updateline);
    })
  }
  scrollline();
  return (
    <>
      <div className="banner">
        <h1 className="heading">Get Start Your Favourite Shoping</h1>
        <a href="#" className="buy" title="Buy Now">
          Buy Now
        </a>
        <nav>
          <a href="#">Best Sellers</a>
          <a href="#">Gift Ideas</a>
          <a href="#">New Releases</a>
          <a href="#">Todays Deals</a>
          <a href="#">Customer Service</a>
        </nav>
        <div className="header">
          <ion-icon name="menu-outline" id="menu" onClick={showMenu}></ion-icon>
          <div className="category">
            All Category<ion-icon name="caret-down-outline"></ion-icon>
            <ul>
              <a href="#">Men's Fashion</a>
              <a href="#">Women's Fashion</a>
              <a href="#">Electronics</a>
            </ul>
          </div>
          <div className="search">
            <input type="text" placeholder="Search" title="Search"></input>
            <ion-icon name="search-outline" id="search"></ion-icon>
          </div>
          <div className="languages">
            English<ion-icon name="caret-down-outline"></ion-icon>
            <ul>
              <a href="#">Hindi</a>
              <a href="#">Punjabi</a>
            </ul>
          </div>
          <div className="login">
            <a href="#">
              <ion-icon name="cart"></ion-icon>Cart
            </a>
            <a href="#">
              <ion-icon name="person"></ion-icon>Login
            </a>
          </div>
        </div>
        <div className={`sidemenu ${menuActive}`}>
          <ion-icon name="close" id="close" onClick={closeMenu}></ion-icon>
          <a href="#">Home</a>
          <a href="#">Fashion</a>
          <a href="#">Electronics</a>
          <a href="#">Jewellery</a>
        </div>
      </div>
      <div className="scrollline" style={{width: `${line}%`}}></div>
    </>
  );
};

export default Header;
