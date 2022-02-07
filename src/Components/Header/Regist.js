import {Formik, Field, Form} from "formik";
import FormInput from "./FormInput";
import FormRadio from "./FormRadio";
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {getUser, setUser} from "../../store/user/userSlice";
import {handleShowRegistration} from "../../store/show/showCollectionSlice";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const telRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const GENDER = [
  {name: 'gender', label: 'Male', value: 'male'},
  {name: 'gender', label: 'Female', value: 'female'},
];
const Regist = () => {

  const dispatch = useDispatch();
  const registration = useSelector((state) => state.showCollection.registration)
  const currentUser = useSelector((state) => state.auth.currentUser);
  const handleSubmit = (values) => {
    dispatch(setUser(values));
    dispatch(handleShowRegistration())
    dispatch(getUser(currentUser.email))
  }
  return (
    <div className={`fixed z-20 w-full h-full bg-gray-100/40 grid
      ${registration ? 'visible' : 'invisible'}`}
         onClick={() => {
           dispatch(handleShowRegistration())
         }}
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
          termsAndConditions: false,
        }
        }
        onSubmit={handleSubmit}
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
          className="w-1/2 relative mx-auto grid justify-center  bg-gray-500 max-h-full
                   place-self-center p-4 border border-3-gray  shadow-[0_1em_0.5em_0.8em_gray]"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div className="text-3xl text-center mb-3">Registration</div>
          <div className="bg-gray-200 p-4 h-auto  text-xl">
            <Field name="firstName" component={FormInput} label="First name"/>
            <Field name="lastName" component={FormInput} label="Last name"/>
            <Field name="email" component={FormInput} label="Email"/>
            <Field name="telNumber" component={FormInput} label="Tel. number"/>
            <Field name="password" type="password" component={FormInput} label="Password"/>
            <Field name="repeatPassword" type="password" component={FormInput} label="Repeat password"/>
            <Field name="city" component={FormInput} label="Your city"/>
            <fieldset className="mb-2 pl-4">
              <legend>Gender</legend>
              <Field name="gender" options={GENDER} component={FormRadio}/>
            </fieldset>
            <div>
              <Field name="termsAndConditions" type="checkbox" id="termsAndConditions" className='accent-red-500'/>
              <label>I Agree with Terms and Conditions</label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline bg-gray-400  p-2 px-14
                  hover:bg-gray-200 text-2xl my-2
                   shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none
                   active:translate-x-0.5 active:translate-y-0.5"
              >
                Ok
              </button>
              <button
                type="button"
                onClick={() => {
                  dispatch(handleShowRegistration())
                }}
                className="inline bg-gray-400  p-2 px-10
                  hover:bg-gray-200 text-2xl my-2 mx-2
                   shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none
                   active:translate-x-0.5 active:translate-y-0.5"              >
                Cancel
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
export default Regist;
