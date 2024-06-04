import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Replace with your actual data fetching logic
    fetch("http://localhost:4000/movies")
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error("Error fetching movies:", error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <div>
          {movies.map(movie => (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} info={movie.info} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
