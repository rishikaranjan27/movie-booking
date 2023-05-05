import { useEffect } from "react"
import '../CSS/MovieCard.css'
import StarsIcon from '@mui/icons-material/Stars';
import { useNavigate } from "react-router-dom";



export const MovieCard = ({movie}) => {

    const navigate = useNavigate();


    const getMovie = () => {

        navigate(`/movie/${movie.show.id}`);


    }


    return (
        <div className = "movieCard">

            <div className="movieCard-left">
                {
                    movie.show.image?.original &&

                    <img
                    className="home-img" 
                    src = {movie.show.image?.original}
                    alt = "movie-img"
                    />

                }

                {
                    !movie.show.image?.original &&
                    <div className="movieCard-noImg">No Image</div>
                }

            </div>

            <div className="movieCard-right">

                <div className="movieCard-title">{movie.show.name}</div>
                {
                    movie.show.rating.average &&

                    <div className="movieCard-rating">
                        <div><StarsIcon className="star-icon"/></div>
                        <div>{movie.show.rating.average}</div>
                    </div>
                }

                {
                    !movie.show.rating.average &&
                    <div className="movieCard-noRating"></div>
                }
        


                <div className="movieCard-genres">
                {
                    movie.show.genres?.map((genre, num) => (
                        <div className = "movieCard-genres-text">
                            {
                                (num != 0) && 
                                <div>&nbsp;|&nbsp;</div>
                            }
                            
                            <div>{genre}</div>
                        </div>
                    ))
                }
                </div>

                <div>{movie.show.language}</div>

                <button className="movieCard-btn"
                onClick={() => {
                    getMovie(movie);
                }}>Buy Tickets</button>

            </div>
            

        </div>
    )
}