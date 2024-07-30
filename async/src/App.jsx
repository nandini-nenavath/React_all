// import { useState,useEffect } from 'react'
// import './App.css'
// const App=()=>{
//   const [employees,setemployees]=useState([]);
//   const [loading,setLoading]=useState(true);
//   const [error,setError]=useState(null);

//   useEffect(()=>{
//     const fetchData=async()=>{
//       try{
//         const response=await fetch('https://dummy.restapiexample.com/api/v1/employees');
//         if(!response.ok){
//           throw new Error(`http error: ${response.status}`);
//         }
//         const userData=await response.json();
//         setemployees(userData.data);
//         setLoading(false);
//       }
//       catch(error){
//         setError(error.message);
//         setLoading(false);
//       }
//     }
//     fetchData();
//     },[]);
//     if(loading){
//       return <p>....loading</p>
//     }
//     if(error){
//       return <p>Error:{error}</p>
//     }
//     return (<>
//     <div>
//       <h1> Employees list</h1>
//       <ul>
//         {employees.map((employee)=>(
//           <li key={employee.id}>
//             {employee.employee_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//     </>);
// };


// export default App;

// import { useState, useEffect } from "react";

// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const pro = await fetch("https://dummyapi.online/api/movies");
//         if (!pro.ok) {
//           throw new Error(`HTTP error: ${pro.status}`);
//         }
//         const movieData = await pro.json();
//         setMovies(movieData);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>...loading</p>;
//   }
//   if (error) {
//     return <p>Error: {error}</p>;
//   }
//   const ratings=movies.filter(movie=>movie.rating>=8.5)
//   return (
//     <div>
//       <h1>Movies list and ratings(&gt;=8.5)</h1>
//       <ul>
//          {ratings.map((movie)=>(
//         <li key={movie.id}>
//             {movie.movie}    -   {movie.rating}
//         </li>
//          ))}
//        </ul>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [payload, setPayload] = useState({
    max_sol: 100,
    earth_date: "2016-02-22",
    camera: "FHAZ",
  });

  const onChangeHandler = (event) => {
    setPayload({
      ...payload,
      [event.target.name]: event.target.value,
    });
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    const key = "L09clhgdqfcAX1s9RHyq3Kod84xDFiokz9xXpuWh";

    try {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${payload.max_sol}&earth_date=${payload.earth_date}&camera=${payload.camera}&api_key=${key}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      setPhotos(data.photos);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <h1>Rover Cameras</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="camera">Camera</label>
        <select
          name="camera"
          id="camera"
          value={payload.camera}
          onChange={onChangeHandler}
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
        </select>
        <br />
        <label htmlFor="earth_date">Date</label>
        <input
          name="earth_date"
          value={payload.earth_date}
          onChange={onChangeHandler}
          id="earth_date"
          type="date"
        />
        <br />
        <label htmlFor="max_sol">Maximum sol</label>
        <input
          name="max_sol"
          value={payload.max_sol}
          onChange={onChangeHandler}
          id="max_sol"
          type="number"
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {loading && <p>...loading</p>}
      {error && <p>Error: {error}</p>}

      <div>
        <h2>Photos</h2>
        {photos.length > 0 ? (
          <table className="tab">
            <thead className="tab">
              <tr className="tab">
                <th className="tab">Picture</th>
                <th className="tab">Camera ID</th>
                <th className="tab">Camera Name</th>
                <th className="tab">Camera Full Name</th>
              </tr>
            </thead>
            <tbody className="tab">
              {photos.map((photo) => (
                <tr key={photo.id} className="tab">
                  <td className="tab">
                    <img src={photo.img_src} alt={photo.camera.full_name} width="200" />
                  </td>
                  <td className="tab">{photo.camera.id}</td>
                  <td className="tab">{photo.camera.name}</td>
                  <td className="tab">{photo.camera.full_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No photos found</p>
        )}
      </div>
    </div>
  );
};

export default App;
