import React, {Component} from 'react';
import {Formik, Field, Form} from "formik";
import FormInput from "./FormInput";
import FormRadio from "./FormRadio";


const GENDER = [
    {name: 'gender', label: 'Male', value: 'male'},
    {name: 'gender', label: 'Female', value: 'female'},
];
export default class Regist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: '',
        }
    }

    handleShow = () => {
        this.setState({
            isVisible: false,
        })
    }


    render() {
        const {showRegist} = this.props;
        const {isVisible} = this.state;
        return (
            <Formik initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                telNumber: '',
                password: '',
                repeatPassword: '',
                gender: '',
                city: '',
                termsAndConditions: false,
            }
            } onSubmit={(formValues) => (this.handleShow(),
                console.log(formValues)) }
            >

                <Form className={`bg-yellow-200 fixed inset-1/5 rounded-xl
p-4 border-double border-8 border-black ${isVisible ? 'visible' : 'invisible'}`} ref={showRegist}>
                    <div className="text-3xl text-center mb-3">Registration</div>
                    <div className="bg-blue-200 p-4 h-full rounded-xl text-xl">
                        <Field name="firstName" component={FormInput} label="First name"/>
                        <Field name="lastName" component={FormInput} label="Last name"/>
                        <Field name="email" component={FormInput} label="Email"/>
                        <Field name="telNumber" component={FormInput} label="Tel. number"/>
                        <Field name="password" component={FormInput} label="Password"/>
                        <Field name="repeatPassword" component={FormInput} label="Repeat password"/>
                        <Field name="city" component={FormInput} label="Your city"/>
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
                                type="submit"
                                className="p-1 px-4 font-bold text-2xl rounded-xl hover:bg-red-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        )
    }
}
