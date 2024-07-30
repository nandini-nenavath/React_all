import React, { useState } from "react";


const useForm = (initialValues = "") => {
  const [value, setValue] = useState(initialValues);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onReset = () => {
    setValue(initialValues);
  };
  return { value, onChange: handleChange, onReset };
};
export default useForm;
