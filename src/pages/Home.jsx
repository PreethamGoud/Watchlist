import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "Dune", release_date: "2021" },
    { id: 2, title: "Avatar", release_date: "2009" },
    { id: 3, title: "The Avengers", release_date: "2012" },
  ];

  const handleSearch = () => {};

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
