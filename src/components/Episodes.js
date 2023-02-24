import React from "react";
import "./Episodes.css";

const Episodes = ({ data, click }) => {
  return (
    <div className="episode" onClick={() => click(data)}>
      <div className="epsiode-picture">
        <img alt="imageURL" src={`${data?.thumbnailUrl}`}></img>
      </div>
      <h4 className="episode-name">{data?.title}</h4>
    </div>
  );
};

export default Episodes;
