import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class PlaceItems extends Component {

  render() {
    const {filterItems, targetCollection, handleShowItem} = this.props
    return (
      <div className="col-start-2 col-span-3 row-span-4
          grid grid-cols-3 mx-auto max-w-screen-lg">
        <p className="text-center text-2xl col-start-1 col-end-4 bg-white py-2">{targetCollection}</p>
        <div className="col-span-3 ">{filterItems.map((item) => (
          item.collection === targetCollection ?
            <div key={item.name} className=" relative align-bottom inline-block bg-white w-1/3 h-96">
              <img src={process.env.PUBLIC_URL + item.img}
                   className="mr-auto ml-auto h-1/2 hover:scale-105">
              </img>
              <Link to={`/Shop_net/${item.name}`}
                    value={item.name}
                    className="hover:text-slate-900 hover:underline text-lime-600"
                    onClick={handleShowItem}
              >
                {item.name}
              </Link>
              <p className="mb-4 absolute font-bold text-2xl bottom-0 text-center"
              >{item.price}$</p>
            </div> : '')
        )
        }
        </div>

      </div>
    );
  }
}
