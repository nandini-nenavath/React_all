import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import OrgCardsList from './App.jsx';
import './App.css';
import Address from './Store/address.jsx';
import Cog from './cog.jsx';
import Gst from './Store/gst.jsx'
import Branding from './Store/branding.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrgCardsList />} />
        <Route path="/Cog" element={<Cog/>} />
        <Route path='/address' element={<Address/>}/>
        <Route path='/branding' element={<Branding/>}/>
        <Route path='/gst' element={<Gst/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

