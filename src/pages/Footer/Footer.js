import React from "react";
import instagram from "../../assets/images/icon-instagram.png";
import facebook from "../../assets/images/Icon-Facebook.png";
import linkedin from "../../assets/images/Icon-Linkedin.png";
import twitter from "../../assets/images/Icon-Twitter.png";
import send from "../../assets/images/icon-send.png";
import frame2 from "../../assets/images/Frame2.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-style">
          <div className="nav-items">
            <a href="#" className="nav-item-title">
              Exclusive
            </a>
            <a href="#" className="nav-item">
              <strong>Subscribe</strong>
            </a>
            <a href="#" className="nav-item">
              Get 10% off your first order
            </a>
            <input type="text" placeholder="Enter your email" />
            <img className="icon" src={send} alt="icon-send" />
          </div>
          <div className="nav-items">
            <a href="#" className="nav-item-title">
              Support
            </a>
            <a href="#" className="nav-item">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </a>
            <a href="#" className="nav-item">
              exclusive@gmail.com
            </a>
            <a href="#" className="nav-item">
              +88015-88888-9999
            </a>
          </div>
          <div className="nav-items">
            <a href="#" className="nav-item-title">
              Account
            </a>
            <a href="#" className="nav-item">
              My Account
            </a>
            <a href="#" className="nav-item">
              Login / Register
            </a>
            <a href="#" className="nav-item">
              Cart
            </a>
            <a href="#" className="nav-item">
              Wishlist
            </a>
            <a href="#" className="nav-item">
              Shop
            </a>
          </div>
          <div className="nav-items">
            <a href="#" className="nav-item-title">
              Quick Link
            </a>
            <a href="#" className="nav-item">
              Privacy Policy
            </a>
            <a href="#" className="nav-item">
              Terms Of Use
            </a>
            <a href="#" className="nav-item">
              FAQ
            </a>
            <a href="#" className="nav-item">
              Contact
            </a>
          </div>
          <div className="nav-items">
            <a href="#" className="nav-item-title">
              Download App
            </a>
            <img src={frame2} alt="Frame" />
            <div className="images">
              <img src={facebook} alt="Icon-Facebook" />
              <img src={instagram} alt="icon-instagram" />
              <img src={twitter} alt="Icon-Twitter" />
              <img src={linkedin} alt="Icon-Linkedin" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
