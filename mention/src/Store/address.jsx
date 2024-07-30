// import React, { useEffect, useRef, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useGetSingleAddressQuery, useUpdateAddressMutation } from './common';
// import { InputText } from 'primereact/inputtext';
// import { Menu } from 'primereact/menu';
// import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';

// function Address() {
//     const location = useLocation();
//     const [orgID, setOrgID] = useState(location.state);
//     useEffect(() => {
//       console.log(location);
//     }, [location]);
  
//     const [addre, setAddre] = useState([]);
//     const { data: singleAddData } = useGetSingleAddressQuery(location?.state, { skip: !location?.state });
//     const [addressFormData, setAddressFormData] = useState({
//         addressLine1: '',
//         addressLine2: '',
//         city: '',
//         mobileNumber: '',
//         pincode: '',
//         state: '',
//         title: ''
//     });
//     const [putAddress] = useUpdateAddressMutation();

//     useEffect(() => {
//         if (singleAddData?.success) {
//             setAddre(singleAddData.data);
//             setAddressFormData({
//                 addressLine1: '',
//                 addressLine2: '',
//                 city: '',
//                 mobileNumber: '',
//                 pincode: '',
//                 state: '',
//                 title: ''
//             });
//         }
//         console.log(singleAddData);
//     }, [singleAddData]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setAddressFormData((prevFormData) => ({
//             ...prevFormData,
//             [name]: value
//         }));
//     };

//     const [editOrg, setEditOrg] = useState(null);
//     const [showFields, setShowFields] = useState(false);
//     const handleEdit = (e,addressID) => {
//       setShowFields(true)
//       e.preventDefault()
//       const updatedAddresses = addre.map(address => 
//           address.addressID === addressID ? { ...address, ...addressFormData } : address
//       );
//       setAddre(updatedAddresses);
//   };

// const handleSubmit=async (orgID)=>{
//   let newAddress = {
//     addressLine1: addressFormData.addressLine1,
//     addressLine2: addressFormData.addressLine2,
//     city: addressFormData.city,
//     mobileNumber: addressFormData.mobileNumber,
//     pincode: addressFormData.pincode,
//     state: addressFormData.state,
//     title: addressFormData.title,
//     addressID:0
// };
 
//     }    
//     const handleDelete = (e,addressID) => {
//       e.preventDefault()
//       setAddre(addre.filter(address => address.addressID !== addressID));
//       console.log('deleted')
//   };
  

//     return (
//         <>
//             <div className="card border-0 b-r-15 overlap-card-margin mb-0">
//                 <div className="card-header bottom-color no-card-bg card-header-f">
//                     <div className="row align-items-center">
//                         <div className="col-xxl-12">
//                             <div>
//                                 <p className="font-size-18 f-600 mb-0 overflow-elipsis">
//                                     <Link to="/"><i className="pi pi-arrow-left" style={{ fontSize: '1.5rem', marginLeft: "10px" }}></i></Link>
//                                     <a className="gap">Address</a>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div>
//             {showFields&&(
//               <div>
//               <form onSubmit={handleSubmit}>
                
