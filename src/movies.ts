// movies.ts

interface Movie {
    id: string;
    title: string;
    director: string;
    releaseYear: number;
    genre: string;
    ratings: number[];
}

const movies: Movie[] = [];

export function addMovie(id: string, title: string, director: string, releaseYear: number, genre: string): void {
    movies.push({ id, title, director, releaseYear, genre, ratings: [] });
}

export function rateMovie(id: string, rating: number): void {
    if (rating < 1 || rating > 5) {
        throw new Error("Rating must be between 1 and 5.");
    }
    const movie = movies.find(m => m.id === id);
    if (movie) {
        movie.ratings.push(rating);
    }
}

export function getAverageRating(id: string): number | undefined {
    const movie = movies.find(m => m.id === id);
    if (movie && movie.ratings.length > 0) {
        const sum = movie.ratings.reduce((acc, val) => acc + val, 0);
        return sum / movie.ratings.length;
    }
    return undefined;
}

export function getTopRatedMovies(): Movie[] {
    return [...movies].sort((a, b) => (getAverageRating(b.id) || 0) - (getAverageRating(a.id) || 0));
}

export function getMoviesByGenre(genre: string): Movie[] {
    return movies.filter(m => m.genre.toLowerCase() === genre.toLowerCase());
}

export function getMoviesByDirector(director: string): Movie[] {
    return movies.filter(m => m.director.toLowerCase() === director.toLowerCase());
}

export function searchMoviesBasedOnKeyword(keyword: string): Movie[] {
    return movies.filter(m => m.title.toLowerCase().includes(keyword.toLowerCase()));
}

export function getMovie(id: string): Movie | undefined {
    return movies.find(m => m.id === id);
}

export function removeMovie(id: string): void {
    const index = movies.findIndex(m => m.id === id);
    if (index !== -1) {
        movies.splice(index, 1);
    }
}
