import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
// import firebase from 'firebase';
import 'firebase/auth';
// import firebaseConfig from './firebase.config';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Gallary from './components/Gallary/Gallary';
import Footer from './components/Footer/Footer';
import BookingList from './components/BookingList/BookingList';
import BookingConfirm from './components/BookingConfirm/BookingConfirm';
import Room from './components/Room/Room';
import NewsEvents from './components/NewsEvents/NewsEvents';
// firebase.initializeApp(firebaseConfig);
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  return (
    <div className="app">
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
      <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/gallary">
              <Gallary></Gallary>
            </Route>
            <Route path="/rooms">
              <Room></Room>
            </Route>
            <Route path="/blog">
              <NewsEvents></NewsEvents>
            </Route>
            <Route path="/footer">
              <Footer></Footer>
            </Route>
            <Route path="/bookings">
              <BookingList></BookingList>
            </Route>
            <Route path="/bookingConfirm">
              <BookingConfirm></BookingConfirm>
            </Route>
            <PrivateRoute path="/book/:bedType">
              <Book />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
      </div>
  );
}

export default App;
