import React from "react";
import { Dropdown } from 'primereact/dropdown';
import { Profiler } from "react";
import { InputText } from "primereact/inputtext";
import {Button} from 'primereact/button';
// import './App.css';
const callback = (id, phase, actualTime, baseTime, startTime, commitTime) => {
  console.log(`${id}'s ${phase} phase:`);
  console.log(`Actual time: ${actualTime}`);
  console.log(`Base time: ${baseTime}`);
  console.log(`Start time: ${startTime}`);
  console.log(`Commit time: ${commitTime}`);
};

const camera=[
  {name:'Front Hazard Avoidance Camera',code:'FHAZ'},
  {name:'Rear Hazard Avoidance Camera',code:'RHAZ'},
  {name:'Mast Camera',code:'MAST'},
  {name:'Chemistry and Camera Complex',code:'CHEMCAM'},
  {name:'Mars Hand Lens Imager',code:'MAHLI'},
  {name:'Mars Descent Imager',code:'MARDI'},
  {name:'Navigation Camera',code:'NAVCAM'},
  {name:'Panoramic Camera',code:'PANCAM'},
  {name:'Miniature Thermal Emission Spectrometer (Mini-TES)',code:'MINITES'},

]
const Form = ({ payload, onChangeHandler, onSubmitHandler }) => {
return (
<form onSubmit={onSubmitHandler}  className="card flex justify-content-center" >
  
<Profiler id="camera" onRender={callback}></Profiler>


<label htmlFor="camera">Camera</label>
<br/>
<Dropdown value={payload.camera} onChange={onChangeHandler} options={camera} name="camera" placeholder="select a camera" optionLabel="name" className="w-full md:w-14rem" />

{/* <label htmlFor="camera">Camera</label>
<select
     name="camera"
     id="camera"
     onChange={onChangeHandler}
     value={payload.camera}
   >
    
<option value="FHAZ">Front Hazard Avoidance Camera</option>
<option value="RHAZ">Rear Hazard Avoidance Camera</option>
<option value="MAST">Mast Camera</option>
<option value="CHEMCAM">Chemistry and Camera Complex</option>
<option value="MAHLI">Mars Hand Lens Imager</option>
<option value="MARDI">Mars Descent Imager</option>
<option value="NAVCAM">Navigation Camera</option>
<option value="PANCAM">Panoramic Camera</option>
<option value="MINITES">
Miniature Thermal Emission Spectrometer (Mini-TES)
</option>
</select> */}

<br />

<label htmlFor="earth_date">Date</label>
<br/>
<InputText
     name="earth_date"
     value={payload.earth_date}
     onChange={onChangeHandler}
     id="earth_date"
     type="date"
   />
<br />

<label htmlFor="max_sol">Maximum sol</label>
<br/>
<InputText
     name="max_sol"
     value={payload.max_sol}
     onChange={onChangeHandler}
     id="max_sol"
     type="number"
   />
<br />
<br/>
<Button type="submit" tabIndex={0}>Submit</Button>
<br/>
</form>
);
};

export default Form;