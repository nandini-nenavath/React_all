import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

function Form1() {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    password: '',
  });

  const validationSchema = yup.object({
    Name: yup.string().required('This is a required field'),
    email: yup.string().required('This is a required field').email('Invalid email'),
    password: yup.string().required('This is a required field').min(8, 'Too short').max(20, 'Too long')
  });

  const onSubmit = (values,{setSubmitting,resetForm}) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
    
  };

  return (
    <div>
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
     <Form>
          <div>
            <label htmlFor='Name'>Name:</label>
            <Field name="Name" id="Name" autoComplete="off"/>
            <ErrorMessage name="Name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <Field name="email" id="email" autoComplete="off"/>
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <Field name="password" id="password" autoComplete="off"/>
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      
    </Formik>
    </div>
  );
}

export default Form1;
