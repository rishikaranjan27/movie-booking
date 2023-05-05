import { useEffect, useState } from 'react'
import axios from 'axios'
import { MovieCard } from '../Components/MovieCard';
import '../CSS/HomeScreen.css'




export const HomeScreen = () => {

    const [movies, setMovies] = useState([]);

    const fetchMovieData = async () => {

        const {data} = await axios.get(
            'https://api.tvmaze.com/search/shows?q=all'
        )

        setMovies(data);
        console.log("data", data);

    }


    useEffect(() => {

        fetchMovieData();

    }, []);


    return (

        <div className='homeScreen'>

        <div className='home-title'>Popular Movies</div>

        <div className = "home">

        {
            movies?.map((movie) => (
                <MovieCard
                key = {movie.show.id}
                movie = {movie}
                />
            ))
        }

        </div>

        </div>
    )
}



