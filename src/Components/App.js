import React, {Component,} from 'react';
import Header from "./Header";
import List from "./List/List";
import Gallery from "./Gallery/Gallery";
import Cash from "./Cash/Cash";
import Footer from "./Footer/Footer";
import HeaderSignUp from "./Header/HeaderSignUp";
import PlaceItems from "./Gallery/PlaceItems";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HeaderAccount from "./Header/HeaderAccount"


const API_URL_BELARUSBANK = 'https://belarusbank.by/api/kursExchange';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      showItem: '',
      showForm: false,
      targetDirectory: '',
      login: '',
      password: '',
    })
  }


  handleLogin = (e) => {
    this.setState({
      login: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleCheck = () => {
    if (this.handleCheck === true) {
      console.log('f')
      return true
    }
  }

  handleChangeShowItem = (e) => {
    this.setState({
      showItem: true,
      targetDirectory: e.target.getAttribute('value')
    })
  }

  handleShowItems = () => {
    if (this.state.showItem) {
      return require(`./Gallery/${this.state.targetDirectory}.json`)
    }
    return []
  }


  handleShowForm = () => {
    const {showForm} = this.state
    this.setState({
      showForm: !showForm
    })
  }
  handleShowRegistration = () => {
    return this.state.showForm
  }

  render() {
    return (
      <Router>
        <div className="grid grid-cols-5 grid-rows-7">
          <Routes>
            <Route path="/Shop_net" element={<Header
              // onRegistClick={this.handleShowForm}
              // handleLogin={this.handleLogin}
              // handlePassword={this.handlePassword}
              // handleCheck={this.handleCheck}
            />}/>
            <Route path="/login" element={<HeaderAccount/>}/>
            <Route path="/sing-up" element={<HeaderSignUp/>}/>
          </Routes>


          {/*<List pushShowItems={this.handleChangeShowItem}/>*/}
          <List/>

          <Routes>
            <Route path="/p/:item" element={<PlaceItems/>}/>
          </Routes>

          <Gallery className="text-center"
                   showRegistration={this.handleShowRegistration()}
                   showItems={this.handleShowItems()}
                   handleCheck={this.handleCheck()}
          />

          <Cash/>
          <Footer/>


        </div>
      </Router>
    );
  }
}
