import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
// import './App.css';
import axios from 'axios';
import orgList from "./assests/Images/pic2.jpg";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { ScrollPanel } from "primereact/scrollpanel";
import useDebounce from "./util";
import { useGetAllNewOrganizations  } from "./Store/api/orgApi";
import { useSelector } from "react-redux";



const OrgCardsList = () => {
//    const debounce = (func, delay) => {
//     let timeoutId;
//     return function (...args) {
//         if (timeoutId) {
//             clearTimeout(timeoutId);
//         }
//         timeoutId = setTimeout(() => {
//             func(...args);
//         }, delay);
//     };
// }
  const [org, setOrg] = useState([]);
  const [error, setError] = useState(null);
  const {data:allOrgs} = useGetAllNewOrganizations()
  // const {data:allOrgs}=useGetOverAllOrgs()
  // const store = useSelector((state)=>state)
    useEffect(()=>{
    console.log(allOrgs,'====>>')
  },[allOrgs])
  const [formData, setFormData] = useState({
    alias: '',
    country: '',
    userRoleID: '',
    gstin: '',
    legalName: '',
    pan: '',
  });
  const [editOrg, setEditOrg] = useState(null);
  const [val,setVal] = useState('')
  const [searchTerm, setSearchTerm] = useState("");
  const nova = useDebounce(searchTerm,200)
  const renderHeader = () => {
    return (
      <div className="flex justify-content-between align-items-center">
        <span className="p-input-icon-right w-100">
          <i className="pi pi-search" />
          <InputText
            className="form-control h-40px shadow-none filter-search-inp figma-bg"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </span>
      </div>
    );
  };

  const mystyle = {
    listStyleType: 'none',
    width: '300px',
  };

  const fetchData = async () => {
    setError(null);
    try {
      const response = await axios.get(
        `https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations?userID=120004`
      );
      setOrg([]);
      console.log([]);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleViewMore = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEdit = (organizationID) => {
    const orgNew = org.find(o => o.organizationID === organizationID);
    setFormData({
      alias: orgNew.alias|| '',
      country: orgNew.country || '',
      userRoleID: orgNew.userRoleID || '',
      gstin: orgNew.gstin || '',
      legalName: orgNew.legalName || '',
      pan: orgNew.pan || '',
    });
    setEditOrg(organizationID);
  };

  const handleSubmit = async (e,dispatch) => {
    e.preventDefault();
    try {
      const newOrg = {
        alias: formData.alias,
        country: formData.country,
        userRoleID: Number(formData.userRoleID),
        gstins: [
          {
            enableGST: "Yes",
            gstDetailID: 0,
            gstin: formData.gstin
          }
        ],
        legalName: formData.legalName,
        pan: formData.pan,
      };

      if (editOrg !== null) {
        const header = {
          'X-Organization-Id': 1020,
        };
        const response = await axios.put(
          `https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations/${editOrg}?userID=120004`,
          newOrg, { headers: header }
        );
        if (response?.data?.success) {
          dispatch({
            type:"Put",payload:fetchData()})
        }
      } else {
        const response = await axios.post(
          'https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/v1/organizations?userID=120004',
          newOrg
        );
        if (response?.data?.success) {
          dispatch({
            type:"Post",payload:fetchData()})
        }
      }

      setFormData({
        alias: '',
        country: '',
        userRoleID: '',
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
    d.organizationID.toString().includes(nova) ||
    d.legalName.toLowerCase().includes(nova?.toLowerCase()) ||
    d.displayName.toLowerCase().includes(nova?.toLowerCase())
  );

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
          <div className="p-3-f">
            <div className="row">
              <div className="col-5">
                <div className="f-g-1 me-2">{renderHeader()}</div>
              </div>
              <div className="col-7 text-end">
                <button className="btn btn-primary font-size-14"><i className="fi fi-br-plus l-h-1 v-align-middle font-size-10"></i> Create</button>
                 <button className="btn btn-outline-secondary table-vch-card ms-2"><i className="fi fi-br-menu-dots-vertical l-h-1 v-align-middle"></i></button>
              </div>
            </div>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="alias">Alias</label>
                <InputText name="alias" value={formData.alias} id="alias" onChange={handleInputChange} />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <InputText name="country" value={formData.country} id="country" onChange={handleInputChange} />
              </div>
              <div>
                <label htmlFor="userRoleID">User Role ID</label>
                <InputText name="userRoleID" value={formData.userRoleID} id="userRoleID" onChange={handleInputChange} />
              </div>
              <div>
                <label htmlFor="gstin">GSTIN</label>
                <InputText name="gstin" value={formData.gstin} id="gstin" onChange={handleInputChange} />
              </div>
              <div>
                <label htmlFor="legalName">Legal Name</label>
                <InputText name="legalName" value={formData.legalName} id="legalName" onChange={handleInputChange} />
              </div>
              <div>
                <label htmlFor="pan">PAN</label>
                <InputText name="pan" value={formData.pan} id="pan" onChange={handleInputChange} />
              </div>
              <button type="submit" className="btn btn-primary mt-3">{editOrg !== null ? "Update" : "Submit"}</button>
            </form>
            <div>{filteredOrgs.map((d, i) => (
              <div key={i} tabIndex={i + 1}>
                <div>
                  <div className="m-t-20 org-cards-layout">
                    <div className="card border-0 active margin-bottom-8 shadow-sm">
                      <div className="card-body p-16-20">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">
                            <div className="org-list-img-viw mr-8">
                              <img src={orgList} className="c-sidebar-brand-full mobile-logo-width img-fluid" alt="Organization Logo" />
                              <ul style={mystyle}>
                                <li>Organization ID : {d.organizationID}</li>
                                <li>Legal Name : {d.legalName}</li>
                                {expandedIndex === i ? (
                                  <>
                                    {d?.displayName && <li>Display Name : {d.displayName}</li>}
                                    {d?.incorporationType && <li>Incorporation Type : {d.incorporationType}</li>}
                                    {d?.email && <li>Email : {d.email}</li>}
                                    {d?.country && <li>Country : {d.country}</li>}
                                    {d?.panNum && <li>PanNum : {d.panNum}</li>}
                                    {d?.gstin && <li>gstin : {d.gstin}</li>}
                                    {d?.userRoleID && <li>userRoleID : {d.userRoleID}</li>}
                                    {d?.roleName && <li>Role Name : {d.roleName}</li>}
                                    <ul>
                                      <li style={mystyle}>
                                        <button onClick={() => handleEdit(d.organizationID)}>EDIT</button>
                                      </li>
                                    </ul>
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
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrgCardsList;
