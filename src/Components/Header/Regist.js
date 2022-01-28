import React, {Component} from 'react';
import {Formik, Field, Form} from "formik";
import FormInput from "./FormInput";
import FormRadio from "./FormRadio";
import * as Yup from 'yup';
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth, db, storage} from "../../firebase";
import {doc, setDoc} from "firebase/firestore";
import {ref, uploadBytes} from "firebase/storage";
import FormFile from "./FormFile";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const telRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const GENDER = [
  {name: 'gender', label: 'Male', value: 'male'},
  {name: 'gender', label: 'Female', value: 'female'},
];
export default class Regist extends Component {


  handleSubmit = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async () => {
        await updateProfile(auth.currentUser, {displayName: values.email});
        setDoc(doc(db, 'users', values.email), {
          id: auth.currentUser.uid,
          username: values.firstName,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          telNumber: values.telNumber,
          password: values.password,
          gender: values.gender,
          city: values.city,
          photo: values.photo,
        })
      })
  }

    render() {
    const {showRegistration, registration, handleSend} = this.props;

    return (
      <div className={`fixed z-20 w-full h-full bg-gray-500/40 grid
      ${registration ? 'visible' : 'invisible'}`}
           onClick={showRegistration}
      >
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            telNumber: '',
            password: '',
            repeatPassword: '',
            gender: '',
            city: '',
            photo: '',
            termsAndConditions: false,
          }
          }
          onSubmit={this.handleSubmit}
          validationSchema={Yup.object().shape({
            firstName: Yup.string()
              .required('Name is required')
              .max(20, 'Name should be less than 20 characters'),
            lastName: Yup.string()
              .required('Name is required')
              .max(20, 'Name should be less than 20 characters'),
            email: Yup.string()
              .email('Email should be in correct format')
              .required('Email is required'),

            telNumber: Yup.string()
              .matches(telRegex, 'Telephone number should be contain numbers')
              .required('Telephone number is required'),
            password: Yup.string()
              .matches(
                passwordRegex,
                'Password should be more than 8 characters and contain at least one number and one letter'
              )
              .required('Password is required'),
            repeatPassword: Yup.string().oneOf(
              [Yup.ref('password')],
              'Passwords should match'
            ).required('Passwords should match'),
            gender: Yup.string()
              .required('Gender is required'),
            city: Yup.string()
              .required('City is required'),
            termsAndConditions: Yup.boolean().isTrue(
              'You should accept our terms and conditions'
            ),
          })}
        >

          <Form
            className="w-1/2 relative mx-auto grid justify-center  bg-yellow-200 h-min rounded-xl
                   place-self-center p-4 border-double border-8 border-black"
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <div className="text-3xl text-center mb-3">Registration</div>
            <div className="bg-blue-200 p-4 h-auto rounded-xl text-xl">
              <Field name="firstName" component={FormInput} label="First name"/>
              <Field name="lastName" component={FormInput} label="Last name"/>
              <Field name="email" component={FormInput} label="Email"/>
              <Field name="telNumber" component={FormInput} label="Tel. number"/>
              <Field name="password" type="password" component={FormInput} label="Password"/>
              <Field name="repeatPassword" type="password" component={FormInput} label="Repeat password"/>
              <Field name="city" component={FormInput} label="Your city"/>
              <Field name="photo" type="file" component={FormFile} label="Upload a photo"
                    onChange={handleSend} />

              <fieldset className="mb-2 pl-4">
                <legend>Gender</legend>
                <Field name="gender" options={GENDER} component={FormRadio}/>
              </fieldset>
              <div>
                <Field name="termsAndConditions" type="checkbox" id="termsAndConditions"/>
                <label>I Agree with Terms and Conditions</label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="p-1 px-4 font-bold text-2xl rounded-xl mr-8 hover:bg-green-400"
                >
                  Ok
                </button>

                <button
                  type="button"
                  onClick={showRegistration}
                  className="p-1 px-4 font-bold text-2xl rounded-xl hover:bg-red-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    )
  }
}
