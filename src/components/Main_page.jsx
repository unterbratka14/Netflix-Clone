import { useState } from "react";
import requests from "../Requests";
import { useEffect } from "react";
import axios from "axios";

const Main_page = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []); // Thi hook is used to fetch data from the API only once, otherwise it would make calls infinitely

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }; // The whole function is made to make the description of the movie to be short. If the length of the description is big enough three dots will be placed in order to slice it, and when we click the read more description button we will see the full description, otherwise if the description is short we will automatically see the full description.

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={
            movie && movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
              : ""
          } // This is done to avoid the error message, since at render point our src is looking for the movie.backdrop_path, but we do not have it yet, since useEffect and axios takes time fetch data. That is why the image will be loading when we have all of the data.
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main_page;
// This component is used as a main viewed information page at our Home page. Due to the fact that I have Home page, About page and etc. I use this component to load the overall data.
