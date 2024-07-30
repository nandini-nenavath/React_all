import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import {Input} from 'reactstrap'
import { Button } from 'primereact/button';
import { useGetBrandingQuery, useUpdateBrandingMutation } from './common';
import pic2 from "../assets/Images/pic2.jpg"
function Branding() {
  const location = useLocation(); 

  const [orgID, setOrgID] = useState(location.state);
  const [brand, setBrand] = useState([]);
  const { data: branding } = useGetBrandingQuery(location?.state, { skip: !location?.state });

  useEffect(() => {
    if (branding) {
      setBrand(branding.data);
    }
  }, [branding]);
const fileRef=useRef(null)
  const [brandingFormData, setBrandingFormData] = useState({
    mobileNumber: '',
    alternativeMobileNumber: '',
    email: '',
    alternativeEmail: '',
    facebook: '',
    website: '',
    linkedin: '',
    youtube: '',
    snapchat: '',
    instagram: '',
  });
  const onUpload = () => {
    toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
};
const [preview,setPreview]=useState(pic2)
  useEffect(() => {
    if (brand) {
      setBrandingFormData({
        mobileNumber: brand.mobileNumber || '',
        alternativeMobileNumber: brand.alternativeMobileNumber || '',
        email: brand.email || '',
        alternativeEmail:brand.alternativeEmail || '',
        facebook:brand.facebook || '',
        website: brand.website || '',
        linkedin:brand.linkedin || '',
        youtube: brand.youtube || '',
        snapchat:brand.snapchat || '',
        instagram: brand.instagram || '',
      });
    }
  }, [brand]);

  const [error, setError] = useState('');
  const [putBranding] = useUpdateBrandingMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBrandingFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleFile=(e)=>{
    e.preventDefault();
    const file = e.target.files[0]
    if(file){
        const objectUrl=URL.createObjectURL(file)
        setPreview(objectUrl)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await putBranding({ orgID, brand: brandingFormData });
      console.log('Response:', res);

      if (res?.data?.success) {
        console.log('updated')
      } else {
        setError('Failed to update branding');
      }
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Failed to update branding');
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
                  <a className="gap">Branding</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
      <div className="org-list-img-viw mr-8">
        <img src={preview} className="c-sidebar-brand-full mobile-logo-width img-fluid" alt="logo" />
        </div>
        <Input type="file" name="file" onChange={(e)=>handleFile(e)} ref={fileRef}/>
        <div>
          <label htmlFor="mobileNumber">mobileNumber</label>
          <InputText id="mobileNumber" tabIndex={1} onChange={handleInputChange} value={brandingFormData.mobileNumber} name="mobileNumber" type="number" />
          <br />
          <label htmlFor="alternativeMobileNumber">alternativeMobileNumber</label>
          <InputText name="alternativeMobileNumber" tabIndex={2} onChange={handleInputChange} value={brandingFormData.alternativeMobileNumber} id="alternativeMobileNumber" type="number" />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <InputText name="email" tabIndex={3} id="email" onChange={handleInputChange} value={brandingFormData.email} type="email" />
        </div>
        <div>
          <label htmlFor="alternativeEmail">alternativeEmail</label>
          <InputText name="alternativeEmail" tabIndex={4} id="alternativeEmail" onChange={handleInputChange} value={brandingFormData.alternativeEmail} type="email" />
        </div>
        <div>
          <label htmlFor="facebook">facebook</label>
          <InputText name="facebook" tabIndex={5} id="facebook" onChange={handleInputChange} value={brandingFormData.facebook} type="url" />
        </div>
        <div>
          <label htmlFor="website">website</label>
          <InputText name="website" tabIndex={5} id="website" onChange={handleInputChange} value={brandingFormData.website} type="url" />
        </div>
        <div>
          <label htmlFor="linkedin">linkedin</label>
          <InputText name="linkedin" tabIndex={5} id="linkedin" onChange={handleInputChange} value={brandingFormData.linkedin} type="url" />
        </div>
        <div>
          <label htmlFor="youtube">youtube</label>
          <InputText name="youtube" tabIndex={5} id="youtube" onChange={handleInputChange} value={brandingFormData.youtube} type="url" />
        </div>
        <div>
          <label htmlFor="snapchat">snapchat</label>
          <InputText name="snapchat" tabIndex={5} id="snapchat" onChange={handleInputChange} value={brandingFormData.snapchat} type="url" />
        </div>
        <div>
          <label htmlFor="instagram">instagram</label>
          <InputText name="instagram" tabIndex={5} id="instagram" onChange={handleInputChange} value={brandingFormData.instagram} type="url" />
        </div>
        <Button type="submit" label="Submit"></Button>
      </form>
    </>
  );
}

export default Branding;
