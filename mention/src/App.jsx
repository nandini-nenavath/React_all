// // import React, { useState, useEffect, useRef} from "react";
// // import { InputText } from "primereact/inputtext";
// // import './App.css';
// // import axios from 'axios';
// // import orgList from "./assets/Images/pic2.jpg";
// // import "primereact/resources/themes/lara-light-cyan/theme.css";
// // import {ScrollPanel} from "primereact/scrollpanel"
// // // import { DataTable } from "primereact/datatable";
// // // import { Column } from "primereact/column";
// // // import orgListDummy from "./assets/Images/pic2.jpg";
// // // import { Dialog } from 'primereact/dialog';


// // const OrgCardsList = () => {
// //   const [org,setOrg]=useState([])
// //   const [error,setError]=useState(null);

// //     const renderHeader = () => {
// //         return (
// //             <div className="flex justify-content-between align-items-center">
// //                 <span className="p-input-icon-right w-100">
// //                     <i className="pi pi-search" />
// //                     <InputText
// //                         className="form-control h-40px shadow-none filter-search-inp figma-bg"
// //                         placeholder="Search"
// //                     />
// //                 </span>
// //             </div>
// //         );
// //     };
// //     const mystyle={
// //         listStyleType:'none',
// //         width:'300px',
// //       }
// //     // const [showAccordViewMore, setShowAccordViewMore] = useState(false);
// //     // const showAccordionViewMore = () => {
// //     //     setShowAccordViewMore(!showAccordViewMore);
// //     // };
// //     useEffect(()=>{    
// //       const fetchData = async () => {
// //       setError(null); 
  
// //       try {
// //         const response = await axios.get(
// //           `https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations?userID=120004`
// //         )
// //         setOrg(response.data.data)
// //         console.log(response.data.data)
  
// //         if (!response.ok) {
// //           throw new Error(`HTTP error: ${response.status}`);
// //         }
        

// //       } catch (error) {
// //         setError(error.message);
// //       }
      
// //     }
// //     fetchData();
// // },[])

// // const [expandedIndex, setExpandedIndex] = useState(null);

// //   const toggleViewMore = (index) => {
// //     if (expandedIndex === index) {
// //       setExpandedIndex(null);
// //     } else {
// //       setExpandedIndex(index); 
// //     }
// //   };
  

// //     return (
// //         <>
// //         {/* <div className="tab">
// //         <label htmlFor="org">Organisation ID</label>
// //         <InputText name="org"
// //         onChange={(e) => setOrg(e.target.value)}
// //         value={org}
// //         id="org"
// //         placeholder="1020"
// //         type="number"/>
       
// //       <p>{org.map((d,i) => (
// //         <div key={i}>
// //           <h3>{d.legalName}</h3>
// //         </div>
// //       ))}</p>
// //       </div> */}

// //              <div className="card border-0 b-r-15 overlap-card-margin mb-0">
// //                 <div className="card-header bottom-color no-card-bg card-header-f">
// //                     <div className="row align-items-center">
// //                         <div className="col-xxl-12">
// //                             <div className="">
// //                                 <p className="font-size-18 f-600 mb-0 overflow-elipsis">
// //                                     Organizations List
// //                                 </p>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className="card-body p-0 org-card-body-cards-list sales-scroll-bar">
// //                     <div className="p-3-f">
// //                         <div className="row">
// //                             <div className="col-5">
// //                                 <div className="f-g-1 me-2">{renderHeader()}</div>
// //                             </div>
// //                             <div className="col-7 text-end">
// //                                 <button className="btn btn-primary font-size-14"><i className="fi fi-br-plus l-h-1 v-align-middle font-size-10"></i> Create</button>
// //                                 <button className="btn btn-outline-secondary table-vch-card ms-2"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
// //                             </div>
// //                         </div>
// //                         <br/>
// //                         <br/>
// //                         <div>{org.map((d,i) => (<div key={i} tabIndex={i+1}>
                            
// //                             <div>
// //                                 <div className="m-t-20 org-cards-layout">
// //                                     <div className="card border-0 active margin-bottom-8 shadow-sm">
                                    
// //                                         <div className="card-body p-16-20" >
                                        

// //                                             <div className="d-flex justify-content-between" >
                                            
// //                                                 <div className="d-flex" >
// //                                                     <div className="org-list-img-viw mr-8" >
                                                    

// //                                                         <img src={orgList} className="c-sidebar-brand-full mobile-logo-width img-fluid" />
// //                                                     <ul style={mystyle}>
// //                                                         <li>Organization ID : {d.organizationID}</li>
// //                                                         <li>Legal Name : {d.legalName}</li>
// //                                                         {/* {d?.displayName?<li>Display Name : {d.displayName}</li>:null}
// //                                                         {d?.incorporationType?<li>Incorporation Type : {d?.incorporationType}</li>:null}
// //                                                         {d?.email?<li>Email : {d?.email}</li>:null}
// //                                                         {d?.country?<li>Country : {d?.country}</li>:null}
// //                                                         {d?.panNum?<li>PanNum : {d?.panNum}</li>:null}
// //                                                         {d?.gstin?<li>gstin : {d?.gstin}</li>:null}
// //                                                         {d?.userRoleID?<li>userRoleID : {d?.userRoleID}</li>:null}
// //                                                         {d?.roleName?<li>Role Name : {d?.roleName}</li>:null} */}
// //                                                         {expandedIndex===i ? (
// //                               <>
// //                                 {d?.displayName?<li>Display Name : {d.displayName}</li>:null}
// //                                 {d?.incorporationType?<li>Incorporation Type : {d?.incorporationType}</li>:null}
// //                                 {d?.email?<li>Email : {d?.email}</li>:null}
// //                                 {d?.country?<li>Country : {d?.country}</li>:null}
// //                                 {d?.panNum?<li>PanNum : {d?.panNum}</li>:null}
// //                                 {d?.gstin?<li>gstin : {d?.gstin}</li>:null}
// //                                 {d?.userRoleID?<li>userRoleID : {d?.userRoleID}</li>:null}
// //                                 {d?.roleName?<li>Role Name : {d?.roleName}</li>:null}
// //                               </>
// //                             ) : (
// //                               <>{d?.displayName && <li>Display Name : {d.displayName}</li>}</>
// //                             )}
// //                           </ul>
// //                           <a onClick={() => toggleViewMore(i)} className="taaab">
// //                           {expandedIndex === i ? 'View Less' : 'View More'}
// //                           </a>
                          
// //                           </div></div>
// //                                                     </div>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                     </div>
                                    

// //                                 </div>                                     
// //                                         ))}
// //                                 </div>
                        
// //                             </div>
// //                         </div>
// //                         </div>
// import React, { useState, useEffect,useRef,useCallback } from "react";
// import { InputText } from "primereact/inputtext";
// import './App.css';
// import axios from 'axios';
// import debounce from 'lodash.debounce'
// import orgList from "./assets/Images/pic2.jpg";
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import { ScrollPanel } from "primereact/scrollpanel";

// const OrgCardsList = () => {
//   const [org, setOrg] = useState([]);
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     alias: '',
//     country: '',
//     userRoleID: '',
//     gstin: '',
//     legalName: '',
//     panNum: '',
//   });
// const [searchTerm,setSearchTerm]=useState('');
// const searchTimeOutRef=useRef(null);
//   const renderHeader = () => {
//     return (
//       <div className="flex justify-content-between align-items-center">
//         <span className="p-input-icon-right w-100">
//           <i className="pi pi-search" />
//           <InputText
//             className="form-control h-40px shadow-none filter-search-inp figma-bg"
//             placeholder="Search"
//             // onChange={handleSearchChange}
//             // value={searchTerm}
//           />
//         </span>
//       </div>
//     );
//   };

//   const mystyle = {
//     listStyleType: 'none',
//     width: '300px',
//   };
//   const fetchData = async () => {
//     setError(null);

//     try {
//       const response = await axios.get(
//         `https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations?userID=120004`
//       );
//       setOrg(response.data.data);
//       console.log(response.data.data);

//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }

//     } catch (error) {
//       setError(error.message);
//     }
//   };
//   useEffect(() => {
  
//     fetchData();
//   }, []);

//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleViewMore = (index) => {
//     if (expandedIndex === index) {
//       setExpandedIndex(null);
//     } else {
//       setExpandedIndex(index);
//     }
//   };
 
//   // const handleSearchChange = (e) => {
//   //   setSearchTerm(e.target.value);
//   //   debouncedFetchData(e.target.value);
//   // };

