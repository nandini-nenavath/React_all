// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { useGetGstQuery } from './common';
// import {Button} from 'primereact/button'
// import { InputText } from 'primereact/inputtext';
// const Gst = () => {
//   const location = useLocation();
//   const { data: gstDetails } = useGetGstQuery(location?.state, { skip: !location?.state });
//   const [gst, setGst] = useState([]);
//   const [latestGst, setLatestGst] = useState(null);
//   const [showFields,setShowFields]=useState(true)
// const [regType,setRegType]=useState(null);
// const [gstFormData, setGstFormData] = useState({
//     gstin:'',
//     registrationName:'',
//     registrationType:'',
//   });
//   useEffect(() => {
//     if (gstDetails?.data) {
//       setGst(gstDetails.data);
//       const gstDetailHistories = gstDetails.data[0]?.gstDetailHistories || [];
      
//       if (gstDetailHistories.length > 0) {
//         const latestHistory = new Date(Math.max(...gstDetailHistories.map(e => new Date(e.applicableFrom))));
//         const formatted = `${latestHistory.getFullYear()}-${(latestHistory.getMonth() + 1).toString().padStart(2, '0')}-${latestHistory.getDate().toString().padStart(2, '0')}`;

//         const filteredGst = gstDetailHistories.filter(item => {
//           const itemDate = new Date(item.applicableFrom);
//           const formattedItemDate = `${itemDate.getFullYear()}-${(itemDate.getMonth() + 1).toString().padStart(2, '0')}-${itemDate.getDate().toString().padStart(2, '0')}`;
//           return formattedItemDate === formatted;
//         });

//         if (filteredGst.length > 0) {
//           setLatestGst(filteredGst[0].gstin);
//           setRegType(filteredGst[0]?.registrationType)
//         }
//         setGstFormData({
//             gstin: gstDetails[0].gstin|| '',
//             registrationName: gstDetails[0].registrationName|| '',
//             registrationType:gstDetails[0].registrationType||'',
//               });
//       }
      
//     }
//     console.log(gstDetails);
//   }, [gstDetails]);
 
  

//   console.log(latestGst);
//   const handleViewMore=(e)=>{
//     e.preventDefault()
//     setShowFields(false)
//   }
//   const columns = [
//     { field: 'registrationName', header: 'Registration Name'},
//     { field: 'latessssssst', header: 'GSTIN' },
//     {field:'reggType',header:'registrationType'},
//     {field:'View More',header:'Action',button:true}
    
//   ];
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setGstFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value
//     }));
//     console.log(e)
//   };
 


//   const gstindeetails = gst.map(d => ({
//     ...d, latessssssst: latestGst,reggType:regType
//   }));

//   return (
//     <div className="card">
//         <div className="card border-0 b-r-15 overlap-card-margin mb-0">
//         <div className="card-header bottom-color no-card-bg card-header-f">
//           <div className="row align-items-center">
//             <div className="col-xxl-12">
//               <div>
//                 <p className="font-size-18 f-600 mb-0 overflow-elipsis">
//                   <Link to="/"><i className="pi pi-arrow-left" style={{ fontSize: '1.5rem', marginLeft: "10px" }}></i></Link>
//                   <a className="gap">GST</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showFields&&<DataTable paginator rows={5} rowsPerPageOptions={[5, 10, 15, 20, 50]} value={gstindeetails} tableStyle={{ minWidth: '50rem' }}>
//         {columns.map((col, i) => (
//           <Column key={i} field={col.field} header={col.header} body={col?.button?<Button onClick={(e)=>handleViewMore(e)} label='View More'/>:null}/>
//         ))}
//       </DataTable>}
//       {!showFields&&<>
//       <form>
//         <div>
//         <label htmlFor='gstin'>GSTIN</label>
//         <InputText name="gstin" tabIndex={2} value={gstFormData.gstin} onChange={handleInputChange} id="gstin" type="text"/>
//         </div>
//         <div>
//         <label htmlFor='registrationName'>Registration Name</label>
//         <InputText name="registrationName" tabIndex={3} value={gstFormData.registrationName} onChange={handleInputChange} id="registrationName" type="text" />
//         </div>
//         <div>
//         <label htmlFor='registrationType'>registrationType</label>
//         <InputText name="registrationType" tabIndex={4} value={gstFormData.registrationType} onChange={handleInputChange} id="registrationType" type="text" />
//         </div>
        
