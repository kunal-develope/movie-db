import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MovieCard from "../card/movieCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main.css";

const Main = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (!movieList.length) getData();
  }, [movieList]);

  const getData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTRhMjRhNWM0NjEyOTRjZWJiZGFlYTcxOGY3NWVkOSIsInN1YiI6IjY0NmNhODQ3ZDE4NTcyMDE2MTkzNTE1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zi0v-Ch742Axssum3MvZ27GTx6hUY6SA55GrJXYRd88",
      },
    };
    await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=da4a24a5c461294cebbdaea718f75ed9",
      options
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setMovieList(json?.results);
      })
      .catch((error) => console.error(error));
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