//                                     <div>
//                                         <label htmlFor='addressLine1'>Address Line 1</label>
//                                         <InputText id='addressLine1' tabIndex={1} onChange={handleInputChange} value={addressFormData.addressLine1} name='addressLine1' />
//                                         <br/>
//                                         <label htmlFor='addressLine2'>Address Line 2</label>
//                                         <InputText name="addressLine2" tabIndex={2} onChange={handleInputChange} value={addressFormData.addressLine2} id="addressLine2" type="text" />
//                                     </div>
//                                     <div>
//                                         <label htmlFor='city'>City</label>
//                                         <InputText name="city" tabIndex={3} id="city" onChange={handleInputChange} value={addressFormData.city} type="text" />
//                                     </div>
//                                     <div>
//                                         <label htmlFor='mobileNumber'>Mobile Number</label>
//                                         <InputText name="mobileNumber" tabIndex={4} id="mobileNumber" onChange={handleInputChange} value={addressFormData.mobileNumber} type="tel" />
//                                     </div>
//                                     <div>
//                                         <label htmlFor='pincode'>Pincode</label>
//                                         <InputText name="pincode" tabIndex={5} id="pincode" onChange={handleInputChange} value={addressFormData.pincode} type="number" />
//                                     </div>
//                                     <div>
//                                         <label htmlFor='state'>State</label>
//                                         <InputText name="state" tabIndex={6} id="state" onChange={handleInputChange} value={addressFormData.state} type="text" />
//                                     </div>
//                                     <div>
//                                         <label htmlFor='title'>Title</label>
//                                         <InputText name="title" tabIndex={7} id="title" onChange={handleInputChange} value={addressFormData.title} type="text" />
//                                     </div>
//                                     <Button type='submit' onClick={(orgID)=>handleSubmit(orgID)} label='submit'/>
                                
                
//                     </form></div> )}
//                     </div>
//                                 <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
//                                     {addre.map((d, index) => (
//                                       <div key={index}>
//                                         <Card title={d.title} key={index}>
//                                             <div>
//                                                 <p>{d.addressLine1}<br/>{d.addressLine2},{d.city}.<br/><b>Mobile Number :</b> {d.mobileNumber}<br/><b>Pincode - </b>{d.pincode},{d.state}.</p>
//                                                 <Button icon="pi pi-pen-to-square" size="small" onClick={(e) => handleEdit(e,d.addressID)} label="EDIT" />&nbsp;
//                                                 <Button icon="pi pi-trash" size="small" onClick={(e) => handleDelete(e,d.addressID)} label="DELETE" />
//                                             </div>
//                                         </Card>
//                                         <br/>
//                                         </div>
                                        
//                                     ))}
                                
//             </div>
//         </>
//     );
// };

// export default Address;
// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useGetSingleAddressQuery, useUpdateAddressMutation } from './common';
// import { InputText } from 'primereact/inputtext';
// import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';

// function Address() {
//     const location = useLocation();
//     const [orgID, setOrgID] = useState(location.state);
    
//     useEffect(() => {
//         console.log(location);
//     }, [location]);

//     const [addre, setAddre] = useState([]);
//     const { data: singleAddData } = useGetSingleAddressQuery(location?.state, { skip: !location?.state });
//     const [addressFormData, setAddressFormData] = useState({
//         addressLine1: '',
//         addressLine2: '',
//         city: '',
//         mobileNumber: '',
//         pincode: '',
//         state: '',
//         title: ''
//     });
//     const [putAddress] = useUpdateAddressMutation();
//     const [editOrg, setEditOrg] = useState(null);
//     const [showFields, setShowFields] = useState(false);

//     useEffect(() => {
//         if (singleAddData?.success) {
//             setAddre(singleAddData.data);
//             setAddressFormData({
//                 addressLine1: '',
//                 addressLine2: '',
//                 city: '',
//                 mobileNumber: '',
//                 pincode: '',
//                 state: '',
//                 title: ''
//             });
//         }
//         console.log(singleAddData);
//     }, [singleAddData]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setAddressFormData((prevFormData) => ({
//             ...prevFormData,
//             [name]: value
//         }));
//     };

//     const handleEdit = (address) => {
//         setAddressFormData(address);
//         setEditOrg(address.addressID);
//         setShowFields(true);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const updatedAddresses = addre.map(address => 
//             address.addressID === editOrg ? { ...addressFormData } : address
//         );
//         setAddre(updatedAddresses);

//         let res = await putAddress(addressFormData);
//         if (res?.data?.success) {
//             console.log('updated');
//             setShowFields(false);
//         }
//     };

//     const handleDelete = (addressID) => {
//         setAddre(addre.filter(address => address.addressID !== addressID));
//         console.log('deleted');
//     };

