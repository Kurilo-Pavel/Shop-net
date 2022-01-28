import React, {Component} from 'react';


export default class ItemPage extends Component {

  render() {
    const {targetItem, showCollection} = this.props
    return (
      <div className="col-start-2 col-span-3 row-span-4
         bg-white">
        {showCollection.map((item) => (
          item.name === targetItem ? (

              <div className="grid grid-cols-2">
                <div className="col-span-1 flex">
                  <img src={process.env.PUBLIC_URL + item.img}
                       className="m-auto items-center"/>
                </div>
                <div className=" col-span-1 relative">
                  <span className="inline-block mb-14 w-full top-0 text-2xl p-2">{item.name}</span>
                  <p className="font-bold text-2xl absolute bottom-0 left-4 ">Price {item.price} S</p>
                  <bottom className="text-2xl px-6 absolute bottom-2 border rounded-2xl bg-blue-400 py-1 right-4
                  hover:bg-blue-300 shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none active:translate-x-0.5
                  active:translate-y-0.5"
                  >Buy
                  </bottom>
                </div>

              <ul className="m-2 col-start-1 col-span-2 mb-4">
                {item.aboutThisItem.map((list, index) => (
                  <li key={index} type="disc" className="ml-5">{list}</li>))}
              </ul>
            </div>
          ) : '')
        )}
      </div>
    );
  }
}
