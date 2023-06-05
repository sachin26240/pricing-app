import React from "react";

export const Graph = (props) => {
  const mainImgStyle = {
    borderTopRightRadius: "40px",
    borderBottomLeftRadius: "40px",
    width: "80%",
  };
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-6 image-container centered position-relative">
        <img
            src="/zigzag4.png"
            alt="Image"
            className="img-fluid position-absolute top-0 start-15"
            style={{
              height: "60%",
            }}
          />
          <img
            className="mx-auto d-block img-fluid"
            src="/graph1.png"
            alt="Image"
            style={mainImgStyle}
          />
          <img
            src="/zigzag2.png"
            alt="Image"
            className="img-fluid position-absolute bottom-0 end-0"
            style={{
              height: "50%",
            }}
          />
        </div>
        <div className="col-md-6 d-flex align-items-center">
            Sachin
        </div>
      </div>
    </div>
  );
};
