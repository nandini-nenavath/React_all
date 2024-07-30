import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Routes, useLocation } from 'react-router-dom';
import { useGetSingleOrgQuery } from './Store/common';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

function Cog() {
  const [singleOrg, setSingleOrg] = useState({});
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  const { data: singleData } = useGetSingleOrgQuery(location?.state, { skip: !location?.state });

  const [orgFormData, setOrgFormData] = useState({
    booksBeginningFrom: singleOrg.booksBeginningFrom|| '',
    default: singleOrg.accountingPeriodBeginningMonth && singleOrg.accountingPeriodEndMonth ? `Financial Year (${singleOrg.accountingPeriodBeginningMonth} - ${singleOrg.accountingPeriodEndMonth})`: '',
    dateFormat:singleOrg.dateFormat||'',
    currency: singleOrg.currencyFormalName || '',
    currencyISOCode: singleOrg.currencyISOCode || '',
  });

  const categories = [
    { name: 'Enable this option to easily review and track changes made to data within the system', key: 'Edit Log' },
    { name: 'Enable this option to manage financial transactions more efficiently and with greater accuracy', key: 'Enable Bill wise Entries' },
    { name: 'Enable this option to categorize expenses and income sources for better financial management', key: 'Enable Cost centers' },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFields, setShowFields] = useState(true);

  useEffect(() => {
    if (singleData?.success) {
      setSingleOrg(singleData.data);
      setOrgFormData({
        booksBeginningFrom: singleData.data.booksBeginningFrom || null,
        default: `Financial Year (${singleData.data.accountingPeriodBeginningMonth} - ${singleData.data.accountingPeriodEndMonth})`,
        dateFormat:singleData.data.dateFormat,
        currency: singleData.data.currencyFormalName || '',
        currencyISOCode: singleData.data.currencyISOCode || '',
      });
    }
    console.log(singleData)
  }, [singleData]);

  const handleCheck= (e) => {
    let selectCategories = [...selectedCategories];

    if (e.checked)
        selectCategories.push(e.value);
    else
        selectCategories = selectCategories.filter(category => category.key !== e.value.key);

    setSelectedCategories(selectCategories);
}

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrgFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    console.log(e)
  };
  const handleDateChange = (e) => {
    const date = e.value;
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    setOrgFormData((prevFormData) => ({
      ...prevFormData,
      booksBeginningFrom: formattedDate
    }));
    console.log(e)
  };
    const toggleView = (e) => {
      setShowFields(e);
    }

  return (
    <>
      <div className="card border-0 b-r-15 overlap-card-margin mb-0">
        <div className="card-header bottom-color no-card-bg card-header-f">
          <div className="row align-items-center">
            <div className="col-xxl-12">
              <div>
                <p className="font-size-18 f-600 mb-0 overflow-elipsis">
                  <Link to="/"><i className="pi pi-arrow-left" style={{ fontSize: '1.5rem', marginLeft: "10px" }}></i></Link>
                  <a className="gap">Cog</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Organisation Settings</h2>
        <div>
          <Button onClick={() => toggleView(true)}>Fields</Button>
          <Button onClick={() => toggleView(false)}>Features</Button>
        </div>
        <div>
          {showFields && (
            <>
              <form>
                <div className="m-t-20 org-cards-layout">
                  <div className="card border-0 active margin-bottom-8 shadow-sm">
                    <div className="card-body p-16-20">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <div>
                           

                            <label htmlFor='booksBeginningFrom'>Books beginning from</label>
                            <Calendar id='booksBeginningFrom' tabIndex={1} name='booksBeginningFrom'  dateFormat='yy-mm-dd' onChange={handleDateChange} value={orgFormData.booksBeginningFrom ? new Date(orgFormData.booksBeginningFrom) : null} />
                            <br />
                            <label htmlFor='dateFormat'>Select Date Format</label>
                            <InputText name="dateFormat" tabIndex={2} value={orgFormData.dateFormat} onChange={handleInputChange} id="dateFormat" type="text"/>
                          </div>
                          <div>
                            <label>Default Accounting Period</label>
                            <InputText name="default" tabIndex={3} value={orgFormData.default} onChange={handleInputChange} id="default" type="text" />
                          </div>
                          <div>
                            <label htmlFor='currency'>Currency</label>
                            <InputText name="currency" tabIndex={4} value={orgFormData.currency} onChange={handleInputChange} id="currency" type="text" />
                          </div>
                          <div>
                            <label htmlFor='iso'>ISO CODE</label>
                            <InputText name="currencyISOCode" tabIndex={6} value={orgFormData.currencyISOCode} onChange={handleInputChange} id="iso" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </>
          )}
          {!showFields && (
            <div className="features">
              <h3>Features</h3>
              <div className="field">
                {categories.map((category) => (
                  <div key={category.key} className="flex align-items-center">
                    <Checkbox inputId={category.key} name="category" value={category.key} onChange={handleCheck} checked={selectedCategories.includes(category.key)} />
                    <label htmlFor={category.key} className="ml-2">
                      {category.key}
                      <p>{category.name}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cog;