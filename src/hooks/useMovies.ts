import movieDB from '../api/movieDB';
import { useEffect, useState } from 'react';
import { MovieDBNowPlaying, Movie } from '../interfaces/movieInterfaces';

export default function useMovies() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState<Movie[]>([]);

    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        setMovies(resp.data.results);
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return {
        isLoading,
        movies
    }
}   