import { useEffect, useState, useRef } from "react";
import PhotoTable from "./components/PhotoTable.jsx";
import Form from "./components/Form.jsx";
import { Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PhotoRow from "./components/PhotoRow.jsx";
import { Button } from "primereact/button";
import './App.css';
      
const App = () => {
  const [loading, setLoading] = useState(false);
  const data = useSelector((state) => state?.myReducer);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [payload, setPayload] = useState({
    max_sol: 100,
    earth_date: "2016-02-22",
    camera: "FHAZ",
  });
  const dispatch = useDispatch();
  const [module, setModule] = useState("photos");
  const selectedPhotoRef = useRef(null);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onChangeHandler = (event) => {console.log(event)
    setPayload({
      ...payload,

      [event.target.name]: event.value,
    });
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    const key = "L09clhgdqfcAX1s9RHyq3Kod84xDFiokz9xXpuWh";

    try {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?max_sol=${payload.max_sol}&earth_date=${payload.earth_date}&camera=${payload.camera.code}&api_key=${key}`,
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

  const addPhoto = (photo) => {
    dispatch({ type: "ADD_PHOTO", payload: photo });
  };

  const removePhoto = (photo) => {
    dispatch({ type: "REMOVE_PHOTO", payload: photo });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchData();
  };
  useEffect(()=>{
    console.log(payload)
  },[payload])

  const handleKeyDown = (event) => {
    if (module === "photos" && selectedPhotoRef.current) {
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        addPhoto(selectedPhotoRef.current);
      }
    } else if (module === "local" && selectedPhotoRef.current) {
      if (event.altKey && event.key === 'd') {
        event.preventDefault();
        removePhoto(selectedPhotoRef.current);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [module, selectedPhotoRef.current]);

  const handlePhotoClick = (photo) => {
    selectedPhotoRef.current = photo;
  };

  return (
    <Fragment>
      <h1>Rover Cameras</h1>
      <Form  className="card flex justify-content-center" 
        payload={payload}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
        />
      
      {loading && <p>...loading</p>}
      {error && <p>Error: {error}</p>}
      <div>
        <br/>
      <Button accessKey={"p"} onClick={() => setModule("photos")}>Live Pictures</Button>
      <Button accessKey={"m"} onClick={() => setModule("local")}> My Local Data</Button>
      </div>
      {module === "photos" ? (
        <div>
          <h2>Photos</h2>
          {photos.length > 0 ? (
            <PhotoTable module={module} photos={photos} addPhoto={addPhoto} onPhotoClick={handlePhotoClick} PhotoRowComponent={PhotoRow}/>
          ) : (
            <p>No photos found</p>
          )}
        </div>
      ) : (
        <div>
          <h2>My Local Data</h2>
          {data?.value.length > 0 ? (
            <PhotoTable module={module} photos={data?.value} removePhoto={removePhoto} onPhotoClick={handlePhotoClick} PhotoRowComponent={PhotoRow}/>
          ) : (
            <p>You have no photos in your local data</p>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default App;

