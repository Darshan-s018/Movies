import { addMovie, rateMovie, getAverageRating, getTopRatedMovies, getMoviesByGenre, getMoviesByDirector, searchMoviesBasedOnKeyword, getMovie, removeMovie } from "./movies";

// Adding movies
addMovie("1", "Inception", "Christopher Nolan", 2010, "Sci-Fi");
addMovie("2", "Interstellar", "Christopher Nolan", 2014, "Sci-Fi");
addMovie("3", "The Dark Knight", "Christopher Nolan", 2008, "Action");

// Rating movies
rateMovie("1", 5);
rateMovie("1", 4);
rateMovie("2", 5);

// Fetching movies
console.log(getAverageRating("1")); 
console.log(getTopRatedMovies());
console.log(getMoviesByGenre("Sci-Fi"));
console.log(getMoviesByDirector("Christopher Nolan"));
console.log(searchMoviesBasedOnKeyword("Dark"));
console.log(getMovie("1"));

// Removing a movie
removeMovie("3");
console.log(getMovie("3")); // Should return undefined
