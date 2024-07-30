import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

const App1 = () => {
  const initialValues = {
    name: '',
    email: '',
    password: ''
  };
  const onSubmit = (values,{setSubmitting,resetForm}) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };
  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
  });

  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}        
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              autoComplete='off'
              name="name"
            />
            
            {props.errors.name && props.touched.name && (
              <div id="feedback">{props.errors.name}</div>
            )}
            <br></br>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              autoComplete='off'
              name="email"
            />
            {props.errors.email && props.touched.email && (
              <div id="feedback">{props.errors.email}</div>
            )}
            <br></br>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
              autoComplete='off'
              name="password"
            />
            {props.errors.password && props.touched.password && (
              <div id="feedback">{props.errors.password}</div>
            )}
            <br></br>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default App1;
