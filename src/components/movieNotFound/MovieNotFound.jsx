import React from "react";
import "./MovieNotFound.css";
import animationData from "../../assets/animation/no-item.json";
import { useLottie } from "lottie-react";

const MovieNotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      height: "500px",
    },
  };
  const { View } = useLottie(defaultOptions);
  return (
    <div className="movie-not-found">
      {View}
      <p className="mnf-text">No Movies Found !</p>
    </div>
  );
};
export default MovieNotFound;
