/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import MovieCard from "../card/movieCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main.css";
import MovieNotFound from "../movieNotFound/MovieNotFound";

const Main = ({ movieList }) => {
  return (
    <div>
      <Container>
        {movieList?.length ? (
          <Row>
            {movieList?.map((movie) => {
              return (
                <Col className="Card-col">
                  <MovieCard movieDetails={movie} />
                </Col>
              );
            })}
          </Row>
        ) : (
          <MovieNotFound />
        )}
      </Container>
    </div>
  );
};

export default Main;
