import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MovieCard from "../card/movieCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main.css";
import movieService from "../../services/movieService";

const Main = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (!movieList.length) getData();
  }, [movieList]);

  const getData = async () => {
    movieService("/movie/top_rated")
      .then((resp) => {
        setMovieList(resp?.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Header />
      <Container>
        <Row>
          {movieList.map((movie) => {
            return (
              <Col className="Card-col">
                <MovieCard movieDetails={movie} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Main;
