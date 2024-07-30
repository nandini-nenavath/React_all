import useForm from "./hook";
const FormComponent = () => {
  const name = useForm("");
  const email = useForm("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name:${name.value}, email:${email.value}`);
    name.onReset();
    email.onReset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" type="text" {...name} />
        <label htmlFor="email">email</label>
        <input name="email" id="email" type="email" {...email} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default FormComponent;
