import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movieDetails }) => {
  const navigate = useNavigate();
  const openMovieDetails = (id) => {
    navigate("/movie-details", { state: { id } });
  };
  return (
    <div>
      <Card
        style={{ width: "18rem" }}
        onClick={(e) => openMovieDetails(movieDetails.id)}
      >
        <Card.Img
          variant="top"
          src={
            "https://image.tmdb.org/t/p/original" + movieDetails?.poster_path
          }
        />
        <Card.Body>
          <Card.Title>{movieDetails?.original_title}</Card.Title>
          <Card.Text>{movieDetails?.vote_average}</Card.Text>
          <Button variant="primary">{movieDetails.release_date}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
