import {Formik, Form, Field} from "formik";
import FormSelect from "./FormSelect";
import CashSelect from "./CashSelect";
import Loading from "../Gallery/Loading";
import {useSelector} from "react-redux";

const currency = [
  {name: 'USD'},
  {name: 'EUR'},
  {name: 'RUB'},
  {name: 'BYN'},
  {name: 'PLN'},
  {name: 'BGN'},
  {name: 'CZK'},
  {name: 'UAH'},
];

const Cash = () => {
  const loadingCash = useSelector((state) => state.cash.loading);
  return (
    <Formik
      initialValues={''}
      onSubmit={null}>
      <Form className="bg-gray-300 col-end-6 row-span-2 col-span-1 float-right inline h-full">
        {loadingCash === 'loading' ? (Loading()) : null}
        <div className=" text-center inline-block  p-2">
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
          <div>
            <p className="text-center text-xl my-4">Select your cash</p>
            <Field
              component={CashSelect}
              options={currency}
              value={currency[0]}
            />
          </div>
          <div className="h-40 mt-3 w-full">

          </div>
        </div>
      </Form>

    </Formik>
  )
}

export default Cash;