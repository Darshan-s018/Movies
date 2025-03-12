import * as readline from "readline";
import { addMovie, rateMovie, getAverageRating, getTopRatedMovies, getMoviesByGenre, getMoviesByDirector, searchMoviesBasedOnKeyword, getMovie, removeMovie } from "./movies";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\nMovie Management System");
    console.log("1. Add Movie");
    console.log("2. Rate Movie");
    console.log("3. Get Average Rating");
    console.log("4. Get Top Rated Movies");
    console.log("5. Get Movies by Genre");
    console.log("6. Get Movies by Director");
    console.log("7. Search Movies by Keyword");
    console.log("8. Get Movie Details");
    console.log("9. Remove Movie");
    console.log("10. Exit");
}

function promptUser() {
    showMenu();
    rl.question("Choose an option: ", (option) => {
        switch (option) {
            case "1":
                rl.question("Enter movie details (id,title,director,releaseYear,genre): ", (input) => {
                    const [id, title, director, releaseYear, genre] = input.split(",");
                    addMovie(id, title, director, parseInt(releaseYear), genre);
                    console.log("Movie added successfully!");
                    promptUser();
                });
                break;
            case "2":
                rl.question("Enter movie ID and rating (id,rating): ", (input) => {
                    const [id, rating] = input.split(",");
                    rateMovie(id, parseInt(rating));
                    console.log("Rating added successfully!");
                    promptUser();
                });
                break;
            case "3":
                rl.question("Enter movie ID: ", (id) => {
                    console.log("Average rating:", getAverageRating(id));
                    promptUser();
                });
                break;
            case "4":
                console.log("Top rated movies:", getTopRatedMovies().map(movie => `${movie.title} - ${getAverageRating(movie.id)}`));
                promptUser();
                break;
            case "5":
                rl.question("Enter genre: ", (genre) => {
                    console.log("Movies:", getMoviesByGenre(genre).map(movie => movie.title));
                    promptUser();
                });
                break;
            case "6":
                rl.question("Enter director: ", (director) => {
                    console.log("Movies:", getMoviesByDirector(director).map(movie => movie.title));
                    promptUser();
                });
                break;
            case "7":
                rl.question("Enter keyword: ", (keyword) => {
                    console.log("Movies:", searchMoviesBasedOnKeyword(keyword).map(movie => movie.title));
                    promptUser();
                });
                break;
            case "8":
                rl.question("Enter movie ID: ", (id) => {
                    console.log("Movie Details:", getMovie(id));
                    promptUser();
                });
                break;
            case "9":
                rl.question("Enter movie ID: ", (id) => {
                    removeMovie(id);
                    console.log("Movie removed successfully!");
                    promptUser();
                });
                break;
            case "10":
                rl.close();
                break;
            default:
                console.log("Invalid option. Please try again.");
                promptUser();
        }
    });
}

promptUser();