//     return (
//         <>
//             <div className="card border-0 b-r-15 overlap-card-margin mb-0">
//                 <div className="card-header bottom-color no-card-bg card-header-f">
//                     <div className="row align-items-center">
//                         <div className="col-xxl-12">
//                             <div>
//                                 <p className="font-size-18 f-600 mb-0 overflow-elipsis">
//                                     <Link to="/"><i className="pi pi-arrow-left" style={{ fontSize: '1.5rem', marginLeft: "10px" }}></i></Link>
//                                     <a className="gap">Address</a>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 {showFields && (
//                     <div>
//                         <form onSubmit={handleSubmit}>
//                             <div>
//                                 <label htmlFor='addressLine1'>Address Line 1</label>
//                                 <InputText id='addressLine1' tabIndex={1} onChange={handleInputChange} value={addressFormData.addressLine1} name='addressLine1' />
//                                 <br/>
//                                 <label htmlFor='addressLine2'>Address Line 2</label>
//                                 <InputText name="addressLine2" tabIndex={2} onChange={handleInputChange} value={addressFormData.addressLine2} id="addressLine2" type="text" />
//                             </div>
//                             <div>
//                                 <label htmlFor='city'>City</label>
//                                 <InputText name="city" tabIndex={3} id="city" onChange={handleInputChange} value={addressFormData.city} type="text" />
//                             </div>
//                             <div>
//                                 <label htmlFor='mobileNumber'>Mobile Number</label>
//                                 <InputText name="mobileNumber" tabIndex={4} id="mobileNumber" onChange={handleInputChange} value={addressFormData.mobileNumber} type="tel" />
//                             </div>
//                             <div>
//                                 <label htmlFor='pincode'>Pincode</label>
//                                 <InputText name="pincode" tabIndex={5} id="pincode" onChange={handleInputChange} value={addressFormData.pincode} type="number" />
//                             </div>
//                             <div>
//                                 <label htmlFor='state'>State</label>
//                                 <InputText name="state" tabIndex={6} id="state" onChange={handleInputChange} value={addressFormData.state} type="text" />
//                             </div>
//                             <div>
//                                 <label htmlFor='title'>Title</label>
//                                 <InputText name="title" tabIndex={7} id="title" onChange={handleInputChange} value={addressFormData.title} type="text" />
//                             </div>
//                             <Button type='submit' label='Submit' />
//                         </form>
//                     </div>
//                 )}
//             </div>
//             <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
//                 {addre.map((d, index) => (
//                     <div key={index}>
//                         <Card title={d.title} key={index}>
//                             <div>
//                                 <p>{d.addressLine1}<br/>{d.addressLine2},{d.city}.<br/><b>Mobile Number :</b> {d.mobileNumber}<br/><b>Pincode - </b>{d.pincode},{d.state}.</p>
//                                 <Button icon="pi pi-pen-to-square" size="small" onClick={() => handleEdit(d)} label="EDIT" />&nbsp;
//                                 <Button icon="pi pi-trash" size="small" onClick={() => handleDelete(d.addressID)} label="DELETE" />
//                             </div>
//                         </Card>
//                         <br/>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Address;

// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useGetSingleAddressQuery, useUpdateAddressMutation } from './common';
// import { InputText } from 'primereact/inputtext';
// import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';

// function Address() {
//     const location = useLocation();
//     const [orgID, setOrgID] = useState(location.state);

//     useEffect(() => {
//         console.log(location);
//     }, [location]);

//     const [addre, setAddre] = useState([]);
//     const { data: singleAddData } = useGetSingleAddressQuery(location?.state, { skip: !location?.state });
//     const [addressFormData, setAddressFormData] = useState({
//         addressID: '', // Add addressID to the initial state
//         addressLine1: '',
//         addressLine2: '',
//         city: '',
//         mobileNumber: '',
//         pincode: '',
//         state: '',
//         title: ''
//     });
//     const [putAddress] = useUpdateAddressMutation();
//     const [editOrg, setEditOrg] = useState(null);
//     const [showFields, setShowFields] = useState(false);

