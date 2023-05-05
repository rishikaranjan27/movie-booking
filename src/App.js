import './App.css';
import { BookingDoneScreen } from './Screens/BookingDoneScreen';
import { BookingScreen } from './Screens/BookingScreen';
import { HomeScreen } from './Screens/HomeScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { MovieScreen } from './Screens/MovieScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path = '/' element = {<HomeScreen/>}/>
          <Route path = '/movie/:id' element = {<MovieScreen/>}/>
          <Route path = '/book/:id' element = {<BookingScreen/>}/>
          <Route path = '/login' element = {<LoginScreen/>}/>
          <Route path = '/done' element = {<BookingDoneScreen/>}/>

        </Routes>
      </Router>

     
    </div>
  );
}

export default App;
