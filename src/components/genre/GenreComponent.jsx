import React from "react";
import "./GenreComponent.css";
const GenreComponent = ({ genres }) => {
  return (
    <div className="genres-div">
      <div>Genres</div>
      {genres.map((genre) => {
        return <p className="genre-text">{genre?.name}</p>;
      })}
    </div>
  );
};
export default GenreComponent;
