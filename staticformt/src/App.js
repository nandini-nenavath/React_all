import './App.css';
import {useFormik} from 'formik';
import * as yup from 'yup';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { ConfirmDialog } from 'primereact/confirmdialog'; 
import { useState } from 'react';
function App() {
  const schema=yup.object(
    {
      Name:yup.string().required('this is a required field'),
      age:yup.number().required('this is a required field'),
      phone:yup.number().required('this is a required field').min(10,'phone number is invalid'),

    }
    
  )
  const handleBlur = (e) => {
    formik.handleBlur(e);

  };
const [currentField,setCurrentField] = useState('')
const [displayAlert,setDisplayAlert] = useState(false)
const [history,setHistory] = useState([{
  Name:'Nandini',
  age:'22',
  phone:'9912345683',
  date:'2024-06-28'
}])
  const formik=useFormik(
  {initialValues:{
    Name:'Nandini',
    age:'22',
    phone:'9912345683',
    date:'2024-06-28'
  },
validationSchema:schema,
onSubmit:(values)=>{
  console.log(values)
}}

  )
const initiateAlert = (fieldName,value,initialValues)=>{
if(initialValues[fieldName]!==value){
setDisplayAlert(true)
setCurrentField(fieldName)
}
  }
  return (
    <>
    <form onSubmit={formik.handleSubmit} className='Centered'>
      <ConfirmDialog visible={displayAlert} icon={'pi pi-exclamation-triangle'}
      reject={()=>{
        debugger
        formik?.setFieldValue(currentField,formik?.initialValues[currentField])
        setDisplayAlert(false)
      }}
      accept={()=>{
    let dateStr = formik?.values?.date
    let arr = history
    if(arr?.filter((d)=>d?.date===dateStr)?.length){
  arr = arr?.map((d,i)=>{
    if(d?.date===dateStr){
      return {...formik?.values,date:dateStr}
    }else {
     return  {...d}
    }
   
  })
  setHistory(arr)


    }else {
    arr = [...history,{...formik?.values,date:dateStr}]
   
    setHistory(arr)
      
    }
    formik?.setFieldValue('date','')
    setDisplayAlert(false)  
      }}
      
      message={<><input type='date' name='date' value={formik?.values?.date} onChange={formik.handleChange} onBlur={handleBlur}/></>}
      />
      <label htmlFor='Name'>Name:</label>
      <input name="Name" id="Name" type="text" autoComplete="off" value={formik.values.Name}
            onChange={formik.handleChange} onBlur={(e)=>{
              handleBlur(e)
              initiateAlert('Name',e.target.value,formik.initialValues)

            }}></input>
      {formik.errors.Name && <div>{formik.errors.Name}</div>}
      <br/>
      <label htmlFor='age'>Age:</label>
      <input name="age" id="age" type="number" autoComplete="off" value={formik.values.age}
            onChange={formik.handleChange} onBlur={(e)=>{
              handleBlur(e)
              initiateAlert('age',e.target.value,formik.initialValues)
            }}></input>
      {formik.errors.age && <div>{formik.errors.age}</div>}
      <br/>
      <label htmlFor='phone'>Phone Number:</label>
      <input name="phone" id="phone" type='number' autoComplete="off" value={formik.values.phone}
            onChange={formik.handleChange} onBlur={(e)=>{
              handleBlur(e)
              initiateAlert('phone',e.target.value,formik.initialValues)
            }}></input>
      {formik.errors.phone && <div>{formik.errors.phone}</div>}
      <br/>
      <br/>
      <button type="submit">submit</button>

    </form>
    <br/>
    <table className="tab">
  <thead>
    <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Phone Number</th>
    <th>Date</th>
  </tr>
  </thead>
  <tbody>
{history?.map((d,i)=>{
  return (
    <tr>
      <td>
        {d?.Name}
      </td>
      <td>{d?.age}</td>
      <td>{d?.phone}</td>
      <td>{d?.date}</td>
    </tr>
  )
})}
  </tbody>
    </table>
   
    </>
  );
}

export default App;
