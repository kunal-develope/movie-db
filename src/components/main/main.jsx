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
  const [tabName, setTabName] = useState("top_rated");

  useEffect(() => {
    if (!movieList.length) getData();
  }, [movieList, tabName]);

  useEffect(() => {
    getData();
  }, [tabName]);
  const getData = async () => {
    movieService("/movie/" + tabName)
      .then((resp) => {
        setMovieList(resp?.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Header
        getTabName={(value) => {
          console.log(value);
          setTabName(value);
        }}
      />
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
