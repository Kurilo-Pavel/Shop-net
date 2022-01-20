import React, {Component} from 'react';
import {Formik, Form, Field} from "formik";
import FormSelect from "./FormSelect";

const currency = [
  {name: 'USD', scale: '1', id: ''},
  {name: 'EUR', scale: '2', id: ''},
  {name: 'RUB', scale: '3', id: ''},
  {name: 'BYN', scale: '4', id: ''},
  {name: 'PLN', scale: '5', id: ''},
  {name: 'GEL', scale: '6', id: ''},
  {name: 'CZK', scale: '7', id: ''},
  {name: 'UAH', scale: '8', id: ''},
];


export default class Cash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usd: 'w',
    }
  }

  render() {
    return (
      <Formik>
        <Form>
          <div className="text-center row-span-2 col-span-1
      inline-block border border-pink-400 p-2">
        <span className="block m-2 text-center">
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
          </div>
        </Form>
      </Formik>
    )

  }
}