//   // const debouncedFetchData = useCallback(debounce(fetchData, 500), []);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
    
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newOrg = {
//         alias: formData.alias,
//         country: formData.country,
//         userRoleID: Number(formData.userRoleID),
//         gstins: [
//           {
//             enableGST: "Yes",
//             gstDetailID: 0,
//             gstin: formData.gstin
//           }
//         ],
//         legalName: formData.legalName,
//         panNum: formData.panNum,
//       };
//       const response = await axios.post(
//         'https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations?userID=120004',
//         newOrg
//       );
//       if(response?.data?.success){
//         fetchData()
//       }

//     //   setOrg([...org, response.data.data]);
//       setFormData({
//         alias: '',
//         country: '',
//         userRoleID: '',
//         gstin: '',
//         legalName: '',
//         panNum: '',
//       });
//     } catch (error) {
//       setError(error.message);
//     }
//   };
//   const handleUpdate = async () => {
//     try {
//       const updatedOrg = {
//         alias: formData.alias,
//         country: formData.country,
//         userRoleID: Number(formData.userRoleID),
//         gstins: [
//           {
//             enableGST: "Yes",
//             gstDetailID: 0,
//             gstin: formData.gstin
//           }
//         ],
//         legalName: formData.legalName,
//         panNum: formData.panNum,
//       };
//       const response = await axios.put(
//         'https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations?userID=120004',
//         updatedOrg
//       );
//       if (response?.data?.success) {
//         fetchData();
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };
//   return (
//     <>
//       <div className="card border-0 b-r-15 overlap-card-margin mb-0">
//         <div className="card-header bottom-color no-card-bg card-header-f">
//           <div className="row align-items-center">
//             <div className="col-xxl-12">
//               <div className="">
//                 <p className="font-size-18 f-600 mb-0 overflow-elipsis">
//                   Organizations List
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card-body p-0 org-card-body-cards-list sales-scroll-bar">
//           <div className="p-3-f">
//             <div className="row">
//               <div className="col-5">
//                 <div className="f-g-1 me-2">{renderHeader()}</div>
//               </div>
//               <div className="col-7 text-end">
//                 <button className="btn btn-primary font-size-14"><i className="fi fi-br-plus l-h-1 v-align-middle font-size-10"></i>Create</button>
//                 <button className="btn btn-outline-secondary table-vch-card ms-2"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
//               </div>
//             </div>
//             <br />
//             <br />
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="alias">alias</label>
//                 <InputText name="alias" value={formData.alias} id="alias" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="country">Country</label>
//                 <InputText name="country" value={formData.country} id="country" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="userRoleID">userRoleID</label>
//                 <InputText name="userRoleID" value={formData.userRoleID} id="userRoleID" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="gstin">GSTIN</label>
//                 <InputText name="gstin" value={formData.gstin} id="gstin" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="legalName">Legal Name</label>
//                 <InputText name="legalName" value={formData.legalName} id="legalName" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="panNum">PAN</label>
//                 <InputText name="panNum" value={formData.pan} htmlFor="panNum" onChange={handleInputChange} />
//               </div>
//               <button type="submit" className="btn btn-primary mt-3">Add Organization</button>
//               <button type="button" onClick={handleUpdate} className="btn btn-primary mt-3">Update</button>
//             </form>
//             <div>{org.map((d, i) => (
//               <div key={i} tabIndex={i + 1}>
//                 <div>
//                   <div className="m-t-20 org-cards-layout">
//                     <div className="card border-0 active margin-bottom-8 shadow-sm">
//                       <div className="card-body p-16-20">
//                         <div className="d-flex justify-content-between">
//                           <div className="d-flex">
//                             <div className="org-list-img-viw mr-8">
//                               <img src={orgList} className="c-sidebar-brand-full mobile-logo-width img-fluid" alt="Organization Logo" />
//                               <ul style={mystyle}>
//                                 <li>Organization ID : {d.organizationID}</li>
//                                 <li>Legal Name : {d.legalName}</li>
//                                 {expandedIndex === i ? (
//                                   <>
//                                     {d?.displayName && <li>Display Name : {d.displayName}</li>}
//                                     {d?.incorporationType && <li>Incorporation Type : {d.incorporationType}</li>}
//                                     {d?.email && <li>Email : {d.email}</li>}
//                                     {d?.country && <li>Country : {d.country}</li>}
//                                     {d?.panNum && <li>PanNum : {d.panNum}</li>}
//                                     {d?.gstin && <li>gstin : {d.gstin}</li>}
//                                     {d?.userRoleID && <li>userRoleID : {d.userRoleID}</li>}
//                                     {d?.roleName && <li>Role Name : {d.roleName}</li>}
//                                   </>
//                                 ) : (
//                                   <>{d?.displayName && <li>Display Name : {d.displayName}</li>}</>
//                                 )}
//                               </ul>
//                               <a onClick={() => toggleViewMore(i)} className="taaab">
//                                 {expandedIndex === i ? 'View Less' : 'View More'}
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             </div>
//           </div>
//         </div>
//       </div>
  
// // import React, { useState, useEffect, useCallback } from "react";
// // import { InputText } from "primereact/inputtext";
// // import './App.css';
// // import axios from 'axios';
// // import debounce from 'lodash.debounce';
// // import orgList from "./assets/Images/pic2.jpg";
// // import "primereact/resources/themes/lara-light-cyan/theme.css";
// // import { ScrollPanel } from "primereact/scrollpanel";

// // const OrgCardsList = () => {
// //   const [org, setOrg] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [formData, setFormData] = useState({
// //     alias: '',
// //     country: '',
// //     userRoleID: '',
// //     gstin: '',
// //     legalName: '',
// //     panNum: '',
// //   });
// //   const [searchTerm, setSearchTerm] = useState('');

// //  const fetchData = async (search = '') => {
// //   setError(null);
// //   try {
// //     const url = `https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations?userID=120004&search=${search}`;
// //     console.log('Fetching from:', url);
// //     const response = await axios.get(url);
// //     console.log('Response:', response);
// //     setOrg(response.data.data);
// //     if (!response.data.success) {
// //       throw new Error(`Request failed with status: ${response.status}`);
// //     }
// //   } catch (error) {
// //     setError(error.message);
// //   }
// // };


// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const debouncedFetchData = useCallback(debounce((search) => fetchData(search), 500), []);

