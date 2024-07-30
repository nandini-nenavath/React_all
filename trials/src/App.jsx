// import { useState,useEffect } from 'react'
// import './App.css'
// import * as XLSX from "xlsx";
// function SheetJSheetNames() {
//   const [__html, setHTML] = useState("");
//   useEffect(() => { (async() =>{
//     /* parse workbook, limiting to 20 rows */
//     const url = "https://docs.sheetjs.com/PortfolioSummary.xls";
//     const workbook = XLSX.read(await (await fetch(url)).arrayBuffer(), {sheetRows:20});
//     /* get first worksheet */
//     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//     /* generate and display HTML */
//     const table = XLSX.utils.sheet_to_html(worksheet);
//     setHTML(table);
//   })(); }, []);
//   return ( <div dangerouslySetInnerHTML={{__html}}/> );
// }

// export default SheetJSheetNames;
// import React, { useEffect, useState } from 'react';
// import * as XLSX from 'xlsx';
// import './App.css';

// function SheetJSheetNames() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('/PortfolioSummary.xls');
//       const arrayBuffer = await response.arrayBuffer();
//       const workbook = XLSX.read(arrayBuffer, { type: 'array' });
//       const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
//       setData(jsonData);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Fetch and Display XLSX Data</h1>
//       {data.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               {data[0].map((getData, index) => (
//                 <th key={index}>{getData.Total1}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.slice(1).map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {row.map((getData, cellIndex) => (
//                   <td key={cellIndex}>{getData}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default SheetJSheetNames;
// import React, { useEffect, useState } from 'react';
// import * as XLSX from 'xlsx';
// import './App.css';

// function SheetJSheetNames() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('/Statutory.xls');
//       const arrayBuffer = await response.arrayBuffer();
//       const workbook = XLSX.read(arrayBuffer);
//       const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet);
      
      
//       setData(jsonData);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Fetch and Display XLSX Data</h1>
//       {data.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               {data[0].map((heading, index) => (
//                 <th key={index}>{heading}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.slice(1).map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {row.map((cell, cellIndex) => (
//                   <td key={cellIndex}>{cell}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default SheetJSheetNames;
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import './App.css';

function SheetJSheetNames() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/Statutory.xlsx'); 
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'boolean' },{sheetRows:109});
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const filteredData = jsonData.map(row => [row[0], row[12]]);
      
      setData(filteredData);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Fetch and Display XLSX Data</h1>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              {data[0].map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{typeof cell === 'boolean' ? (cell ? 'True' : 'False') : cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SheetJSheetNames;

