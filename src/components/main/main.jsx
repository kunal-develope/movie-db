/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import MovieCard from "../card/movieCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main.css";
import { movieSearch, movieService } from "../../services/movieService";
import MovieNotFound from "../movieNotFound/MovieNotFound";

const Main = () => {
  const [movieList, setMovieList] = useState([]);
  const [tabName, setTabName] = useState("top_rated");

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

  const searchMovieName = (searchKey) => {
    movieSearch(searchKey)
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
        getSearchKey={(searchKey) => {
          console.log(searchKey);
          searchMovieName(searchKey);
        }}
      />
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