//       </form>
//       </>

//       }
//     </div>
//   );
// };

// export default Gst;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useGetGstQuery } from './common';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const Gst = () => {
  const location = useLocation();
  const { data: gstDetails } = useGetGstQuery(location?.state, { skip: !location?.state });
  const [gst, setGst] = useState([]);
  const [latestGst, setLatestGst] = useState(null);
  const [showFields, setShowFields] = useState(true);
  const [regType, setRegType] = useState(null);
  const [gstFormData, setGstFormData] = useState({
    gstin: '',
    registrationName: '',
    registrationType: '',
  });

  useEffect(() => {
    if (gstDetails?.data) {
      setGst(gstDetails.data);
      const gstDetailHistories = gstDetails.data[0]?.gstDetailHistories || [];
      
      if (gstDetailHistories.length > 0) {
        const latestHistory = new Date(Math.max(...gstDetailHistories.map(e => new Date(e.applicableFrom))));
        const formatted = `${latestHistory.getFullYear()}-${(latestHistory.getMonth() + 1).toString().padStart(2, '0')}-${latestHistory.getDate().toString().padStart(2, '0')}`;

        const filteredGst = gstDetailHistories.filter(item => {
          const itemDate = new Date(item.applicableFrom);
          const formattedItemDate = `${itemDate.getFullYear()}-${(itemDate.getMonth() + 1).toString().padStart(2, '0')}-${itemDate.getDate().toString().padStart(2, '0')}`;
          return formattedItemDate === formatted;
        });

        if (filteredGst.length > 0) {
          setLatestGst(filteredGst[0].gstin);
          setRegType(filteredGst[0]?.registrationType);
        }

        setGstFormData({
          gstin: latestGst|| '',
          registrationName: gstDetails.data[0]?.registrationName || '',
          registrationType: gstDetailHistories[0].registrationType || '',
        });
      }
    }
    console.log(gstDetails);
  }, [gstDetails,latestGst]);

  console.log(latestGst);

  const handleViewMore = (e) => {
    e.preventDefault();
    setShowFields(false);
  };

  const columns = [
    { field: 'registrationName', header: 'Registration Name' },
    { field: 'latestGst', header: 'GSTIN' },
    { field: 'regType', header: 'Registration Type' },
    { field: 'viewMore', header: 'Action', button: true }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGstFormData((prevFormData) => ({ 
      ...prevFormData,
      [name]: value
    }));
    console.log(e);
  };

  const gstindeetails = gst.map(d => ({
    ...d, latestGst, regType
  }));

  return (
    <div className="card">
      <div className="card border-0 b-r-15 overlap-card-margin mb-0">
        <div className="card-header bottom-color no-card-bg card-header-f">
          <div className="row align-items-center">
            <div className="col-xxl-12">
              <div>
                <p className="font-size-18 f-600 mb-0 overflow-elipsis">
                  <Link to="/"><i className="pi pi-arrow-left" style={{ fontSize: '1.5rem', marginLeft: "10px" }}></i></Link>
                  <a className="gap">GST</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showFields && (
        <DataTable paginator rows={5} rowsPerPageOptions={[5, 10, 15, 20, 50]} value={gstindeetails} tableStyle={{ minWidth: '50rem' }}>
          {columns.map((col, i) => (
            <Column key={i} field={col.field} header={col.header} body={col.button ? () => <Button onClick={handleViewMore} label="View More" /> : undefined} />
          ))}
        </DataTable>
      )}
      {!showFields && (
        <>
          <form>
            <div>
              <label htmlFor='gstin'>GSTIN</label>
              <InputText name="gstin" tabIndex={2} value={gstFormData.gstin} onChange={handleInputChange} id="gstin" type="text" />
            </div>
            <div>
              <label htmlFor='registrationName'>Registration Name</label>
              <InputText name="registrationName" tabIndex={3} value={gstFormData.registrationName} onChange={handleInputChange} id="registrationName" type="text" />
            </div>
            <div>
              <label htmlFor='registrationType'>Registration Type</label>
              <InputText name="registrationType" tabIndex={4} value={gstFormData.registrationType} onChange={handleInputChange} id="registrationType" type="text" />
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Gst;
