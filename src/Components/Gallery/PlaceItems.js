import React, {Component} from 'react';


export default class PlaceItems extends Component {

  render() {
    const {showItems} = this.props
    return (
      <div>
        {{showItems} ?
          (<div className="">{showItems.map((item, index) =>
            <div className="relative align-bottom inline-block bg-white w-1/3 h-96">
              <img key={index} src={process.env.PUBLIC_URL + item.img}
              className="mr-auto ml-auto h-1/2"></img>
              <a className=" ">{item.name}</a>
              <p className="absolute font-bold text-2xl bottom-0 text-center">{item.price}$</p>
            </div>
          )
          }
          </div>) : ''}

      </div>
    );
  }
}
