import { useEffect } from "react";
import { UPCOMING_MOVIE_URL, options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  const fetchUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIE_URL, options);
    const json = await data.json();
    dispatch(addUpcomingMovie(json?.results));
  };
};
export default useUpcomingMovies;
