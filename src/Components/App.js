import React, {useEffect} from 'react';
import Header from "./Header";
import List from "./List/List";
import Gallery from "./Gallery/Gallery";
import Cash from "./Cash/Cash";
import Footer from "./Footer/Footer";
import PlaceItems from "./Gallery/PlaceItems";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {auth} from '../firebase';
import {onAuthStateChanged} from 'firebase/auth';
import Regist from "./Header/Regist";
import Basket from "./Header/Basket";
import ItemPage from "./Gallery/ItemPage";
import {connect, useDispatch, useSelector} from "react-redux";
import {setUser} from "../store/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user));
    });
  }, [])

  return (
    <Router>
      <div className=" grid grid-cols-5 grid-rows-7 ">

        <Header/>

        <List/>

        <Routes>
          <Route
            path="/Shop_net"
            element={<Gallery/>}
          />

          <Route
            path="/Shop_net/collection/:collection"
            element={<PlaceItems/>}
          />

          <Route
            path="/Shop_net/:items"
            element={<ItemPage/>}
          />

          <Route
            path="/:email"
            element={<Basket/>}
          />
        </Routes>

        <Cash/>

        <Footer/>

        <Regist
          // showRegistration={this.handleShowRegistration}
          // registration={registration}
          // handleSend={this.handleSend}
        />
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {currentUser: state.auth.currentUser,};
};
export default connect(mapStateToProps)(App);