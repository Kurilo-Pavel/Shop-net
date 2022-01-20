import React, {Component} from 'react';
import {Formik, Field, Form} from "formik";
import FormInput from "../Header/FormInput";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export default class LoginForm extends Component {
handleSubmit = (values)=>{
  signInWithEmailAndPassword (auth, values.email, values.password )
};
  render() {
       return (<div className="text-xs p-2 ">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
       onSubmit={this.handleSubmit}
      >
        <Form className="m-auto ">
          <div className="m-2 ">
            <Field name="email" component={FormInput} label="Email" />
            <Field name="password" component={FormInput} label="Password" />
          </div>
          <button
            type="submit"
            className="bg-gray-300 pr-4 pl-4 ml-3 rounded-tl-lg rounded-br-lg cursor-pointer"
          >
            Sign in
          </button>
        </Form>
      </Formik>
      </div>
    );
  }
}