//     useEffect(() => {
//         if (singleAddData?.success) {
//             setAddre(singleAddData.data);
//             setAddressFormData({
//                 addressID: '',
//                 addressLine1: '',
//                 addressLine2: '',
//                 city: '',
//                 mobileNumber: '',
//                 pincode: '',
//                 state: '',
//                 title: ''
//             });
//         }
//         console.log(singleAddData);
//     }, [singleAddData]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setAddressFormData((prevFormData) => ({
//             ...prevFormData,
//             [name]: value
//         }));
//     };

//     const handleEdit = (address) => {
//         setAddressFormData(address);
//         setEditOrg(address.addressID);
//         setShowFields(true);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const updatedAddress = { ...addressFormData, addressID: editOrg };

//         let res = await putAddress(updatedAddress);

//         if (res?.data?.success) {
//             console.log('updated');
//             const updatedAddresses = addre.map(address =>
//                 address.addressID === editOrg ? updatedAddress : address
//             );
//             setAddre(updatedAddresses);
//             setShowFields(false);
//         }
//     };

//     const handleDelete = (addressID) => {
//         setAddre(addre.filter(address => address.addressID !== addressID));
//         console.log('deleted');
//     };

//     return (
//         <>
//             <div className="card border-0 b-r-15 overlap-card-margin mb-0">
//                 <div className="card-header bottom-color no-card-bg card-header-f">
//                     <div className="row align-items-center">
//                         <div className="col-xxl-12">
//                             <div>
//                                 <p className="font-size-18 f-600 mb-0 overflow-elipsis">
//                                     <Link to="/"><i className="pi pi-arrow-left" style={{ fontSize: '1.5rem', marginLeft: "10px" }}></i></Link>
//                                     <a className="gap">Address</a>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 {showFields && (
//                     <div>
//                         <form onSubmit={handleSubmit}>
//                             <div>
//                                 <label htmlFor='addressLine1'>Address Line 1</label>
//                                 <InputText id='addressLine1' tabIndex={1} onChange={handleInputChange} value={addressFormData.addressLine1} name='addressLine1' />
//                                 <br />
//                                 <label htmlFor='addressLine2'>Address Line 2</label>
//                                 <InputText name="addressLine2" tabIndex={2} onChange={handleInputChange} value={addressFormData.addressLine2} id="addressLine2" type="text" />
//                             </div>
//                             <div>
//                                 <label htmlFor='city'>City</label>
//                                 <InputText name="city" tabIndex={3} id="city" onChange={handleInputChange} value={addressFormData.city} type="text" />
//                             </div>
//                             <div>
//                                 <label htmlFor='mobileNumber'>Mobile Number</label>
//                                 <InputText name="mobileNumber" tabIndex={4} id="mobileNumber" onChange={handleInputChange} value={addressFormData.mobileNumber} type="tel" />
//                             </div>
//                             <div>
//                                 <label htmlFor='pincode'>Pincode</label>
//                                 <InputText name="pincode" tabIndex={5} id="pincode" onChange={handleInputChange} value={addressFormData.pincode} type="number" />
//                             </div>
//                             <div>
//                                 <label htmlFor='state'>State</label>
//                                 <InputText name="state" tabIndex={6} id="state" onChange={handleInputChange} value={addressFormData.state} type="text" />
//                             </div>
//                             <div>
//                                 <label htmlFor='title'>Title</label>
//                                 <InputText name="title" tabIndex={7} id="title" onChange={handleInputChange} value={addressFormData.title} type="text" />
//                             </div>
//                             <Button type='submit' label='Submit' />
//                         </form>
//                     </div>
//                 )}
//             </div>
//             <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
//                 {addre.map((d, index) => (
//                     <div key={index}>
//                         <Card title={d.title} key={index}>
//                             <div>
//                                 <p>{d.addressLine1}<br />{d.addressLine2},{d.city}.<br /><b>Mobile Number :</b> {d.mobileNumber}<br /><b>Pincode - </b>{d.pincode},{d.state}.</p>
//                                 <Button icon="pi pi-pen-to-square" size="small" onClick={() => handleEdit(d)} label="EDIT" />&nbsp;
//                                 <Button icon="pi pi-trash" size="small" onClick={() => handleDelete(d.addressID)} label="DELETE" />
//                             </div>
//                         </Card>
//                         <br />
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Address;
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGetSingleAddressQuery, useUpdateAddressMutation } from './common';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';

