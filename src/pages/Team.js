import React from 'react';
import "./Team.css";
import dreamNest from "../Images/dreamNest.png";
import facebook from "../Images/facebook.png";
import insta from "../Images/insta.png";
import xlogo from "../Images/xlogo.png";
import linkedin from "../Images/linkedIn.png";
import mayank from "../Images/mayank.jpg"
import medha from "../Images/medha.jpg"
import areeb from "../Images/areeb.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      {/* NavBar Start */}
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

      <div className="py-5 team4 containerTeam">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-md-7 text-center">
              <h3 className="mb-3">Experienced & Professional Team</h3>
              <h6 className="subtitle">You can rely on our amazing features list, and also our customer services will be a great experience for you without a doubt and in no time</h6>
            </div>
          </div>
          <div className="row">
            {/* column */}
            <div className="col-lg-4 mb-4">
              {/* Row */}
              <div className="row">
                <div className="col-md-12 text-center">
                  <img src={mayank} alt="wrapkit" className="rounded-circle" />
                </div>
                <div className="col-md-12 text-center my-3">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">Mayank Seth</h5>
                    <h6 className="subtitle mb-3">Property Specialist</h6>
                    <p>You can rely on our amazing features list, and also our customer services will be a great experience.</p>
                    <ul className="list-inline">
                      <li className="list-inline-item"><a href="https://github.com/Mayankseth" className="text-decoration-none d-block px-1"><i className="fa-brands fa-github"></i></a></li>
                      <li className="list-inline-item"><a href="https://www.linkedin.com/in/mayank-seth-0113771a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-decoration-none d-block px-1"><i className="fa-brands fa-linkedin-in"></i></a></li>
                      <li className="list-inline-item"><a href="https://instagram.com/themayankseth?igshid=OGQ5ZDc2ODk2ZA==" className="text-decoration-none d-block px-1"><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Row */}
            </div>
            {/* column */}
            {/* column */}
            <div className="col-lg-4 mb-4">
              {/* Row */}
              <div className="row">
                <div className="col-md-12 text-center">
                  <img src={medha} alt="wrapkit" className="rounded-circle" />
                </div>
                <div className="col-md-12 text-center my-3">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">Medha Jain</h5>
                    <h6 className="subtitle mb-3">Property Specialist</h6>
                    <p>You can rely on our amazing features list, and also our customer services will be a great experience.</p>
                    <ul className="list-inline">
                      <li className="list-inline-item"><a href="https://github.com/medhajain12345" className="text-decoration-none d-block px-1"><i className="fa-brands fa-github"></i></a></li>
                      <li className="list-inline-item"><a href="https://www.linkedin.com/in/medha-jain-73ba3822b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-decoration-none d-block px-1"><i className="fa-brands fa-linkedin-in"></i></a></li>
                      <li className="list-inline-item"><a href="https://instagram.com/medhajain_11?igshid=OGQ5ZDc2ODk2ZA==" className="text-decoration-none d-block px-1"><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* column */}
            {/* column */}
            <div className="col-lg-4 mb-4">
              {/* Row */}
              <div className="row">
                <div className="col-md-12 text-center">
                  <img src={areeb} alt="wrapkit" className="rounded-circle" />
                </div>
                <div className="col-md-12 text-center my-3">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">Md. Areeb Hussain</h5>
                    <h6 className="subtitle mb-3">Property Specialist</h6>
                    <p>You can rely on our amazing features list, and also our customer services will be a great experience.</p>
                    <ul className="list-inline">
                      <li className="list-inline-item"><a href="https://github.com/areeb2002" className="text-decoration-none d-block px-1"><i className="fa-brands fa-github"></i></a></li>
                      <li className="list-inline-item"><a href="https://www.linkedin.com/in/md-areeb-hussain-465447224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-decoration-none d-block px-1"><i className="fa-brands fa-linkedin-in"></i></a></li>
                      <li className="list-inline-item"><a href="https://instagram.com/areeb02_?igshid=MzMyNGUyNmU2YQ==" className="text-decoration-none d-block px-1"><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Row */}
            </div>
            {/* Row */}
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

export default App;
