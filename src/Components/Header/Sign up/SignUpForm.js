import React, {Component} from 'react';
import {Formik, Field, Form} from "formik";
import FormInput from "./../FormInput";

import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../../../firebase";

export default class SignUpForm extends Component {

  handleSubmit = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(()=>{
        updateProfile(auth.currentUser, {displayName: values.login});
      });
  };

  render() {
    return (
      <Formik
        initialValues={{
          login: '',
          password: '',
          email: '',
        }}
        onSubmit={this.handleSubmit}
      >
        <Form className="text-xs p-2 col-span-1">
          <div className="m-2">
            <Field name="email" component={FormInput} label="E-mail" placeholder="E-mail"/>
            <Field name="login" component={FormInput} label="Login" placeholder="Login"/>
            <Field name="password" component={FormInput} label="Password" placeholder="Password"/>
          </div>
          <button
            type="submit"
            className="bg-gray-300 pr-4 pl-4 ml-3 rounded-tl-lg rounded-br-lg cursor-pointer"
          >
            Sing Up
          </button>

        </Form>
      </Formik>

    );
  }
}