function Address() {
    const location = useLocation();
    const [orgID, setOrgID] = useState(location.state);
    const [addre, setAddre] = useState([]);
    const { data: singleAddData } = useGetSingleAddressQuery(location?.state, { skip: !location?.state });
    const [addressFormData, setAddressFormData] = useState({
        addressID: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        mobileNumber: '',
        pincode: '',
        state: '',
        title: '',
        isDefault:'',
    });
    const [putAddress] = useUpdateAddressMutation();
    const [editOrg, setEditOrg] = useState(null);
    const [showFields, setShowFields] = useState(false);
    const [error, setError] = useState('');
    console.log(orgID)
    useEffect(() => {
        if (singleAddData?.success) {
            setAddre(singleAddData.data);
            setAddressFormData({
                addressID: '',
                addressLine1: '',
                addressLine2: '',
                city: '',
                mobileNumber: '',
                pincode: '',
                state: '',
                title: '',
                isDefault:'',
            });
        }
        console.log(singleAddData);
    }, [singleAddData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddressFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
const handleCreate=()=>{
    setShowFields(true);
    setAddressFormData({
        addressID: 0,
        addressLine1: '',
        addressLine2: '',
        city: '',
        mobileNumber: '',
        pincode: '',
        state: '',
        title: '',
        isDefault:'',
    });
    setEditOrg(null);

}
    const handleEdit = (addressID) => {
        const addressToEdit = addre.find(addr => addr.addressID === addressID);
        if (addressToEdit) {
            setAddressFormData(addressToEdit);
            setEditOrg(addressID);
            setShowFields(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let updatedAddresses = [];

        if (editOrg) {
            updatedAddresses = addre.map(addr =>
                addr.addressID === editOrg ? { ...addr, ...addressFormData } : addr
            );
        } else {
            const addressID = addre.length > 0 ? Math.max(...addre.map(a => a.addressID)) + 1 : 1;
            const newAddress = { ...addressFormData, addressID: addressID };
            updatedAddresses = [...addre, newAddress];
        }
        const payload = { data: location?.state, addresses: updatedAddresses };
        console.log("Submitting data:", payload);

        try {
            const response = await putAddress(payload).unwrap();
            console.log("Response:", response);
            
            if (response.success) {
                setAddre(updatedAddresses);
                setShowFields(false);
            } else {
                setError('Failed to update addresses');
            }
        } catch (err) {
            console.error("Error:", err);
            setError(err.message || 'Failed to update addresses');
        }

        setAddressFormData({
            addressID: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            mobileNumber: '',
            pincode: '',
            state: '',
            title: '',
            isDefault:'',
        });
        setEditOrg(null);
    };
    const handleDefault=async (addressID)=>{
        const updatedAddress=addre.map(add=>add.addressID===addressID?
            {...add,isDefault:'Yes'}:{...add,isDefault:'No'})
        const payload = { data: location?.state, addresses: updatedAddress };
            console.log("Submitting data:", payload);
        try {
            const response = await putAddress(payload).unwrap();
            console.log("Response:", response);
            
            if (response.success) {
                setAddre(updatedAddress);
                setShowFields(false);
            } else {
                setError('Failed to update addresses');
            }
        } catch (err) {
            console.error("Error:", err);
            setError(err.message || 'Failed to update addresses');
        }
                
    }

    const handleDelete =async (addressID) => {
        setAddre(addre.filter(address => address.addressID !== addressID));
        console.log('deleted');
        const payload = { data: location?.state, addresses: addre.filter(address => address.addressID !== addressID) };
        console.log("Submitting data:", payload);
        try {
          const response = await putAddress(payload).unwrap();
          console.log("Response:", response);
          
          if (response.success) {
              setShowFields(false);
          } else {
              setError('Failed to update addresses');
          }
      } catch (err) {
          console.error("Error:", err);
          setError(err.message || 'Failed to update addresses');
      }
    };

    return (
        <>
            <div className="card border-0 b-r-15 overlap-card-margin mb-0">
                <div className="card-header bottom-color no-card-bg card-header-f">
                    <div className="row align-items-center">
                        <div className="col-xxl-12">
                            <div>
                                <p className="font-size-18 f-600 mb-0 overflow-elipsis">
                                    <Link to="/"><i className="pi pi-arrow-left" style={{ fontSize: '1.5rem', marginLeft: "10px" }}></i></Link>
                                    <a className="gap">Address</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <Button label='Create' type="button" onClick={handleCreate}/>
                {showFields && (
                    <div>
                        
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='addressLine1'>Address Line 1</label>
                                <InputText id='addressLine1' tabIndex={1} onChange={handleInputChange} value={addressFormData.addressLine1} name='addressLine1' />
                                <br />
                                <label htmlFor='addressLine2'>Address Line 2</label>
                                <InputText name="addressLine2" tabIndex={2} onChange={handleInputChange} value={addressFormData.addressLine2} id="addressLine2" type="text" />
                            </div>
                            <div>
                                <label htmlFor='city'>City</label>
                                <InputText name="city" tabIndex={3} id="city" onChange={handleInputChange} value={addressFormData.city} type="text" />
                            </div>
                            <div>
                                <label htmlFor='mobileNumber'>Mobile Number</label>
                                <InputText name="mobileNumber" tabIndex={4} id="mobileNumber" onChange={handleInputChange} value={addressFormData.mobileNumber} type="tel" />
                            </div>
                            <div>
                                <label htmlFor='pincode'>Pincode</label>
                                <InputText name="pincode" tabIndex={5} id="pincode" onChange={handleInputChange} value={addressFormData.pincode} type="number" />
                            </div>
                            <div>
                                <label htmlFor='state'>State</label>
                                <InputText name="state" tabIndex={6} id="state" onChange={handleInputChange} value={addressFormData.state} type="text" />
                            </div>
                            <div>
                                <label htmlFor='title'>Title</label>
                                <InputText name="title" tabIndex={7} id="title" onChange={handleInputChange} value={addressFormData.title} type="text" />
                            </div>
                            <div>
                                <label htmlFor='isDefault'>Is Default</label>
                                <InputText name="isDefault" tabIndex={7} id="isDefault" onChange={handleInputChange} value={addressFormData.isDefault} type="text" />
                            </div>
                            <Button type="submit">{editOrg !== null ? "Update" : "Submit"}</Button>
                        </form>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                )}
            </div>
            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {addre.map((d, index) => (
                    <div key={index}>
                        <Card title={d.title} key={index}>
                            <div>
                        {d.isDefault=='Yes'&&<Tag value="Default" severity="Default"></Tag>}

                                <p>{d.addressLine1}<br />{d.addressLine2},{d.city}.<br /><b>Mobile Number :</b> {d.mobileNumber}<br /><b>Pincode - </b>{d.pincode},{d.state}.</p>
                                <Button icon="pi pi-pen-to-square" size="small" onClick={() => handleEdit(d.addressID)} label="EDIT" />&nbsp;
                                <Button icon="pi pi-trash" size="small" onClick={() => handleDelete(d.addressID)} label="DELETE" />&nbsp;
                                <Button icon="pi pi-check-circle" size="small" label="Mark As Default" onClick={()=>handleDefault(d.addressID)}/>
                            </div>
                        </Card>
                        <br />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Address;
