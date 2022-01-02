import React, {Component} from 'react';

export default class Cash extends Component {
  render() {
    return (
      <div className="text-center
row-span-2 col-span-1
      inline-block border border-pink-400 p-2">
        <span className="block m-2 text-center">
          Currency Converter
        </span>
        <span className="w-2/4 inline-block border border-green-400 text-sm p-1">
          For the best courses
        </span>
        <span className="w-2/4 inline-block border border-purple-400 text-sm p-1">
         At the NBRB rate
        </span>
        <form>
          <input type="text" className="w-1/2 inline border border-blue-200 m-2"/>
          <select className="inline w-12 border border-blue-200 mt-2">
            <option className="">1</option>
            <option className="">2</option>
            <option className="">3</option>
            <option className="">4</option>
          </select>
          <input type="text" className="w-1/2 inline border border-blue-200 m-2"/>
          <select className="inline w-12 border border-blue-200 mt-2">
            <option className="">1</option>
            <option className="">2</option>
            <option className="">3</option>
            <option className="">4</option>
          </select>
          <input type="text" className="w-1/2 inline border border-blue-200 m-2"/>
          <select className="inline w-12 border border-blue-200 mt-2">
            <option className="">1</option>
            <option className="">2</option>
            <option className="">3</option>
            <option className="">4</option>
          </select>
          <input type="text" className="w-1/2 inline border border-blue-200 m-2"/>
          <select className="inline w-12 border border-blue-200 mt-2">
            <option className="">1</option>
            <option className="">2</option>
            <option className="">3</option>
            <option className="">4</option>
          </select>

        </form>
      </div>

    );
  }
}
