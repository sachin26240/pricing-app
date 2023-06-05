import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../stickySocial.css";

export const MainPage = () => {
  const backgroundImagePath = "/background.png";

  const divStyle = {
    backgroundImage: `url(${backgroundImagePath})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
  };

  const mainImgStyle = {
    borderTopRightRadius: "40px",
    borderBottomLeftRadius: "40px",
    width: "80%",
  };

  // const mediaStyle = {
  //   position: "sticky",
  //   top: 0,
  //   right: 0,
  //   width: "80px",
  // };
  return (
    <div className="container my-3 bg-image" style={divStyle}>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h1 className="title">We Price Right</h1>
            <h4>Discover our flexible pricing options for every business</h4>
            <div>
              <button className="btn btn-outline-secondary mx-2" type="submit">
                  Login
                </button>
                <button className="btn btn-primary mx-2" type="submit">
                Sign Up
              </button>
            </div>
            
          </div>
        </div>
        <div className="col-md-6 image-container centered position-relative">
          <img
            className="mx-auto d-block img-fluid"
            src="/home.jpg"
            alt="Image"
            style={mainImgStyle}
          />
          <img
            src="/zigzag1.svg"
            alt="Vector Image"
            className="vector-image img-fluid position-absolute bottom-0 start-0"
            style={{
              height: "40%",
            }}
          />
        </div>
      </div>
      <div className="icon-bar">
        <a href="#" className="facebook">
          <FaFacebook />
        </a>
        <a href="#" className="twitter">
          <FaTwitter />
        </a>
        <a href="#" className="google">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};
