import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StarsIcon from '@mui/icons-material/Stars';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import '../CSS/MovieScreen.css'



export const MovieScreen = () => {

    let userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const navigate = useNavigate();

    const params = useParams();
    const {id} = params;


    const [movieInfo, setMovieInfo] = useState();



    const getMovie = async () => {
        const {data} = await axios.get(
            `https://api.tvmaze.com/shows/${id}`
        )

        setMovieInfo(data);
        console.log("movieInfo", data);
    }


    useEffect(() => {

        getMovie();

    }, []);



    const bookTicket = () => {

        if(userInfo) {

            navigate(`/book/${id}`);
        }

        else {
            navigate(`/login?redirect=/book/${id}`);
        }
    }


    return (
        <div className = "movieScreen">
        {
            movieInfo &&

            <div className='movieScreen'>
            
            <div className='movieScreen-header'>
                <div onClick={() => {
                    navigate('/');
                }}><ArrowBackIosIcon/>
                </div>
                <div>{movieInfo.name}</div>
            </div>

            <div className='movieScreen-flex'>

                <div className='movieScreen-left'>

                    <div className='movieScreen-image'>
                        <img 
                            className='movieScreen-img' 
                            src = {movieInfo.image?.original}
                            alt = "movie-img"
                        />
                    </div>

                </div>


                <div className='movieScreen-right'>

                    <div className='movieScreen-details'>

                        <div className='movieScreen-title'>{movieInfo.name}</div>

                        <div className='movieScreen-rating'>
                            <div><StarsIcon className="star-icon"/></div>
                            <div>{movieInfo.rating.average}</div>
                        </div>

                        <div className='movieScreen-language'>Language - {movieInfo.language}</div>


                        <div className="movieScreen-genres">
                        {
                            movieInfo.genres?.map((genre, num) => (
                                <div className='movieScreen-genre'>{genre}</div>
                            ))
                        }
                        </div>

                        


                        <div className='movieScreen-summary'>Summary</div>
                        <div className='movieScreen-summary-text'>{movieInfo.summary}</div>



                        <button className='movieScreen-btn' onClick={() => {
                            bookTicket();
                            // navigate(`/book/${id}`);
                        }}>Buy Ticket</button>


                    </div>

                </div>

            </div>

            </div>
             
        }

            




        </div>
    )
}


