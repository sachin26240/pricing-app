import React from "react";
// import DataTable from 'react-data-table-component';
// import { useState, useEffect } from "react";

export const Table = ({ tableData }) => {
  const mainImgStyle = {
    borderTopRightRadius: "40px",
    borderBottomLeftRadius: "40px",
    width: "80%",
  };

  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="table-responsive-sm border">
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">SEAT</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {tableData.data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.price}</td>
                    <td>{item.seat_no}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6 my-3 d-flex align-items-center">
          {/* <img
            src="/zigzag4.png"
            alt="Image"
            className="img-fluid position-absolute top-0 start-15"
            style={{
              height: "60%",
            }}
          /> */}
          {/* <div
            style={{
              position: "absolute",
              bottom: 30,
              left: 10,
              width: "30%",
              height: "40%",
              backgroundColor: "rgba(185, 242, 242, 1)",
              zIndex: 1,
              borderRadius: "15px 15px 15px 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              
              display: 'inline-block'
            }}
          >
            <div style={{ maxWidth: '90%', padding: '20px', color: 'white' }}>
                Seat Availability<br />
                Report: 2023-05-18
                <hr />
                <button className="btn btn-sm btn-success">submit</button>
            </div>
            
          </div>
           */}
          <div className="image-container centered position-relative">
            <div
              className="position-absolute start-10 w-30 bg-dark d-flex align-items-center justify-content-center"
              style={{
                borderRadius: "15px 15px 15px 15px",
                bottom: 30,
                height: "40%",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h4 className="text-white">Seat Availability</h4>
                    <button
                      className="btn btn-sm text-white btn-success"
                      type="submit"
                    >
                      Report: 23/05/2023
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="mx-auto d-block img-fluid"
              src="/table.jpg"
              alt="Image"
              style={mainImgStyle}
            />
            <img
              src="/zigzag3.png"
              alt="Image"
              className="img-fluid position-absolute bottom-0 end-0"
              style={{
                height: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
