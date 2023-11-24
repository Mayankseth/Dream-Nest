import React from 'react';
import "./Contact.css";
import dreamNest from "../Images/dreamNest.png";
import facebook from "../Images/facebook.png";
import insta from "../Images/insta.png";
import xlogo from "../Images/xlogo.png";
import linkedin from "../Images/linkedIn.png";

const App = () => {
  return (
    <div>
      <header>
        <div id="nav1">
          <a href="home.html"><img src={dreamNest} alt="" /></a>
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
              <button class="btn">Login</button>
            </a>
          </ul>
        </div>
      </header>
      <div id="contact">
        <form action="#">
          <ul>
            <h2>Contact Us</h2>
            <li>
              <input type="text" name="name" id="name" placeholder="First Name" />
              <input type="text" name="name" id="name" placeholder="Last Name" />
              <input type="text" name="phone" id="phone" placeholder="Phone No." />
              <input type="email" name="email" id="email" placeholder="Email Address" />
            </li>
            <li>
              <textarea name="message" id="message" placeholder="Elaborate Your Concern"></textarea>
            </li>
            <li>
              <input type="submit" value="Submit" className="btn" id="submit" />
            </li>
          </ul>
        </form>
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

export default App;
