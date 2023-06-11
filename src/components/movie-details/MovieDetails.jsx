/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { movieService } from "../../services/movieService";
import { useLocation } from "react-router-dom";
import "./MovieDetails.css";
import GenreComponent from "../genre/GenreComponent";
import LanguageComponent from "../language/LanguageComponent";
import ProdComponent from "../prod-compnent/ProdComponent";
import { FiDollarSign } from "react-icons/fi";
const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const { backdrop_path, poster_path } = movieDetails;
  useEffect(() => {
    movieService("/movie/" + location.state.id)
      .then((resp) => {
        setMovieDetails(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const convertNumberToShortFormat = (number) => {
    const units = ["", "K", "M", "B"];
    let unitIndex = 0;

    while (number >= 1000 && unitIndex < units.length - 1) {
      number /= 1000;
      unitIndex++;
    }

    return `${number?.toFixed(1)}${units[unitIndex]}`;
  };
  return (
    <>
      <div
        className="movie-image-backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            backdrop_path !== null ? backdrop_path : poster_path
          })`,
        }}
      ></div>
      <div className="movie-detail-para row">
        <div className="col-md image-col">
          <img
            src={
              "https://image.tmdb.org/t/p/original" + movieDetails?.poster_path
            }
            alt=""
            width={"50%"}
            height={"90%"}
          />
        </div>
        <div className="col-md text-col">
          <h1>{movieDetails?.original_title}</h1>
          <h5>"{movieDetails?.tagline}"</h5>
          <p>{movieDetails?.overview}</p>
          <p>Release Date: {movieDetails?.release_date}</p>
          <p>
            <FiDollarSign />
            {convertNumberToShortFormat(movieDetails?.budget)}
          </p>
          <GenreComponent genres={movieDetails?.genres || []} />
          <LanguageComponent genres={movieDetails?.spoken_languages || []} />
          <ProdComponent prod={movieDetails?.production_companies || []} />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
