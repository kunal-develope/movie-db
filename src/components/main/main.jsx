import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MovieCard from "../card/movieCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main.css";

const Main = () => {
  const movieList = [
    "movie1",
    "movie2",
    "movie3",
    "movie4",
    "movie5",
    "movie6",
    "movie7",
  ];
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
