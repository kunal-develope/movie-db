import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/notfound/NotFound";
import MovieDetails from "./components/movie-details/MovieDetails";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import { movieSearch, movieService } from "./services/movieService";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [tabName, setTabName] = useState("top_rated");

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="App">
      <Header
        getTabName={(value) => {
          setTabName(value);
        }}
        getSearchKey={(searchKey) => {
          searchMovieName(searchKey);
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Main movieList={movieList} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/movie-details" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
