import { useSelector } from "react-redux";
import MovieList from "../browse/MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovieName, gptMovies } = gpt;
  if (!gptMovieName) return null;
  return (
    <div className="mt-4 md:mt-10   ">
      {gptMovieName.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={gptMovies[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
