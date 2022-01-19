import React, {Component} from 'react';
import {Formik, Field, Form} from "formik";
import FormInput from "./FormInput";

export default class Account extends Component {

  render() {
    // const {onRegistClick, handleCheck} = this.props;
    return (
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        onSubmit={(formik) => {
        if(formik.login === 'admin' && formik.password === 'admin'){
          // handleCheck()
        }
        }}
      >
        <Form className="text-xs p-2 col-span-1">
          <div className="m-2">
            <Field name="login" component={FormInput} label="Login" />
            <Field name="password" component={FormInput} label="Password" />
          </div>
          <button
            type="submit"
            className="bg-gray-300 pr-4 pl-4 ml-3 rounded-tl-lg rounded-br-lg cursor-pointer"
          >
            Sign in
          </button>
          <button
            type="button"
            className="
        bg-gray-300 pr-4 pl-4 ml-3 rounded-tl-lg rounded-br-lg cursor-pointer right-0"
            // onClick={onRegistClick}
          >
            Registration
          </button>
        </Form>
      </Formik>

    );
  }
}