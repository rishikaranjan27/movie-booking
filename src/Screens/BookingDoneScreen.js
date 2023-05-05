import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import '../CSS/BookingDoneScreen.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



export const BookingDoneScreen = () => {

    let userInfo = JSON.parse(localStorage.getItem("userInfo"));


    const navigate = useNavigate();

    useEffect(() => {

        setTimeout(() => {
            navigate('/');
        }, 10000);

    }, []);



    return (
        <div className = "bookingDoneScreen">

            <div><CheckCircleIcon className="done-icon"/></div>

            <div>{ userInfo.tickets } tickets are booked</div>
            <div>You will be redirected to homepage in 10 seconds</div>

        </div>
    )
}