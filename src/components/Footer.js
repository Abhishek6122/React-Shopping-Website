import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <h1 className="heading">Eflyer</h1>
        <form className="subscribe">
          <input type="email" placeholder="Your Email" required></input>
          <input type="submit" value="SUBSCRIBE"></input>
        </form>
        <div className="footer_links">
          <a href="#">Best Deals</a>
          <a href="#">Gift Ideas</a>
          <a href="#">New Releases</a>
          <a href="#">Today's Deals</a>
          <a href="#">Customer Service</a>
        </div>
        <h1 className="helpline">Help Line Number: +11800 1200 1200</h1>
        <h1 className="rights">@ 2045 All Rights Reserved</h1>
      </footer>
    </>
  );
};

export default Footer;
