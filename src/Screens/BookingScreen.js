import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from 'react';
import axios from 'axios'
import '../CSS/BookingScreen.css'



export const BookingScreen = () => {


    let userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const navigate = useNavigate();

    const params = useParams();
    const {id} = params;


    const [tickets, setTickets] = useState(1);



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



    const handleBuy = () => {

        // if(userInfo) {

            userInfo = {email: userInfo.email, password: userInfo.password, tickets: tickets};

            localStorage.setItem("userInfo", JSON.stringify(userInfo));

            navigate('/done');
        // }

        // else {
        //     navigate(`/login?redirect=/book/${id}`);
        // }
    }
   


    return (

        <div className = "bookingScreen">

        {
            movieInfo && 

            <div className = "bookingScreen">

            <div className='bookingScreen-header'>
                <div onClick={() => {
                    navigate(`/movie/${id}`);
                }}><ArrowBackIosIcon/>
                </div>
                <div>Book Ticket</div>

            </div>


            <div className='bookingScreen-flex'>
            <div className='bookingScreen-left'>
                <img 
                    className='bookingScreen-img' 
                    src = {movieInfo.image?.original}
                />
            </div>

            <div className='bookingScreen-right'>
            {
                movieInfo && 
                <div>
                    <div className='bookingScreen-title'>{movieInfo.name}</div>
                    <div>Date : {movieInfo.schedule.days[0]}</div>
                    <div>Time : {movieInfo.schedule.time}</div>

                </div>
            }

            </div>


            </div>

            <div className='bookingScreen-seat'>

                <div>No of seats</div>

                <div className='seat-count'>

                    <button onClick={() => {setTickets(1)}}>1</button>
                    <button onClick={() => {setTickets(2)}}>2</button>
                    <button onClick={() => {setTickets(3)}}>3</button>
                    <button onClick={() => {setTickets(4)}}>4</button>
                    <button onClick={() => {setTickets(5)}}>5</button>

                </div>
               

               <div className='bookingScreen-bottom'>

                    <div className='bookingScreen-bottom-left'>
                        <div>{tickets} seats</div>
                        <div className='price'>₹ {tickets * 249}</div>
                    </div>

                    <div className='bookingScreen-bottom-right'>
                    <button className='bookingScreen-btn' onClick={handleBuy}>Buy Ticket</button>
                    </div>

                </div>
    
            </div>

        </div>
        }

</div>
        
    )
}