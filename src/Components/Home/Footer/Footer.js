import React from "react";
import "./Footer.css";
import logo from "../../../Images/Logo/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="container-fluid bg-grey py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="logo-part">
                    <img src={logo} className="w-50 logo-footer" alt="logo" />
                    <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
                    <p>
                      Use this tool as test data for an automated system or find
                      your next pen
                    </p>
                  </div>
                </div>
                <div className="col-md-6 px-4">
                  <h6> About Company</h6>
                  <p>But horizontal lines can only be a full pixel high.</p>
                  <a href="#moreInfo" className="btn-footer">
                    {" "}
                    More Info{" "}
                  </a>{" "}
                  <br />
                  <a href="#contactUs" className="btn-footer">
                    {" "}
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 px-4">
                  <h6> Help us</h6>
                  <div className="row ">
                    <div className="col-md-6">
                      <ul>
                        <li>
                          {" "}
                          <a href="#home"> Home</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#about"> About</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#service"> Service</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#team"> Team</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#help"> Help</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#contact"> Contact</a>{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 px-4">
                      <ul>
                        <li>
                          {" "}
                          <a href="#cab"> Cab Faciliy</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#fax"> Fax</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#terms"> Terms</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#policy"> Policy</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#refunds"> Refunds</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#paypal"> Paypal</a>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <h6> Newsletter</h6>

                  <p>That's technology limitation of LCD monitors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
