// creds: https://medium.com/@divyakoneti0001/how-to-create-an-autoplay-or-infinite-carousel-in-react-d9f9bff11048

import React from "react";
import "../globals.css";
import data from "../../lib/en.json";

export default function AutoplayCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {Object.keys(data.selftags).map((detailKey) => {
            return (
            <div className="carousel-card">
              {data.selftags[detailKey].toUpperCase()}
            </div>
            );
        })}
        {Object.keys(data.selftags).map((detailKey) => {
          return (
            <div className="carousel-card">
              {data.selftags[detailKey].toUpperCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
}