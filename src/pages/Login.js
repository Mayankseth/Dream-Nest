import React  from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import "./Login.css";
import dreamNest from "../Images/dreamNest.png";
import facebook from "../Images/facebook.png";
import insta from "../Images/insta.png";
import xlogo from "../Images/xlogo.png";
import linkedin from "../Images/linkedIn.png";
const Login = () => {
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
              <button class="btn">Login</button>
            </a>
          </ul>
        </div>
      </header>
      <div className="bgi">
        <div className="form-container">
          <h2 className="form-title">Login</h2>
          <form id="login-form">
            <input type="text" id="login-username" placeholder="Username" required />
            <div className="password-container">
              <input type="password" id="login-password" placeholder="Password" required />
              <i className="fas fa-eye password-icon" id="password-toggle"></i>
            </div>
            <button id="login-button">Login</button>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Register here</Link>
          </p>
          <p id="message" className="message"></p>
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

export default Login;
