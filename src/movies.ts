export interface Movie {
    id: string;
    title: string;
    director: string;
    releaseYear: number;
    genre: string;
    ratings: number[];
}

const movies: Map<string, Movie> = new Map();

export function addMovie(id: string, title: string, director: string, releaseYear: number, genre: string): void {
    movies.set(id, { id, title, director, releaseYear, genre, ratings: [] });
}

export function rateMovie(id: string, rating: number): void {
    if (movies.has(id) && rating >= 1 && rating <= 5) {
        movies.get(id)!.ratings.push(rating);
    }
}

export function getAverageRating(id: string): number | undefined {
    const movie = movies.get(id);
    if (!movie || movie.ratings.length === 0) return undefined;
    return movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length;
}

export function getTopRatedMovies(): Movie[] {
    return Array.from(movies.values()).sort((a, b) => (getAverageRating(b.id) || 0) - (getAverageRating(a.id) || 0));
}

export function getMoviesByGenre(genre: string): Movie[] {
    return Array.from(movies.values()).filter(movie => movie.genre === genre);
}

export function getMoviesByDirector(director: string): Movie[] {
    return Array.from(movies.values()).filter(movie => movie.director === director);
}

export function searchMoviesBasedOnKeyword(keyword: string): Movie[] {
    return Array.from(movies.values()).filter(movie => movie.title.includes(keyword));
}

export function getMovie(id: string): Movie | undefined {
    return movies.get(id);
}

export function removeMovie(id: string): void {
    movies.delete(id);
}