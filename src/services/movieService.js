const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTRhMjRhNWM0NjEyOTRjZWJiZGFlYTcxOGY3NWVkOSIsInN1YiI6IjY0NmNhODQ3ZDE4NTcyMDE2MTkzNTE1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zi0v-Ch742Axssum3MvZ27GTx6hUY6SA55GrJXYRd88",
  },
};
const movieService = async (quiry) => {
  let response;
  await fetch(
    "https://api.themoviedb.org/3" +
      quiry +
      "?api_key=da4a24a5c461294cebbdaea718f75ed9",
    options
  )
    .then((response) => response.json())
    .then((json) => {
      response = json;
    })
    .catch((error) => {
      response = error;
      console.error(error);
    });

  return response;
};

const movieSearch = async (quiry) => {
  let response;

  await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      quiry +
      "&?api_key=da4a24a5c461294cebbdaea718f75ed9",
    options
  )
    .then((response) => response.json())
    .then((json) => {
      response = json;
    })
    .catch((error) => {
      response = error;
      console.error(error);
    });

  return response;
};
export { movieService, movieSearch };
