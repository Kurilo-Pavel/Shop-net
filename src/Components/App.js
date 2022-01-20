import React, {Component,} from 'react';
import Header from "./Header";
import List from "./List/List";
import Gallery from "./Gallery/Gallery";
import Cash from "./Cash/Cash";
import Footer from "./Footer/Footer";

import PlaceItems from "./Gallery/PlaceItems";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Login from "./Login"
import Account from "./Account";
import SignUp from "./Header/Sign up";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      showItem: '',
      showForm: false,
      targetDirectory: '',
      login: '',
      password: '',
      currentUser:'',
    }

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

  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      this.setState({
        currentUser: user,
      });
      console.log(this.state.currentUser)
    });
  }

  render() {
    const{currentUser}=this.state
    return (
      <Router>
        <div className="grid grid-cols-5 grid-rows-7">

            <Header
              currentUser={currentUser}
              // handleLogin={this.handleLogin}
              // handlePassword={this.handlePassword}
              // handleCheck={this.handleCheck}
            />

          <Routes>
            <Route path="/Shop_net/log" element={<Account  currentUser={currentUser}/>}/>
            <Route path="/Shop_net/login" element={<Login  currentUser={currentUser}/>}/>
            <Route path="/Shop_net/sing-up" element={<SignUp currentUser={currentUser}/>}/>
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
