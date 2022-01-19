import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class PlaceItems extends Component {

  render() {
    const {showItems} = this.props
    return (
      <div className="grid grid-cols-3 mx-auto max-w-screen-lg">
        <div className="col-span-3">{showItems.map((item) =>
          <div key={item.name} className="relative align-bottom inline-block bg-white w-1/3 h-96">
            <img src={process.env.PUBLIC_URL + item.img}
                 className="mr-auto ml-auto h-1/2"></img>
            <Link to={`/p/{items}`} className=" ">{item.name}</Link>
            <p className="absolute font-bold text-2xl bottom-0 text-center">{item.price}$</p>
          </div>
        )
        }
        </div>

      </div>
    );
  }
}
