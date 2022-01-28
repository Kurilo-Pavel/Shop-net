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
        <Form className="flex flex-col bg-yellow-100 justify-center items-center">
          <div className="text-xl ">
            <Field name="email" component={FormInput} label="Email" />
            <Field name="password" component={FormInput} label="Password" />
          </div>
          <button
            type="submit"
            className=" inline bg-red-300 p-2 px-14 my-2 rounded-2xl
                     hover:bg-red-200 text-2xl
                     shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none
                   active:translate-x-0.5 active:translate-y-0.5"
          >
            Sign in
          </button>
        </Form>
      </Formik>
      </div>
    );
  }
}