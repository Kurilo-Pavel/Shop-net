import React, {Component} from 'react';
import {Link} from "react-router-dom";
import login from "../../icon/login.png";
import basket from "../../icon/basket.png";

export default class LoginImage extends Component {

  render() {
const {handleShowForm}=this.props
    return (
      <div className="m-auto">
        <div className="">
          <img
            src={login}
            onClick={handleShowForm}
            className="inline h-1/4 w-1/4 ml-14 hover:scale-75 "
          />
          <Link to="/basket">
            <img src={basket} className=" inline h-1/4 w-1/5 ml-14 hover:scale-75 "/>
          </Link>
        </div>

      </div>
    );
  }
}

