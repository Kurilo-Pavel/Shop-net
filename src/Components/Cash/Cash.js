import React, {Component} from 'react';
import {Formik, Form, Field} from "formik";
import FormSelect from "./FormSelect";
import CashSelect from "./CashSelect";

const currency = [
  {name: 'USD', scale: '1', id: '431'},
  {name: 'EUR', scale: '2', id: '451'},
  {name: 'RUB', scale: '3', id: '456'},
  {name: 'BYN', scale: '4', id: ''},
  {name: 'PLN', scale: '5', id: '452'},
  {name: 'BGN', scale: '6', id: '441'},
  {name: 'CZK', scale: '7', id: '463'},
  {name: 'UAH', scale: '8', id: '449'},
];


export default class Cash extends Component {


  render() {
    return (
      <Formik>
        <Form className="relative">
          <div className=" fixed text-center row-span-3 col-span-1
      inline-block border border-pink-400 p-2">
        <span className="block m-2 text-center text-xl">
          Currency Converter
        </span>

            <Field
              component={FormSelect}
              options={currency}
              value={currency[0]}
              name={'first'}
            />

            <Field
              component={FormSelect}
              options={currency}
              value={currency[1]}
              name='second'
            />

            <Field
              component={FormSelect}
              options={currency}
              value={currency[2]}
              name={'third'}
            />

            <Field
              component={FormSelect}
              options={currency}
              value={currency[4]}
              name={'fourth'}
            />
            <p className="text-center text-xl my-4">Select your cash</p>
            <Field
              component={CashSelect}
              options={currency}
              value={currency[0]}
            />
          </div>
        </Form>
      </Formik>
    )

  }
}
