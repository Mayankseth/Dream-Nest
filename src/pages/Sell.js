import React from 'react';
import "./Sell.css";
import dreamNest from "../Images/dreamNest.png";
import facebook from "../Images/facebook.png";
import insta from "../Images/insta.png";
import xlogo from "../Images/xlogo.png";
import linkedin from "../Images/linkedIn.png";
const SellPropertyForm = () => {
  return (
    <div>
      <header>
        <div id="nav1">
          <a href="home.html">
            <img src={dreamNest} alt="" />
          </a>
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
          </ul>
        </div>
      </header>

      <section id="sell">
        <div id="sell-box">
          <form action="#">
            <ul>
              <h2>Sell Your Property</h2>
              <li>
                <input type="text" name="name" id="name" placeholder="Seller Name" />

                <input type="text" name="phone" id="phone" placeholder="Phone No." />
                <input type="email" name="email" id="email" placeholder="Email Address" />
                <input type="text" name="pname" id="pname" placeholder="Property Name" />
                <input type="text" name="address" id="address" placeholder="Property Address" />
                <input type="text" name="price" id="price" placeholder="Property Price" />

                <div className="dropdown">
                  <button className="dropbtn">Property Type</button>
                  <div className="dropdown-content">
                    <a href="#">Bunglow</a>
                    <a href="#">Land</a>
                    <a href="#">Villa</a>
                    <a href="#">Flat</a>
                    <a href="#">House</a>
                  </div>
                </div>

                <p className="lable">Drop the image of your property </p>
                <input type="file" name="image" id="image" placeholder="Drop the image of the property" accept="image/png , image/jpeg" />
              </li>

              <li>
                <textarea name="message" id="message" placeholder="Description"></textarea>
              </li>
              <li>
                <input type="submit" value="Submit" className="btn1" id="submit" />
              </li>
            </ul>
          </form>
        </div>
      </section>

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

export default SellPropertyForm;
