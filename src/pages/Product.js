
import React from 'react';
import "./Product.css";
import dreamNest from "../Images/dreamNest.png";
import facebook from "../Images/facebook.png";
import insta from "../Images/insta.png";
import xlogo from "../Images/xlogo.png";
import linkedin from "../Images/linkedIn.png";
import pimg1 from "../Images/pimg1.jpg"
import pimg2 from "../Images/pimg2.jpg"
import pimg3 from "../Images/pimg3.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = () => {
  return (
    <div>
      <header>
        <div id="nav1">
          <img src={dreamNest} alt="" />
        </div>
        <div id="nav2">
          <ul className="home-nav">
            <a href="home.html">
              <li>Home</li>
            </a>
            <a href="#">
              <li>News</li>
            </a>
            <a href="teams.html">
              <li>Team</li>
            </a>
            <a href="contact.html">
              <li>Contact</li>
            </a>
            <a href="login.html">
              <button className="btn">Login</button>
            </a>
          </ul>
        </div>
      </header>
      <section className="left">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
          <div className="carousel-inner slideShowImage">
            <div className="carousel-item active" id="imageShow">
              <img src={pimg1} alt="wrapkit" />
            </div>
            <div className="carousel-item" id="imageShow">
              <img src={pimg2} alt="wrapkit" />
            </div>
            <div className="carousel-item" id="imageShow">
              <img src={pimg3} alt="wrapkit" />
            </div>
          </div>
        </div>
      </section>
      <div className="propertyNameRow" id="propertyNameRow">
        <h1 className="propertyName" id="propertyName">
          Galaxy Apartment
        </h1>
      </div>
      <div className="propertyAddressRow" id="propertyAddressRow">
        <div className="propertyContainer">
          <h3>
            <span className="address">
              <span>Flat No. 35 Galaxy Apartment Andheri East</span>
            </span>
            <p>Mumbai</p>
          </h3>
        </div>
      </div>
      <div id="information">
        <div className="row">
          <div className="infoContainer">
            <ul className="info">
              <li className="coloum">
                <div className="infoInnerContainer">
                  <p className="priceLable">Price/Rent</p>
                  <p className="priceDetail">Rs. 1,00,00,000</p>
                </div>
              </li>
              <li className="coloum">
                <div className="infoInnerContainer">
                  <p className="bhkLable">Bedrooms</p>
                  <p className="bhkDetail">3 BHK</p>
                </div>
              </li>
              <li className="coloum">
                <div className="infoInnerContainer">
                  <p className="squareFeetLable">Square Feet</p>
                  <p className="squareFeetDetail">1500 sq ft</p>
                </div>
              </li>
              <li className="coloum">
                <div className="infoInnerContainer">
                  <p className="furnishedLable">Status</p>
                  <p className="furnishedDetail">Furnished</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <div className="copy">
          <h3>Copyright @ Dream Nest</h3>
        </div>
        <div className="contacticon">
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
          <img src={xlogo} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Product;
