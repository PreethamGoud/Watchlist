import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard movie={{ title: "RRR", release_date: "2022" }} />
      <MovieCard movie={{ title: "Barbie", release_date: "2023" }} />
      <MovieCard movie={{ title: "Gentlemen", release_date: "2020" }} />
    </>
  );
}

export default App;
