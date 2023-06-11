import React from "react";
import "./LanguageComponent.css";
const LanguageComponent = ({ genres }) => {
  return (
    <div className="genres-div">
      <div>Languages Spoken</div>
      {genres.map((genre) => {
        return <p className="genre-text">{genre?.name}</p>;
      })}
    </div>
  );
};
export default LanguageComponent;
