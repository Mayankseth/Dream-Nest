import React from 'react';
import "./Buy.css";
import dreamNest from "../Images/dreamNest.png";
import facebook from "../Images/facebook.png";
import insta from "../Images/insta.png";
import xlogo from "../Images/xlogo.png";
import linkedin from "../Images/linkedIn.png";
import bg from "../Images/bg.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <body>
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
      <div className="sort">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search SearchIcon"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
        <form className="form-inline d-flex justify-content-center md-form form-sm active-pink active-pink-2 mt-2">
          <i className="fas fa-search" aria-hidden="true"></i>
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Location"
            aria-label="Search"
          />
        </form>

        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle price-btn"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Price Range
          </button>
          <ul className="dropdown-menu dropDownItem" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item abc" href="#">
                Upto 50 Lac{' '}
              </a>
            </li>
            <li>
              <a className="dropdown-item abc" href="#">
                50 L - 1 Cr
              </a>
            </li>
            <li>
              <a className="dropdown-item abc" href="#">
                1Cr - 2Cr
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown prop-type">
          <button
            className="btn btn-primary dropdown-toggle price-btn"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            TYPE
          </button>
          <ul className="dropdown-menu dropDownItem" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item abc" href="#">
                House{' '}
              </a>
            </li>
            <li>
              <a className="dropdown-item abc" href="#">
                Flat
              </a>
            </li>
            <li>
              <a className="dropdown-item abc" href="#">
                Villa
              </a>
            </li>
            <li>
              <a className="dropdown-item abc" href="#">
                Land
              </a>
            </li>
          </ul>
        </div>

        <div className="dropdown more">
          <button
            className="btn btn-primary dropdown-toggle price-btn"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            MORE
          </button>
          <ul className="dropdown-menu dropDownItem" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item abc" href="#">
                Rent{' '}
              </a>
            </li>
            <li>
              <a className="dropdown-item abc" href="#">
                Sell
              </a>
            </li>
          </ul>
        </div>
        <div className="cards">
          <div className="cards-1">
            <div className="card card-1" style={{ width: '18rem' }}>
              <img className="card-img-top" src={bg} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="product.html" className="btn btn-primary buyBtn">
                  <p>BUY</p>
                </a>
              </div>
            </div>
            {/* ... Repeat similar card structures */}
          </div>
          <div className="cards-2">
            {/* ... Repeat similar card structures */}
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
    </body>
  );
};

export default App;
