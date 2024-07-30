import { useState } from "react";

function Myform(){
    const [formData,setFormData]=useState({
        Name:'',
        email:'',
        phoneno:'',
        dob:'',
        course:''
    });
    const onChangeHandler=(event)=>{
        setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
        }));
    };
    const sty1={
        color:'black',  
        position:'absolute',
        left:'40%',
        top:'10%',
        height:'600px',
        width:'400px',
        backgroundColor:'white',
        borderRadius: '8px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
     };

    const formGroupStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '15px'
    };

    const radioGroupStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '15px'
    };

    return(
        <form style={sty1} className='form'>
            <div style={formGroupStyle}>
                <label className='label'>Name:
                <input className="input" type='text' name='Name' onChange={onChangeHandler} autoComplete="off"/></label>
            </div>

            <div style={formGroupStyle}>
                <label  className='label'>Email:
                <input className="input" type="text" name='email' onChange={onChangeHandler} autoComplete="off"/></label>
            </div>

            <div style={formGroupStyle}>
                <label className='label'>Phone Number:
                <input className="input" type="number" name='phoneno' onChange={onChangeHandler} autoComplete="off"/></label>
            </div>

            <div style={formGroupStyle}>
                <label className='label'>Date of Birth:
                <input className="input" type="date" name="dob" onChange={onChangeHandler} autoComplete="off"/></label>
            </div>

            <div style={radioGroupStyle}>
                <label className='label'>Course:</label>
                <label>
                    <input type="radio" value="CSE" name="course" onChange={onChangeHandler} autoComplete="off"/> CSE</label>
                <label>
                    <input type="radio" value="ECE" name="course" onChange={onChangeHandler}/> ECE</label>
                <label>
                    <input type="radio" value="EEE" name="course" onChange={onChangeHandler}/> EEE</label>
                <label>
                    <input type="radio" value="IT" name="course" onChange={onChangeHandler}/> IT</label>
                <label>
                    <input type="radio" value="Civil" name="course" onChange={onChangeHandler}/> Civil</label>
                <label>
                    <input type="radio" value="Mech" name="course" onChange={onChangeHandler}/> Mech</label>
            </div>

            <div className="button">
                <button type='submit' onClick={() => console.log(formData)} style={{color:'blue'}}>Submit</button>
            </div>
        </form>
    );
}

export default Myform;
