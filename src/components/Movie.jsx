import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useState } from "react";

const Movie = ({ item }) => {
  // eslint-disable-next-line no-unused-vars
  const [like, setLike] = useState(false); // This state is used to like the movies and then store them in the favorite list
  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img
          className="w-full h-auto block"
          src={
            item && item.backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
              : ""
          }
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {item?.title}
          </p>
          <p>
            {like ? (
              <MdFavorite className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <MdFavoriteBorder className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
