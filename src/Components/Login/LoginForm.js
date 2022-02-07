import React, {Component} from 'react';
import {Formik, Field, Form} from "formik";
import FormInput from "../Header/FormInput";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase';

export default class LoginForm extends Component {
  handleSubmit = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
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
          <Form className="flex flex-col bg-gray-500 justify-center items-center
        shadow-[0_0.1em_0.5em_0.15em_lightgray]">
            <div className="text-xl py-4">
              <Field name="email" component={FormInput} label="Email"/>
              <Field name="password" type="password" component={FormInput} label="Password"/>
            </div>
            <button
              type="submit"
              className="inline bg-gray-400  p-2 px-14
                  hover:bg-gray-200 text-2xl my-2
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