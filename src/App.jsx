import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = "https://omdbapi.com?apikey=fe2f6c44";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("avengers");
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-20 items-center bg-[url('/bgImage.jpg')]">
        <div className="flex flex-col items-center h-[200px] gap-10 bg-black w-[100%] border-gray-700 border-b-8">
          <div className="flex items-center gap-10">
        <h1 className="font-bold text-[40px] text-white">Movie Search Engine</h1>
        <div className="h-[100px]">
        <img className="object-contain h-[100%]" src="movie-icon-6.png" alt="" />
        </div>
        </div>
        <div className="flex gap-5">
          <input className="h-10 w-[400px] rounded-lg"
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
          />
          <button className="text-white h-8 w-8" onClick={() => searchMovies(searchTerm)}><img src="search.png" className="object-cover"></img></button>
        </div>
        </div>
            <div className="">
        {movies?.length > 0 ? (
          <div className="container flex gap-20 flex-wrap justify-center  backdrop-brightness-50">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies found</h2>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
