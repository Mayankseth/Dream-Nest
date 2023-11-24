import React from "react";
import "./Home.css";
import dreamNest from "../Images/dreamNest.png";
import bg2 from "../Images/bg2.jpg";
import background2 from "../Images/background2.jpg";
import img3 from "../Images/img3.jpg";
import img2 from "../Images/img2.jpg";
import facebook from "../Images/facebook.png";
import insta from "../Images/insta.png";
import xlogo from "../Images/xlogo.png";
import linkedin from "../Images/linkedIn.png";
const Home = () => {
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
            <a href="login.html">
              <button class="btn">Login</button>
            </a>
          </ul>
        </div>
      </header>
      <main>
        <div className="container">
          <img src={bg2} alt="" style={{ height: "100vh" }} />
          <div className="dream">
            <h1 className="centered">
              Your gateway to <br /> Real Estate excellence.
            </h1>
            <h4 className="para2">
              Your premier destination for navigating the intricate world of
              real estate.
            </h4>
          </div>
        </div>
        <div className="container2">
          <h2>What are you looking for ?</h2>
          <div className="options">
            <div className="left-home">
              <h1 className="centered1 ">
                <a href="buy.html">BUY</a>
              </h1>
              <div className="temp"></div>
              <img src={background2} alt="" />
            </div>
            <div className="center-home">
              <h1 className="centered3 ">
                <a href="#">RENT</a>
              </h1>
              <div className="temp2"></div>
              <img src={img3} alt="" />
            </div>
            <div className="right-home">
              <h1 className="centered2">
                <a href="#">SELL</a>
              </h1>
              <div className="temp1"></div>
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </main>
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

export default Home;
