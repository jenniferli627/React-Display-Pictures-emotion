import React, { useState } from "react";
import "./SelectedBanner.css";

const SelectedBanner = ({ selectedEpsiode }) => {
  return (
    <div className="banner-component">
      <img
        className="banner-image"
        alt="episode img"
        src={`${selectedEpsiode?.url}`}
      ></img>
      <h5 className="banner-title">{selectedEpsiode?.title}</h5>
    </div>
  );
};

export default SelectedBanner;