// //   const handleSearchChange = (e) => {
// //     const searchTerm = e.target.value;
// //     setSearchTerm(searchTerm);
// //     debouncedFetchData(searchTerm);
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const newOrg = {
// //         alias: formData.alias,
// //         country: formData.country,
// //         userRoleID: Number(formData.userRoleID),
// //         gstins: [
// //           {
// //             enableGST: "Yes",
// //             gstDetailID: 0,
// //             gstin: formData.gstin
// //           }
// //         ],
// //         legalName: formData.legalName,
// //         panNum: formData.panNum,
// //       };
// //       const response = await axios.post(
// //         'https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations?userID=120004',
// //         newOrg
// //       );
// //       if (response.data.success) {
// //         fetchData();
// //       }

// //       setFormData({
// //         alias: '',
// //         country: '',
// //         userRoleID: '',
// //         gstin: '',
// //         legalName: '',
// //         panNum: '',
// //       });
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   const handleUpdate = async () => {
// //     try {
// //       const updatedOrg = {
// //         alias: formData.alias,
// //         country: formData.country,
// //         userRoleID: Number(formData.userRoleID),
// //         gstins: [
// //           {
// //             enableGST: "Yes",
// //             gstDetailID: 0,
// //             gstin: formData.gstin
// //           }
// //         ],
// //         legalName: formData.legalName,
// //         panNum: formData.panNum,
// //       };
// //       const response = await axios.put(
// //         'https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations?userID=120004',
// //         updatedOrg
// //       );
// //       if (response.data.success) {
// //         fetchData();
// //       }
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   const [expandedIndex, setExpandedIndex] = useState(null);

// //   const toggleViewMore = (index) => {
// //     if (expandedIndex === index) {
// //       setExpandedIndex(null);
// //     } else {
// //       setExpandedIndex(index);
// //     }
// //   };

// //   const renderHeader = () => {
// //     return (
// //       <div className="flex justify-content-between align-items-center">
// //         <span className="p-input-icon-right w-100">
// //           <i className="pi pi-search" />
// //           <label htmlFor="search">Search</label>
// //           <InputText
// //             className="form-control h-40px shadow-none filter-search-inp figma-bg"
// //             placeholder="Search"
// //             id="search"
// //             onChange={handleSearchChange}
// //             value={searchTerm}
// //           />
// //         </span>
// //       </div>
// //     );
// //   };

// //   const mystyle = {
// //     listStyleType: 'none',
// //     width: '300px',
// //   };

// //   return (
// //     <>
// //       <div className="card border-0 b-r-15 overlap-card-margin mb-0">
// //         <div className="card-header bottom-color no-card-bg card-header-f">
// //           <div className="row align-items-center">
// //             <div className="col-xxl-12">
// //               <div className="">
// //                 <p className="font-size-18 f-600 mb-0 overflow-elipsis">
// //                   Organizations List
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
        
// //             <form onSubmit={handleSubmit}>
// //               <div>
// //                 <label htmlFor="alias">Alias</label>
// //                 <InputText name="alias" value={formData.alias} id="alias" onChange={handleInputChange} />
// //               </div>
// //               <div>
// //                 <label htmlFor="country">Country</label>
// //                 <InputText name="country" value={formData.country} id="country" onChange={handleInputChange} />
// //               </div>
// //               <div>
// //                 <label htmlFor="userRoleID">UserRoleID</label>
// //                 <InputText name="userRoleID" value={formData.userRoleID} id="userRoleID" onChange={handleInputChange} />
// //               </div>
// //               <div>
// //                 <label htmlFor="gstin">GSTIN</label>
// //                 <InputText name="gstin" value={formData.gstin} id="gstin" onChange={handleInputChange} />
// //               </div>
// //               <div>
// //                 <label htmlFor="legalName">Legal Name</label>
// //                 <InputText name="legalName" value={formData.legalName} id="legalName" onChange={handleInputChange} />
// //               </div>
// //               <div>
// //                 <label htmlFor="panNum">PAN</label>
// //                 <InputText name="panNum" value={formData.panNum} id="panNum" onChange={handleInputChange} />
// //               </div>
// //               <button type="submit" className="btn btn-primary mt-3">Add Organization</button>
// //               {/* <button type="button" onClick={handleUpdate} className="btn btn-primary mt-3">Update</button> */}
// //             </form>
// //             <div className="card-body p-0 org-card-body-cards-list sales-scroll-bar">
// //           <div className="p-3-f">
// //             <div className="row">
// //               <div className="col-5">
// //                 <div className="f-g-1 me-2">{renderHeader()}</div>
// //               </div>
// //             </div>
// //             <div>{org.map((d, i) => (
// //               <div key={i} tabIndex={i + 1}>
// //                 <div>
// //                   <div className="m-t-20 org-cards-layout">
// //                     <div className="card border-0 active margin-bottom-8 shadow-sm">
// //                       <div className="card-body p-16-20">
// //                         <div className="d-flex justify-content-between">
// //                           <div className="d-flex">
// //                             <div className="org-list-img-viw mr-8">
// //                               <img src={orgList} className="c-sidebar-brand-full mobile-logo-width img-fluid" alt="Organization Logo" />
// //                               <ul style={mystyle}>
// //                                 <li>Organization ID : {d.organizationID}</li>
// //                                 <li>Legal Name : {d.legalName}</li>
// //                                 {expandedIndex === i ? (
// //                                   <>
// //                                     {d?.displayName && <li>Display Name : {d.displayName}</li>}
// //                                     {d?.incorporationType && <li>Incorporation Type : {d.incorporationType}</li>}
// //                                     {d?.email && <li>Email : {d.email}</li>}
// //                                     {d?.country && <li>Country : {d.country}</li>}
// //                                     {d?.panNum && <li>PanNum : {d.panNum}</li>}
// //                                     {d?.gstin && <li>gstin : {d.gstin}</li>}
// //                                     {d?.userRoleID && <li>userRoleID : {d.userRoleID}</li>}
// //                                     {d?.roleName && <li>Role Name : {d.roleName}</li>}
// //                                   </>
// //                                 ) : (
// //                                   <>{d?.displayName && <li>Display Name : {d.displayName}</li>}</>
// //                                 )}
// //                               </ul>
// //                               <a onClick={() => toggleViewMore(i)} className="taaab">
// //                                 {expandedIndex === i ? 'View Less' : 'View More'}
// //                               </a>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
    


//                         {/* <p className="font-size-18 text-color-1 f-500 mb-0" style={{ lineHeight: "32px" }}>Meta Rookie for Meta</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">IY394693267492</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">johndoe@yopmail.com <button className="btn btn-link text-primary font-size-14 pt-0 pb-0 view-btns-hide" onClick={showAccordionViewMore}>View More</button></p> */}
                                        
                                        
                                        
                                        
                                        
                                        

//                                         {/*<div>
//                                             <button className="btn btn-link btn-sm text-color-1"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
//                                         </div>
//                                     </div>

//                                     {showAccordViewMore && <div className="m-t-20 pl-40">
//                                         <div className="row">
//                                             <div className="col-6 b-r-d-line">
//                                                 <div className="row margin-bottom-8">
//                                                     <div className="col-6">
//                                                         <p className="font-size-14 text-color-2 mb-0">
//                                                             Country
//                                                         </p>
//                                                     </div>
//                                                     <div className="col-6 text-end">
//                                                         <p className="font-size-14 text-color-1 mb-0">
//                                                             India
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="row margin-bottom-8">
//                                                     <div className="col-6">
//                                                         <p className="font-size-14 text-color-2 mb-0">
//                                                             Currency
//                                                         </p>
//                                                     </div>
//                                                     <div className="col-6 text-end">
//                                                         <p className="font-size-14 text-color-1 mb-0">
//                                                             Indian Rupee
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="row margin-bottom-8">
//                                                     <div className="col-6">
//                                                         <p className="font-size-14 text-color-2 mb-0">
//                                                             Registered for GST
//                                                         </p>
//                                                     </div>
//                                                     <div className="col-6 text-end">
//                                                         <p className="font-size-14 text-color-1 mb-0">
//                                                             Applicable
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-6 b-r-d-line">
//                                                 <div className="row margin-bottom-8">
//                                                     <div className="col-6">
//                                                         <p className="font-size-14 text-color-2 mb-0">
//                                                             GSTIN
//                                                         </p>
//                                                     </div>
//                                                     <div className="col-6 text-end">
//                                                         <p className="font-size-14 text-color-1 mb-0">
//                                                             DJFG93846937
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="row margin-bottom-8">
//                                                     <div className="col-6">
//                                                         <p className="font-size-14 text-color-2 mb-0">
//                                                             PAN
//                                                         </p>
//                                                     </div>
//                                                     <div className="col-6 text-end">
//                                                         <p className="font-size-14 text-color-1 mb-0">
//                                                             AP937654937
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="row margin-bottom-8">
//                                                     <div className="col-6">
//                                                         <p className="font-size-14 text-color-2 mb-0">
//                                                             State
//                                                         </p>
//                                                     </div>
//                                                     <div className="col-6 text-end">
//                                                         <p className="font-size-14 text-color-1 mb-0">
//                                                             Telangana
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>}
//                                 </div>
//                             </div>

//                             <div className="card border-0 shadow-sm margin-bottom-8 ">
//                                 <div className="card-body p-16-20">
//                                     <div className="d-flex justify-content-between">
//                                         <div className="d-flex">
//                                             <div className="org-list-img-viw mr-8">
//                                                 <img src={orgListDummy} className="c-sidebar-brand-full mobile-logo-width img-fluid" />
//                                             </div>
//                                             <div>
//                                                 <p className="font-size-18 text-color-1 f-500 mb-0" style={{ lineHeight: "32px" }}>Meta Rookie for Meta</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">IY394693267492</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">johndoe@yopmail.com <button className="btn btn-link text-primary font-size-14 pt-0 pb-0 view-btns-hide">View More</button></p>
//                                             </div>
//                                         </div>

//                                         <div>
//                                             <button className="btn btn-link btn-sm text-color-1"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="card border-0 shadow-sm margin-bottom-8 ">
//                                 <div className="card-body p-16-20">
//                                     <div className="d-flex justify-content-between">
//                                         <div className="d-flex">
//                                             <div className="org-list-img-viw mr-8">
//                                                 <img src={orgListDummy} className="c-sidebar-brand-full mobile-logo-width img-fluid" />
//                                             </div>
//                                             <div>
//                                                 <p className="font-size-18 text-color-1 f-500 mb-0" style={{ lineHeight: "32px" }}>Meta Rookie for Meta</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">IY394693267492</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">johndoe@yopmail.com <button className="btn btn-link text-primary font-size-14 pt-0 pb-0 view-btns-hide">View More</button></p>
//                                             </div>
//                                         </div>

//                                         <div>
//                                             <button className="btn btn-link btn-sm text-color-1"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="card border-0 shadow-sm margin-bottom-8 ">
//                                 <div className="card-body p-16-20">
//                                     <div className="d-flex justify-content-between">
//                                         <div className="d-flex">
//                                             <div className="org-list-img-viw mr-8">
//                                                 <img src={orgListDummy} className="c-sidebar-brand-full mobile-logo-width img-fluid" />
//                                             </div>
//                                             <div>
//                                                 <p className="font-size-18 text-color-1 f-500 mb-0" style={{ lineHeight: "32px" }}>Lotus Wireless Technologies</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">IY394693267492</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">johndoe@yopmail.com <button className="btn btn-link text-primary font-size-14 pt-0 pb-0 view-btns-hide">View More</button></p>
//                                             </div>
//                                         </div>

//                                         <div>
//                                             <button className="btn btn-link btn-sm text-color-1"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="card border-0 shadow-sm margin-bottom-8 ">
//                                 <div className="card-body p-16-20">
//                                     <div className="d-flex justify-content-between">
//                                         <div className="d-flex">
//                                             <div className="org-list-img-viw mr-8">
//                                                 <img src={orgListDummy} className="c-sidebar-brand-full mobile-logo-width img-fluid" />
//                                             </div>
//                                             <div>
//                                                 <p className="font-size-18 text-color-1 f-500 mb-0" style={{ lineHeight: "32px" }}>Kitaab Privated Limited</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">IY394693267492</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">johndoe@yopmail.com <button className="btn btn-link text-primary font-size-14 pt-0 pb-0 view-btns-hide">View More</button></p>
//                                             </div>
//                                         </div>

//                                         <div>
//                                             <button className="btn btn-link btn-sm text-color-1"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="card border-0 shadow-sm margin-bottom-8 " >
//                                 <div className="card-body p-16-20">
//                                     <div className="d-flex justify-content-between">
//                                         <div className="d-flex">
//                                             <div className="org-list-img-viw mr-8">
//                                                 <img src={orgListDummy} className="c-sidebar-brand-full mobile-logo-width img-fluid" />
//                                             </div>
//                                             <div>
//                                                 <p className="font-size-18 text-color-1 f-500 mb-0" style={{ lineHeight: "32px" }}>Finsights India Private Limited</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">IY394693267492</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">johndoe@yopmail.com <button className="btn btn-link text-primary font-size-14 pt-0 pb-0 view-btns-hide">View More</button></p>
//                                             </div>
//                                         </div>

//                                         <div>
//                                             <button className="btn btn-link btn-sm text-color-1"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="card border-0 shadow-sm margin-bottom-8 ">
//                                 <div className="card-body p-16-20">
//                                     <div className="d-flex justify-content-between">
//                                         <div className="d-flex">
//                                             <div className="org-list-img-viw mr-8">
//                                                 <img src={orgListDummy} className="c-sidebar-brand-full mobile-logo-width img-fluid" />
//                                             </div>
//                                             <div>
//                                                 <p className="font-size-18 text-color-1 f-500 mb-0" style={{ lineHeight: "32px" }}>Meta Rookie for Meta</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">IY394693267492</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">johndoe@yopmail.com <button className="btn btn-link text-primary font-size-14 pt-0 pb-0 view-btns-hide">View More</button></p>
//                                             </div>
//                                         </div>

//                                         <div>
//                                             <button className="btn btn-link btn-sm text-color-1"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="card border-0 shadow-sm margin-bottom-8 ">
//                                 <div className="card-body p-16-20">
//                                     <div className="d-flex justify-content-between">
//                                         <div className="d-flex">
//                                             <div className="org-list-img-viw mr-8">
//                                                 <img src={orgListDummy} className="c-sidebar-brand-full mobile-logo-width img-fluid" />
//                                             </div>
//                                             <div>
//                                                 <p className="font-size-18 text-color-1 f-500 mb-0" style={{ lineHeight: "32px" }}>Meta Rookie for Meta</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">IY394693267492</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">johndoe@yopmail.com <button className="btn btn-link text-primary font-size-14 pt-0 pb-0 view-btns-hide">View More</button></p>
//                                             </div>
//                                         </div>

//                                         <div>
//                                             <button className="btn btn-link btn-sm text-color-1"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="card border-0 shadow-sm margin-bottom-8 ">
//                                 <div className="card-body p-16-20">
//                                     <div className="d-flex justify-content-between">
//                                         <div className="d-flex">
//                                             <div className="org-list-img-viw mr-8">
//                                                 <img src={orgListDummy} className="c-sidebar-brand-full mobile-logo-width img-fluid" />
//                                             </div>
//                                             <div>
//                                                 <p className="font-size-18 text-color-1 f-500 mb-0" style={{ lineHeight: "32px" }}>Meta Rookie for Meta</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">IY394693267492</p>
//                                                 <p className="text-color-3 mb-0 font-size-14">johndoe@yopmail.com <button className="btn btn-link text-primary font-size-14 pt-0 pb-0 view-btns-hide">View More</button></p>
//                                             </div>
//                                         </div>

//                                         <div>
//                                             <button className="btn btn-link btn-sm text-color-1"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//                 <div className={"card-footer no-card-bg p-l-24 box-top-shadow text-start"}>
//                     <div className="d-flex justify-content-between align-items-center">
//                         <div>
//                             <div>
//                                 <p className="font-size-12 text-color-3 mb-0">Showing 15 of 200 entries</p>
//                             </div>
//                         </div>
//                         <div>
//                             <div className="card table-vch-card b-r-8">
//                                 <div className="card-body p-1">
//                                     <div className="d-flex justify-content-between align-items-center">
//                                         <div className="b-r-d-line">
//                                             <button className="btn btn-link text-color-3 btn-sm pt-1 pb-1"><i className="fi fi-bs-angle-left l-h-1 v-align-middle font-size-12"></i></button>
//                                         </div>
//                                         <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
//                                             <p className="font-size-12 text-color-3 mb-0">1/12</p>
//                                         </div>
//                                         <div className="b-l-d-line">
//                                             <button className="btn btn-link text-color-3 btn-sm pt-1 pb-1"><i className="fi fi-bs-angle-right l-h-1 v-align-middle font-size-12"></i></button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}



//         </>
//     );
// };

// export default OrgCardsList;
// import React, { useState, useEffect,useRef,useCallback } from "react";
// import { InputText } from "primereact/inputtext";
// import './App.css';
// import axios from 'axios';
// import debounce from 'lodash.debounce'
// import orgList from "./assets/Images/pic2.jpg";
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import { ScrollPanel } from "primereact/scrollpanel";

// const OrgCardsList = () => {
//   const [org, setOrg] = useState([]);
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     alias: '',
//     country: '',
//     userRoleID: '',
//     gstin: '',
//     legalName: '',
//     panNum: '',
//   });
// const [searchTerm,setSearchTerm]=useState('');
// const searchTimeOutRef=useRef(null);
//   const renderHeader = () => {
//     return (
//       <div className="flex justify-content-between align-items-center">
//         <span className="p-input-icon-right w-100">
//           <i className="pi pi-search" />
//           <InputText
//             className="form-control h-40px shadow-none filter-search-inp figma-bg"
//             placeholder="Search"
//             // onChange={handleSearchChange}
//             // value={searchTerm}
//           />
//         </span>
//       </div>
//     );
//   };

//   const mystyle = {
//     listStyleType: 'none',
//     width: '300px',
//   };
//   const fetchData = async () => {
//     setError(null);

//     try {
//       const response = await axios.get(
//         'https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations?userID=120004'
//       );
//       setOrg(response.data.data);
//       console.log(response.data.data);

//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }

//     } catch (error) {
//       setError(error.message);
//     }
//   };
//   useEffect(() => {
  
//     fetchData();
//   }, []);

//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleViewMore = (index) => {
//     if (expandedIndex === index) {
//       setExpandedIndex(null);
//     } else {
//       setExpandedIndex(index);
//     }
//   };
 
//   // const handleSearchChange = (e) => {
//   //   setSearchTerm(e.target.value);
//   //   debouncedFetchData(e.target.value);
//   // };

//   // const debouncedFetchData = useCallback(debounce(fetchData, 500), []);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
    
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newOrg = {
//         alias: formData.alias,
//         country: formData.country,
//         userRoleID: Number(formData.userRoleID),
//         gstins: [
//           {
//             enableGST: "Yes",
//             gstDetailID: 0,
//             gstin: formData.gstin
//           }
//         ],
//         legalName: formData.legalName,
//         panNum: formData.panNum,
//       };
//       const response = await axios.post(
//         'https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations?userID=120004',
//         newOrg
//       );
//       if(response?.data?.success){
//         fetchData()
//       }

//     //   setOrg([...org, response.data.data]);
//       setFormData({
//         alias: '',
//         country: '',
//         userRoleID: '',
//         gstin: '',
//         legalName: '',
//         panNum: '',
//       });
//     } catch (error) {
//       setError(error.message);
//     }
//   };
//   return (
//     <>
//       <div className="card border-0 b-r-15 overlap-card-margin mb-0">
//         <div className="card-header bottom-color no-card-bg card-header-f">
//           <div className="row align-items-center">
//             <div className="col-xxl-12">
//               <div className="">
//                 <p className="font-size-18 f-600 mb-0 overflow-elipsis">
//                   Organizations List
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card-body p-0 org-card-body-cards-list sales-scroll-bar">
//           <div className="p-3-f">
//             <div className="row">
//               <div className="col-5">
//                 <div className="f-g-1 me-2">{renderHeader()}</div>
//               </div>
//               <div className="col-7 text-end">
//                 <button className="btn btn-primary font-size-14"><i className="fi fi-br-plus l-h-1 v-align-middle font-size-10"></i>Create</button>
//                 <button className="btn btn-outline-secondary table-vch-card ms-2"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
//               </div>
//             </div>
//             <br />
//             <br />
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="alias">alias</label>
//                 <InputText name="alias" value={formData.alias} id="alias" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="country">Country</label>
//                 <InputText name="country" value={formData.country} id="country" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="userRoleID">userRoleID</label>
//                 <InputText name="userRoleID" value={formData.userRoleID} id="userRoleID" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="gstin">GSTIN</label>
//                 <InputText name="gstin" value={formData.gstin} id="gstin" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="legalName">Legal Name</label>
//                 <InputText name="legalName" value={formData.legalName} id="legalName" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="panNum">PAN</label>
//                 <InputText name="panNum" value={formData.pan} htmlFor="panNum" onChange={handleInputChange} />
//               </div>
//               <button type="submit" className="btn btn-primary mt-3">Add Organization</button>
             
//             </form>
//             <div>{org.map((d, i) => (
//               <div key={i} tabIndex={i + 1}>
//                 <div>
//                   <div className="m-t-20 org-cards-layout">
//                     <div className="card border-0 active margin-bottom-8 shadow-sm">
//                       <div className="card-body p-16-20">
//                         <div className="d-flex justify-content-between">
//                           <div className="d-flex">
//                             <div className="org-list-img-viw mr-8">
//                               <img src={orgList} className="c-sidebar-brand-full mobile-logo-width img-fluid" alt="Organization Logo" />
//                               <ul style={mystyle}>
//                                 <li>Organization ID : {d.organizationID}</li>
//                                 <li>Legal Name : {d.legalName}</li>
//                                 {expandedIndex === i ? (
//                                   <>
//                                     {d?.displayName && <li>Display Name : {d.displayName}</li>}
//                                     {d?.incorporationType && <li>Incorporation Type : {d.incorporationType}</li>}
//                                     {d?.email && <li>Email : {d.email}</li>}
//                                     {d?.country && <li>Country : {d.country}</li>}
//                                     {d?.panNum && <li>PanNum : {d.panNum}</li>}
//                                     {d?.gstin && <li>gstin : {d.gstin}</li>}
//                                     {d?.userRoleID && <li>userRoleID : {d.userRoleID}</li>}
//                                     {d?.roleName && <li>Role Name : {d.roleName}</li>}
//                                   </>
//                                 ) : (
//                                   <>{d?.displayName && <li>Display Name : {d.displayName}</li>}</>
//                                 )}
//                               </ul>
//                               <a onClick={() => toggleViewMore(i)} className="taaab">
//                                 {expandedIndex === i ? 'View Less' : 'View More'}
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       </>
//   );
// }
// export default OrgCardsList;
// import React, { useState, useEffect,useMemo, useCallback } from "react";
// import { InputText } from "primereact/inputtext";
// import './App.css';
// import axios from 'axios';
// import orgList from "./assets/Images/pic2.jpg";
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import { ScrollPanel } from "primereact/scrollpanel";
// import debounce from "lodash.debounce";

// const OrgCardsList = () => {
//   const [org, setOrg] = useState([]);
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     alias: '',
//     country: '',
//     userRoleID: '',
//     gstin: '',
//     legalName: '',
//     pan: '',
//   });
//   const [editIndex, setEditIndex] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const renderHeader = () => {
//     return (
//       <div className="flex justify-content-between align-items-center">
//         <span className="p-input-icon-right w-100">
//           <i className="pi pi-search" />
//           <InputText
//             className="form-control h-40px shadow-none filter-search-inp figma-bg"
//             placeholder="Search"
//             onChange={(e) => setSearchTerm(e.target.value)}
//             value={searchTerm}
//           />
//         </span>
//       </div>
//     );
//   };

//   const mystyle = {
//     listStyleType: 'none',
//     width: '300px',
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       setError(null);

//       try {
//         const response = await axios.get(
//           `https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations?userID=120004`
//         );
//         setOrg(response.data.data);
//         console.log(response.data.data);

//         if (!response.ok) {
//           throw new Error(`HTTP error: ${response.status}`);
//         }

//       } catch (error) {
//         setError(error.message);
//       }
//     };
//     fetchData();
//   }, []);

//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleViewMore = (index) => {
//     if (expandedIndex === index) {
//       setExpandedIndex(null);
//     } else {
//       setExpandedIndex(index);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };
//   const handleEdit =async (organizationID) => {
//     try {
//       const newOrg = {
//         alias: formData.alias,
//         country: formData.country,
//         userRoleID: Number(formData.userRoleID),
//         gstins: [
//           {
//             enableGST: "Yes",
//             gstDetailID: 0,
//             gstin: formData.gstin
//           }
//         ],
//         legalName: formData.legalName,
//         pan: formData.pan,
//       };
// const header={
//   'X-Organization-Id':1020,
// }
//       const response = await axios.put(
//         `https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations/${organizationID}?userID=120004`,
//         newOrg,{headers:header}
//       );
// if(response?.data?.success){
//   fetchData();
// }
//       // setOrg([...org, response.data.data]);
//       setFormData({
//         alias: '',
//         country: '',
//         userRoleID: '',
//         gstin: '',
//         legalName: '',
//         pan: '',
//       });
//     } catch (error) {
//       setError(error.message);
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newOrg = {
//         alias: formData.alias,
//         country: formData.country,
//         userRoleID: Number(formData.userRoleID),
//         gstins: [
//           {
//             enableGST: "Yes",
//             gstDetailID: 0,
//             gstin: formData.gstin
//           }
//         ],
//         legalName: formData.legalName,
//         pan: formData.pan,
//       };

//       const response = await axios.post(
//         'https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations?userID=120004',
//         newOrg
//       );
// if(response?.data?.success){
//   fetchData();
// }
//       // setOrg([...org, response.data.data]);
//       setFormData({
//         alias: '',
//         country: '',
//         userRoleID: '',
//         gstin: '',
//         legalName: '',
//         pan: '',
//       });
//     } catch (error) {
//       setError(error.message);
//     }
//   };
// //   const handleUpdate = async (e,orgId) => {
// //     e.preventDefault();
// //     try {
// //       const newOrg = {
// //         alias: formData.alias,
// //         country: formData.country,
// //         userRoleID: Number(formData.userRoleID),
// //         gstins: [
// //           {
// //             enableGST: "Yes",
// //             gstDetailID: 0,
// //             gstin: formData.gstin
// //           }
// //         ],
// //         legalName: formData.legalName,
// //         pan: formData.pan,
// //       };
// // const header={
// //   'X-Organization-Id':1020,
// // }
// //       const response = await axios.put(
// //         `https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations/${orgId}?userID=120004`,
// //         newOrg,{headers:header}
// //       );
// // if(response?.data?.success){
// //   fetchData();
// // }
// //       // setOrg([...org, response.data.data]);
// //       setFormData({
// //         alias: '',
// //         country: '',
// //         userRoleID: '',
// //         gstin: '',
// //         legalName: '',
// //         pan: '',
// //       });
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };
//   const filteredOrgs =org.filter((d) =>
//     d.organizationID.toString().includes(searchTerm) ||
//     d.legalName.toLowerCase().includes(searchTerm.toLowerCase())
    
//   )
//   return (
//     <>
//       <div className="card border-0 b-r-15 overlap-card-margin mb-0">
//         <div className="card-header bottom-color no-card-bg card-header-f">
//           <div className="row align-items-center">
//             <div className="col-xxl-12">
//               <div className="">
//                 <p className="font-size-18 f-600 mb-0 overflow-elipsis">
//                   Organizations List
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card-body p-0 org-card-body-cards-list sales-scroll-bar">
//           <div className="p-3-f">
//             <div className="row">
//               <div className="col-5">
//                 <div className="f-g-1 me-2">{renderHeader()}</div>
//               </div>
//               <div className="col-7 text-end">
//                 <button className="btn btn-primary font-size-14"><i className="fi fi-br-plus l-h-1 v-align-middle font-size-10"></i> Create</button>
//                 <button className="btn btn-outline-secondary table-vch-card ms-2"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
//               </div>
//             </div>
//             <br />
//             <br />
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="alias">alias</label>
//                 <InputText name="alias" value={formData.alias} id="alias" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="country">Country</label>
//                 <InputText name="country" value={formData.country} id="country" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="userRoleID">userRoleID</label>
//                 <InputText name="userRoleID" value={formData.userRoleID} id="userRoleID" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="gstin">GSTIN</label>
//                 <InputText name="gstin" value={formData.gstin} id="gstin" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="legalName">Legal Name</label>
//                 <InputText name="legalName" value={formData.legalName} id="legalName" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="pan">PAN</label>
//                 <InputText name="pan" value={formData.pan} htmlFor="pan" onChange={handleInputChange} />
//               </div>
//               <button type="submit" className="btn btn-primary mt-3">Add Organization</button>
//               {/* <button type="submit" onClick={(e)=>handleUpdate(e,formData?.organizationID)} className="btn btn-primary mt-3">Update</button> */}
//             </form>
//             <div>{filteredOrgs.map((d, i) => (
//               <div key={i} tabIndex={i + 1}>
//                 <div>
//                   <div className="m-t-20 org-cards-layout">
//                     <div className="card border-0 active margin-bottom-8 shadow-sm">
//                       <div className="card-body p-16-20">
//                         <div className="d-flex justify-content-between">
//                           <div className="d-flex">
//                             <div className="org-list-img-viw mr-8">
//                               <img src={orgList} className="c-sidebar-brand-full mobile-logo-width img-fluid" alt="Organization Logo" />
//                               <ul style={mystyle}>
//                                 <li>Organization ID : {d.organizationID}</li>
//                                 <li>Legal Name : {d.legalName}</li>
                                
//                                 {expandedIndex === i ? (
//                                   <>
//                                     {d?.displayName && <li>Display Name : {d.displayName}</li>}
//                                     {d?.incorporationType && <li>Incorporation Type : {d.incorporationType}</li>}
//                                     {d?.email && <li>Email : {d.email}</li>}
//                                     {d?.country && <li>Country : {d.country}</li>}
//                                     {d?.panNum && <li>PanNum : {d.panNum}</li>}
//                                     {d?.gstin && <li>gstin : {d.gstin}</li>}
//                                     {d?.userRoleID && <li>userRoleID : {d.userRoleID}</li>}
//                                     {d?.roleName && <li>Role Name : {d.roleName}</li>}
//                                     <ul>
//                                   <li style={mystyle}><button onClick={handleEdit}>EDIT</button></li>
//                                   </ul>
//                                   </>
//                                 ) : (
//                                   <>{d?.displayName && <li>Display Name : {d.displayName}</li>}
                                  
//                                   </>
//                                 )}
//                               </ul>
//                               <a onClick={() => toggleViewMore(i)} className="taaab">
//                                 {expandedIndex === i ? 'View Less' : 'View More'}
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       </>
//   )}
// export default OrgCardsList;
// import React, { useState, useEffect,useMemo, useCallback } from "react";
// import { InputText } from "primereact/inputtext";
// import './App.css';
// import axios from 'axios';
// import orgList from "./assets/Images/pic2.jpg";
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import { ScrollPanel } from "primereact/scrollpanel";
// import debounce from "lodash.debounce";

// const OrgCardsList = () => {
//   const [org, setOrg] = useState([]);
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     alias: '',
//     country: '',
//     userRoleID: '',
//     gstin: '',
//     legalName: '',
//     pan: '',
//   });
//   const [editIndex, setEditIndex] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const renderHeader = () => {
//     return (
//       <div className="flex justify-content-between align-items-center">
//         <span className="p-input-icon-right w-100">
//           <i className="pi pi-search" />
//           <InputText
//             className="form-control h-40px shadow-none filter-search-inp figma-bg"
//             placeholder="Search"
//             onChange={(e) => setSearchTerm(e.target.value)}
//             value={searchTerm}
//           />
//         </span>
//       </div>
//     );
//   };

//   const mystyle = {
//     listStyleType: 'none',
//     width: '300px',
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       setError(null);

//       try {
//         const response = await axios.get(
//           `https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations?userID=120004`
//         );
//         setOrg(response.data.data);
//         console.log(response.data.data);

//         if (!response.ok) {
//           throw new Error(`HTTP error: ${response.status}`);
//         }

//       } catch (error) {
//         setError(error.message);
//       }
//     };
//     fetchData();
//   }, []);

//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleViewMore = (index) => {
//     if (expandedIndex === index) {
//       setExpandedIndex(null);
//     } else {
//       setExpandedIndex(index);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };
//   const handleEdit =async (organizationID) => {
//     setEditIndex(organizationID)
//     try {
//       const newOrg = {
//         alias: formData.alias,
//         country: formData.country,
//         userRoleID: Number(formData.userRoleID),
//         gstins: [
//           {
//             enableGST: "Yes",
//             gstDetailID: 0,
//             gstin: formData.gstin
//           }
//         ],
//         legalName: formData.legalName,
//         pan: formData.pan,
//       };
// const header={
//   'X-Organization-Id':1020,
// }
//       const response = await axios.put(
//         `https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations/${organizationID}?userID=120004`,
//         newOrg,{headers:header}
//       );
// if(response?.data?.success){
//   fetchData();
// }
//       // setOrg([...org, response.data.data]);
//       setFormData({
//         alias: '',
//         country: '',
//         userRoleID: '',
//         gstin: '',
//         legalName: '',
//         pan: '',
//       });
//     } catch (error) {
//       setError(error.message);
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newOrg = {
//         alias: formData.alias,
//         country: formData.country,
//         userRoleID: Number(formData.userRoleID),
//         gstins: [
//           {
//             enableGST: "Yes",
//             gstDetailID: 0,
//             gstin: formData.gstin
//           }
//         ],
//         legalName: formData.legalName,
//         pan: formData.pan,
//       };

//       const response = await axios.post(
//         'https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations?userID=120004',
//         newOrg
//       );
// if(response?.data?.success){
//   fetchData();
// }
//       // setOrg([...org, response.data.data]);
//       setFormData({
//         alias: '',
//         country: '',
//         userRoleID: '',
//         gstin: '',
//         legalName: '',
//         pan: '',
//       });
//     } catch (error) {
//       setError(error.message);
//     }
//   };
// //   const handleUpdate = async (e,orgId) => {
// //     e.preventDefault();
// //     try {
// //       const newOrg = {
// //         alias: formData.alias,
// //         country: formData.country,
// //         userRoleID: Number(formData.userRoleID),
// //         gstins: [
// //           {
// //             enableGST: "Yes",
// //             gstDetailID: 0,
// //             gstin: formData.gstin
// //           }
// //         ],
// //         legalName: formData.legalName,
// //         pan: formData.pan,
// //       };
// // const header={
// //   'X-Organization-Id':1020,
// // }
// //       const response = await axios.put(
// //         `https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations/${orgId}?userID=120004`,
// //         newOrg,{headers:header}
// //       );
// // if(response?.data?.success){
// //   fetchData();
// // }
// //       // setOrg([...org, response.data.data]);
// //       setFormData({
// //         alias: '',
// //         country: '',
// //         userRoleID: '',
// //         gstin: '',
// //         legalName: '',
// //         pan: '',
// //       });
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };
//   const filteredOrgs =org.filter((d) =>
//     d.organizationID.toString().includes(searchTerm) ||
//     d.legalName.toLowerCase().includes(searchTerm.toLowerCase())||
//     d.displayName.toLowerCase().includes(searchTerm.toLowerCase())
    
//   )
//   return (
//     <>
//       <div className="card border-0 b-r-15 overlap-card-margin mb-0">
//         <div className="card-header bottom-color no-card-bg card-header-f">
//           <div className="row align-items-center">
//             <div className="col-xxl-12">
//               <div className="">
//                 <p className="font-size-18 f-600 mb-0 overflow-elipsis">
//                   Organizations List
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card-body p-0 org-card-body-cards-list sales-scroll-bar">
//           <div className="p-3-f">
//             <div className="row">
//               <div className="col-5">
//                 <div className="f-g-1 me-2">{renderHeader()}</div>
//               </div>
//               <div className="col-7 text-end">
//                 <button className="btn btn-primary font-size-14"><i className="fi fi-br-plus l-h-1 v-align-middle font-size-10"></i> Create</button>
//                 <button className="btn btn-outline-secondary table-vch-card ms-2"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
//               </div>
//             </div>
//             <br />
//             <br />
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="alias">alias</label>
//                 <InputText name="alias" value={formData.alias} id="alias" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="country">Country</label>
//                 <InputText name="country" value={formData.country} id="country" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="userRoleID">userRoleID</label>
//                 <InputText name="userRoleID" value={formData.userRoleID} id="userRoleID" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="gstin">GSTIN</label>
//                 <InputText name="gstin" value={formData.gstin} id="gstin" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="legalName">Legal Name</label>
//                 <InputText name="legalName" value={formData.legalName} id="legalName" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="pan">PAN</label>
//                 <InputText name="pan" value={formData.pan} htmlFor="pan" onChange={handleInputChange} />
//               </div>
//               <button type="submit" className="btn btn-primary mt-3">{editIndex!==null?  "Update":"Submit"}</button>
//               {/* <button type="submit" onClick={handleEdit} className="btn btn-primary mt-3">Update</button> */}
//             </form>
//             <div>{filteredOrgs.map((d, i) => (
//               <div key={i} tabIndex={i + 1}>
//                 <div>
//                   <div className="m-t-20 org-cards-layout">
//                     <div className="card border-0 active margin-bottom-8 shadow-sm">
//                       <div className="card-body p-16-20">
//                         <div className="d-flex justify-content-between">
//                           <div className="d-flex">
//                             <div className="org-list-img-viw mr-8">
//                               <img src={orgList} className="c-sidebar-brand-full mobile-logo-width img-fluid" alt="Organization Logo" />
//                               <ul style={mystyle}>
//                                 <li>Organization ID : {d.organizationID}</li>
//                                 <li>Legal Name : {d.legalName}</li>
                                
//                                 {expandedIndex === i ? (
//                                   <>
//                                     {d?.displayName && <li>Display Name : {d.displayName}</li>}
//                                     {d?.incorporationType && <li>Incorporation Type : {d.incorporationType}</li>}
//                                     {d?.email && <li>Email : {d.email}</li>}
//                                     {d?.country && <li>Country : {d.country}</li>}
//                                     {d?.panNum && <li>PanNum : {d.panNum}</li>}
//                                     {d?.gstin && <li>gstin : {d.gstin}</li>}
//                                     {d?.userRoleID && <li>userRoleID : {d.userRoleID}</li>}
//                                     {d?.roleName && <li>Role Name : {d.roleName}</li>}
//                                     <ul>
//                                   <li style={mystyle}><button onClick={()=>handleEdit(formData.organizationID)}>EDIT</button></li>
//                                   </ul>
//                                   </>
//                                 ) : (
//                                   <>{d?.displayName && <li>Display Name : {d.displayName}</li>}
                                  
//                                   </>
//                                 )}
//                               </ul>
//                               <a onClick={() => toggleViewMore(i)} className="taaab">
//                                 {expandedIndex === i ? 'View Less' : 'View More'}
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       </>
//   )}
// export default OrgCardsList;
// import React, { useState, useEffect, useRef } from "react";
// import { InputText } from "primereact/inputtext";
// import './App.css';
// import orgList from "./assets/Images/pic2.jpg";
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import useDebounce from "./util";
// import 'primeicons/primeicons.css';
// import {FloatLabel} from 'primereact/floatlabel'
// import {Calendar} from 'primereact/calendar'
// import { Toast } from 'primereact/toast';
// import {ConfirmDialog,confirmDialog} from 'primereact/confirmdialog'
// import { useDeleteOrgMutation, useGetAllOrganizationsQuery, usePostOrgMutation, useUpdateOrgMutation } from "./Store/common";
// import { Button } from "primereact/button";
// import { Link, useNavigate } from "react-router-dom";
// const OrgCardsList = () => {

//   const [org, setOrg] = useState([]);
//   const [error, setError] = useState(null);
//   const [postOrg1] = usePostOrgMutation()
//   const [putOrg1]=useUpdateOrgMutation()
//   const today = new Date();

//   // const formattedToday = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
//   const formattedToday = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

//   console.log(formattedToday)
//   // let day = date1.getDate();
//   // let month = date1.getMonth() + 1;
//   // let year = date1.getFullYear();
  
//   // let today = `${day}-${month}-${year}`;
//   const {
//     data: allProductsData,
    
//   } = useGetAllOrganizationsQuery();

//     useEffect(()=>{
//    if(allProductsData?.success){
//     setOrg(allProductsData?.data)
//    }
//   },[allProductsData])

//   console.log(allProductsData);
//   const [formData, setFormData] = useState({
//     alias: '',
//     country: '',
//     applicableFrom: formattedToday ,
//     gstin: '',
//     legalName: '',
//     pan: '',
//   });
//   const [editOrg, setEditOrg] = useState(null);
//   const [deleteOrg]=useDeleteOrgMutation()
//   const [searchTerm, setSearchTerm] = useState("");
//   const nova = useDebounce(searchTerm,200)
//   const renderHeader = () => {
//     return (
//       <div className="flex justify-content-between align-items-center">
//         <div className="gaaap">
        
//         <span className="p-input-icon-right w-100">
//         <FloatLabel>
//           <InputText
//             className="form-control h-40px shadow-none filter-search-inp figma-bg"
//             id="search"
//             onChange={(e) => setSearchTerm(e.target.value)}
//             value={searchTerm}
//           />
//           <label htmlFor="search">Search</label>
//           </FloatLabel>
//         </span>
        
//         </div>
//       </div>
//     );
//   };
  
//   const mystyle= {
//     listStyleType: 'none',
//     width: '300px',
//     marginLeft:'10px'
//   };
 
// const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleViewMore = (index) => {
//     if (expandedIndex === index) {
//       setExpandedIndex(null);
//     } else {
//       setExpandedIndex(index);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value
//     }));
//   };
//   const handleEdit = (organizationID) => {
//     const orgNew = org.find(o => o.organizationID === organizationID);
//     setFormData({
//       alias: orgNew.alias|| '',
//       country: orgNew.country || '',
//       applicableFrom: orgNew.applicableFrom || formattedToday,
//       gstin: orgNew.gstin || '',
//       legalName: orgNew.legalName || '',
//       pan: orgNew.pan || '',
//       organizationID:orgNew.organizationID
//     });
//     setEditOrg(organizationID);
//   };
//   const accept=async (organizationID)=>{
//     try{
    
//       console.log(organizationID)
      
//       let res = await deleteOrg(organizationID)
//       if(res?.data?.success){
//         console.log('Deleted Org')
//         toast.current.show({ severity: 'info', summary: 'Deleted', detail: 'you have deleted an orgID', life: 3000 });
//       }
//   }catch (error) {
//       setError(error.message);
//     }
//   }
//   const reject=()=>{
//     toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
//   }
//   const confirm1 = (organizationID) => {
//     confirmDialog({
//         message: 'Are you sure you want to proceed?',
//         header: 'Confirmation',
//         icon: 'pi pi-exclamation-triangle',
//         accept:()=>accept(organizationID),
//         reject,     
//         })
//         }
      
//     const toast = useRef(null);
//     const handleCogKeyDown = (event, organizationID) => {
//       if (event.altKey && event.key === 'a') {
//         navigate('/Cog', { state: organizationID });
//       }
//     };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let newOrg = {
//         alias: formData.alias,
//         country: formData.country,
//         applicableFrom: formData.applicableFrom,
//         gstins: [
//           {
//             enableGST: "Yes",
//             gstDetailID: 0,
//             gstin: formData.gstin
//           }
//         ],
//         legalName: formData.legalName,
//         pan: formData.pan,
//         organizationID:formData?.organizationID
//       };

//       if (!editOrg) {
//  delete newOrg['organizationID']
//        let res = await postOrg1(newOrg)
//        if(res?.data?.success){
//         console.log('Created Org')
//         toast.current.show({severity: 'success', summary: 'Success', detail: 'Successfully posted the data',life: 3000});
       
        
//        }
//       } else {
        
//         let res=await putOrg1(newOrg)
//         if(res?.data?.success){
//           console.log('Updated Org')
//           toast.current.show({severity: 'success', summary: 'Updated', detail: 'Successfully updated the data',life: 3000});
//         }
//       }

//       setFormData({
//         alias: '',
//         country: '',
//         applicableFrom: formattedToday,
//         gstin: '',
//         legalName: '',
//         pan: '',
//       });
//     setEditOrg(null)
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const filteredOrgs = org.filter((d) =>
//     d.organizationID.toString().includes(nova) 
//   );
// const navigate = useNavigate()
//   return (
//     <>
//       <div className="card border-0 b-r-15 overlap-card-margin mb-0">
//         <div className="card-header bottom-color no-card-bg card-header-f">
//           <div className="row align-items-center">
//             <div className="col-xxl-12">
//               <div className="">
//                 <p className="font-size-18 f-600 mb-0 overflow-elipsis">
//                   Organizations List
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card-body p-0 org-card-body-cards-list sales-scroll-bar">
//             <div className="row">
//               <div className="col-5">
//                 <div className="f-g-1 me-2">{renderHeader()}</div>
//               </div>
//               {/* <div className="col-7 text-end">
//                 <button className="btn btn-primary font-size-14"><i className="fi fi-br-plus l-h-1 v-align-middle font-size-10"></i> Create</button>
//                  <button className="btn btn-outline-secondary table-vch-card ms-2"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
//               </div> */}
//             </div>
//             <br />
//             <br />
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="alias">Alias</label>
//                 <br/>
//                 <InputText name="alias"  value={formData.alias} id="alias" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="country">Country</label>
//                 <br/>
//                 <InputText name="country" value={formData.country} id="country" onChange={handleInputChange} />
//               </div>
//               <div>
              
//                 <label htmlFor="applicableFrom">Applicable From</label>
//                 <br/>
//                 <Calendar name="applicableFrom" value={new Date(formData.applicableFrom)} onChange={handleInputChange} dateFormat="yy-mm-dd" id="applicableFrom" type="date" disabled />
//               </div>
              
//               <div>
//                 <label htmlFor="gstin">GSTIN</label>
//                 <br/>
//                 <InputText name="gstin" value={formData.gstin} id="gstin" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="legalName">Legal Name</label>
//                 <br/>
//                 <InputText name="legalName" value={formData.legalName} id="legalName" onChange={handleInputChange} />
//               </div>
//               <div>
//                 <label htmlFor="pan">PAN</label>
//                 <br/>
//                 <InputText name="pan" value={formData.pan} id="pan" onChange={handleInputChange} />
//               </div>
//               <Button type="submit" className="btn btn-primary mt-3">{editOrg !== null ? "Update" : "Submit"}</Button>
//             </form>
//             <Toast ref={toast} />
//             <ConfirmDialog/>
//             <div>{filteredOrgs.map((d, i) => (
//               <div key={i} tabIndex={i + 1}>
//                 <div>
//                   <div className="m-t-20 org-cards-layout">
//                     <div className="card border-0 active margin-bottom-8 shadow-sm">
//                       <div className="card-body p-16-20">
//                         <div className="d-flex justify-content-between">
//                           <div className="d-flex">
//                             <div className="org-list-img-viw mr-8">
//                               <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*GGPiYDxdLc9zba8r" className="c-sidebar-brand-full mobile-logo-width img-fluid" alt="Organization Logo" />
//                               <Button onKeyDown={(event) => handleCogKeyDown(event, organization.organizationID)} icon='pi pi-cog'onClick={()=>{
//                                             navigate('/Cog',{state:d.organizationID})
//                                           }} style={{float:'right'}}/>
//                                           <ul style={mystyle}>
//                                 <li>Organization ID : {d.organizationID}</li>
//                                 <li>Legal Name : {d.legalName}</li>
//                                 {expandedIndex === i ? (
//                                   <>
//                                     {d?.displayName && <li>Display Name : {d.displayName}</li>}
//                                     {d?.country && <li>Country : {d.country}</li>}
//                                     {d?.pan&& <li>PanNum : {d.pan}</li>}
//                                     {d?.gstin && <li>gstin : {d.gstin}</li>}
//                                     {d?.applicableFrom && <li>Applicable From : {d.applicableFrom}</li>}
//                                     {d?.roleName && <li>Role Name : {d.roleName}</li>}
//                                     <br/>
//                                     <div className={mystyle}>
                                   
//                                         <Button icon="pi pi-pen-to-square" size="small" onClick={() => handleEdit(d.organizationID)} label="EDIT"/>&nbsp;
//                                         <Button icon="pi pi-trash" size="small" onClick={()=>confirm1(d.organizationID)}label="DELETE"/>&nbsp;
                                          
//                                     </div>
//                                   </>
//                                 ) : (
//                                   <>
//                                     {d?.displayName && <li>Display Name : {d.displayName}</li>}
//                                   </>
//                                 )}
//                               </ul>
//                               <a onClick={() => toggleViewMore(i)} className="taaab">
//                                 {expandedIndex === i ? 'View Less' : 'View More'}
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             </div>
//           </div>
//       </div>
//     </>
//   );
// }

// export default OrgCardsList;
import React, { useState, useEffect, useRef } from "react";
import { InputText } from "primereact/inputtext";
import './App.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import useDebounce from "./util";
import 'primeicons/primeicons.css';
import address from "./assets/Images/address.png";
import gst from "./assets/Images/GST.jpg";
import branding from "./assets/Images/branding.jpg"
import { FloatLabel } from 'primereact/floatlabel';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useDeleteOrgMutation, useGetAllOrganizationsQuery, usePostOrgMutation, useUpdateOrgMutation } from "./Store/common";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const OrgCardsList = () => {
  const [org, setOrg] = useState([]);
  const [error, setError] = useState(null);
  const [postOrg1] = usePostOrgMutation();
  const [putOrg1] = useUpdateOrgMutation();
  const [deleteOrg] = useDeleteOrgMutation();
  const today = new Date();
  const formattedToday = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

  const { data: allProductsData } = useGetAllOrganizationsQuery();
  useEffect(() => {
    if (allProductsData?.success) {
      setOrg(allProductsData?.data);
    }
  }, [allProductsData]);

  const [formData, setFormData] = useState({
    alias: '',
    country: '',
    applicableFrom: formattedToday,
    gstin: '',
    legalName: '',
    pan: '',
  });
  const [editOrg, setEditOrg] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const nova = useDebounce(searchTerm, 200);

  const renderHeader = () => {
    return (
      <div className="flex justify-content-between align-items-center">
        <div className="gaaap">
          <span className="p-input-icon-right w-100">
            <FloatLabel>
              <InputText
                className="form-control h-40px shadow-none filter-search-inp figma-bg"
                id="search"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
              <label htmlFor="search">Search</label>
            </FloatLabel>
          </span>
        </div>
      </div>
    );
  };

  const mystyle = {
    listStyleType: 'none',
    width: '300px',
    marginLeft: '10px'
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleViewMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleEdit = (organizationID) => {
    const orgNew = org.find(o => o.organizationID === organizationID);
    setFormData({
      alias: orgNew.alias || '',
      country: orgNew.country || '',
      applicableFrom: orgNew.applicableFrom || formattedToday,
      gstin: orgNew.gstin || '',
      legalName: orgNew.legalName || '',
      pan: orgNew.pan || '',
      organizationID: orgNew.organizationID
    });
    setEditOrg(organizationID);
  };

  const accept = async (organizationID) => {
    try {
      let res = await deleteOrg(organizationID);
      if (res?.data?.success) {
        toast.current.show({ severity: 'info', summary: 'Deleted', detail: 'You have deleted an orgID', life: 3000 });
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const reject = () => {
    toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  };

  const confirm1 = (organizationID) => {
    confirmDialog({
      message: 'Are you sure you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => accept(organizationID),
      reject,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let newOrg = {
        alias: formData.alias,
        country: formData.country,
        applicableFrom: formData.applicableFrom,
        gstins: [
          {
            enableGST: "Yes",
            gstDetailID: 0,
            gstin: formData.gstin
          }
        ],
        legalName: formData.legalName,
        pan: formData.pan,
        organizationID: formData?.organizationID
      };

      if (!editOrg) {
        delete newOrg.organizationID;
        let res = await postOrg1(newOrg);
        if (res?.data?.success) {
          toast.current.show({ severity: 'success', summary: 'Success', detail: 'Successfully posted the data', life: 3000 });
        }
      } else {
        let res = await putOrg1(newOrg);
        if (res?.data?.success) {
          toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Successfully updated the data', life: 3000 });
        }
      }

      setFormData({
        alias: '',
        country: '',
        applicableFrom: formattedToday,
        gstin: '',
        legalName: '',
        pan: '',
      });
      setEditOrg(null);
    } catch (error) {
      setError(error.message);
    }
  };
  

  const filteredOrgs = org.filter((d) =>
    d.organizationID.toString().includes(nova)
  );

  const toast = useRef(null);
  const navigate = useNavigate();

  const handleCogKeyDown = (event, organizationID) => {
    if (event.altKey && event.key === 's') {
      navigate('/Cog', { state: organizationID });
    }
    if (event.altKey && event.key === 'a') {
      navigate('/address  ', { state: organizationID });
    }
    if (event.altKey && event.key === 'b') {
      navigate('/branding', { state: organizationID });
    }
    if (event.altKey && event.key === 'g') {
      navigate('/gst', { state: organizationID });
    }
  
  };
  const sty={
width:"50px",
 height:"50px",
 float:'right',
 marginRight:'20px'
  }

  return (
    <>
      <div className="card border-0 b-r-15 overlap-card-margin mb-0">
        <div className="card-header bottom-color no-card-bg card-header-f">
          <div className="row align-items-center">
            <div className="col-xxl-12">
              <div className="">
                <p className="font-size-18 f-600 mb-0 overflow-elipsis">
                  Organizations List
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body p-0 org-card-body-cards-list sales-scroll-bar">
          <div className="row">
            <div className="col-5">
              <div className="f-g-1 me-2">{renderHeader()}</div>
            </div>
          </div>
          <br />
          
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="alias">Alias</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <InputText name="alias" value={formData.alias} id="alias" onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="country">Country</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <InputText name="country" value={formData.country} id="country" onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="applicableFrom">Applicable From</label>
              <Calendar name="applicableFrom" value={new Date(formData.applicableFrom)} onChange={handleInputChange} dateFormat="yy-mm-dd" id="applicableFrom" type="date" disabled />
            </div>
            <div>
              <label htmlFor="gstin">GSTIN</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <InputText name="gstin" value={formData.gstin} id="gstin" onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="legalName">Legal Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <InputText name="legalName" value={formData.legalName} id="legalName" onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="pan">PAN</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <InputText name="pan" value={formData.pan} id="pan" onChange={handleInputChange} />
            </div>
            <Button type="submit" className="btn btn-primary mt-3">{editOrg !== null ? "Update" : "Submit"}</Button>
          </form>
          <Toast ref={toast} />
          <ConfirmDialog />
          <div>{filteredOrgs.map((d, i) => (
            <div key={i} tabIndex={i + 1}  onKeyDown={(event) => handleCogKeyDown(event, d.organizationID)}>
              <div className="m-t-20 org-cards-layout">
                <div className="card border-0 active margin-bottom-8 shadow-sm">
                  <div className="card-body p-16-20">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="org-list-img-viw mr-8">
                          <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*GGPiYDxdLc9zba8r" className="c-sidebar-brand-full mobile-logo-width img-fluid" alt="Organization Logo" />
                          
                          <Button onKeyDown={(event) => handleCogKeyDown(event, d.organizationID)} icon='pi pi-cog' onClick={() => {
                            navigate('/Cog', { state: d.organizationID })}} style={{ float: 'right' }} />
                          <img src={address} alt="address" style={sty} onKeyDown={(event) => handleCogKeyDown(event, d.organizationID)} onClick={() => {
                            navigate('/address', { state: d.organizationID })}}/>
                            <img src={branding} alt="branding" style={sty} onKeyDown={(event) => handleCogKeyDown(event, d.organizationID)} onClick={() => {
                            navigate('/branding', { state: d.organizationID })}}/>
                            <img src={gst} alt="gst" style={sty} onKeyDown={(event) => handleCogKeyDown(event, d.organizationID)} onClick={() => {
                            navigate('/gst', { state: d.organizationID })}}/>
                          <ul style={mystyle}>
                            <li>Organization ID : {d.organizationID}</li>
                            <li>Legal Name : {d.legalName}</li>
                            {expandedIndex === i ? (
                              <>
                                {d?.displayName && <li>Display Name : {d.displayName}</li>}
                                {d?.country && <li>Country : {d.country}</li>}
                                {d?.pan && <li>PanNum : {d.pan}</li>}
                                {d?.gstin && <li>gstin : {d.gstin}</li>}
                                {d?.applicableFrom && <li>Applicable From : {d.applicableFrom}</li>}
                                {d?.roleName && <li>Role Name : {d.roleName}</li>}
                                <br />
                                <div className={mystyle}>
                                  <Button icon="pi pi-pen-to-square" size="small" onClick={() => handleEdit(d.organizationID)} label="EDIT" />&nbsp;
                                  <Button icon="pi pi-trash" size="small" onClick={() => confirm1(d.organizationID)} label="DELETE" />&nbsp;
                                </div>
                              </>
                            ) : (
                              <>
                                {d?.displayName && <li>Display Name : {d.displayName}</li>}
                              </>
                            )}
                          </ul>
                          <a onClick={() => toggleViewMore(i)} className="taaab">
                            {expandedIndex === i ? 'View Less' : 'View More'}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrgCardsList;
