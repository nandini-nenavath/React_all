import React, { useState,useEffect } from 'react'
import './App.css';
import { Fragment } from 'react';
import { Dropdown } from 'primereact/dropdown';
import {Button} from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import {InputText} from 'primereact/inputtext'
import * as XLSX from "xlsx";
import { read, utils } from 'xlsx';

function App() {
  const [selectedOne,setSelectedOne]=useState(null);
  // const [dialogHeader,setDialogHeader]=useState('');
  const [visibleDialog,setVisibleDialog]=useState({
    configuration:false,opening:false,attachments:false,business:false,tax:false
  })
  const opt=[
    { name: 'Branch / Divisions', code: 'Branch / Divisions' },
    { name: 'Capital Account', code: 'Capital Account' },
    { name: 'Current Assets', code: 'Current Assets' },
    { name: 'Current Liabilities', code: 'Current Liabilities' }, 
    { name: 'Direct Expenses', code: 'Direct Expenses' },
    { name: 'Direct Incomes', code: 'Direct Incomes' },
    { name: 'Fixed Assets', code: 'Fixed Assets' },
    { name: 'Indirect Expenses', code: 'Indirect Expenses' },
    { name: 'Indirect Incomes', code: 'Indirect Incomes' },
    { name: 'Investments', code: 'Investments' },
    { name: 'Loans (Liability)', code: 'Loans (Liability)' },
    { name: 'Misc. Expenses (ASSET)', code: 'Misc. Expenses (ASSET)' },
    { name: 'Purchase Accounts', code: 'Purchase Accounts' },
    { name: 'Sales Accounts', code: 'Sales Accounts' },
    { name: 'Suspense A/c', code: 'Suspense A/c' },
    { name: 'Bank Accounts', code: 'Bank Accounts' },
    { name: 'Bank OD A/c', code: 'Bank OD A/c' },
    { name: 'Cash-in-hand', code: 'Cash-in-hand' },
    { name: 'Deposits (Asset)', code: 'Deposits (Asset)' },
    { name: 'Duties & Taxes', code: 'Duties & Taxes' },
    { name: 'Loans & Advances (Asset)', code: 'Loans & Advances (Asset)' },
    { name: 'Provisions', code: 'Provisions' },
    { name: 'Reserves & Surplus', code: 'Reserves & Surplus' },
    { name: 'Secured Loans', code: 'Secured Loans' },
    { name: 'Stock-in-hand', code: 'Stock-in-hand' },
    { name: 'Sundry Creditors', code: 'Sundry Creditors' },
    { name: 'Sundry Debtors', code: 'Sundry Debtors' },
    { name: 'Unsecured Loans', code: 'Unsecured Loans' },

  ]

  const handleChange=(e)=>{
    setSelectedOne(e.value)
  }
  const handleButtonClick = (e) => {
    switch(e){
      case "Configuration":
        setVisibleDialog({...visibleDialog,configuration:true});
        break;
      case "Opening Balance":
        setVisibleDialog({...visibleDialog,opening:true});
        break;
      case "Attachments":
        setVisibleDialog({...visibleDialog,attachments:true});
        break;
      case "Business Information":
        setVisibleDialog({...visibleDialog,business:true});
        break;
      case "Tax Applicability":
        setVisibleDialog({...visibleDialog,tax:true});
        break;
      default:
        break;
      
      }
};
  const mapping={
      'Branch / Divisions': ['Configuration', 'Opening Balance'],
      'Capital Account': ['Attachments', 'Business Information'],
      'Current Assets': ['Tax Applicability', 'Configuration'],
      'Current Liabilities': ['Business Information', 'Opening Balance'],
      'Direct Expenses': ['Attachments', 'Configuration'],
      'Direct Incomes': ['Tax Applicability', 'Attachments'],
      'Fixed Assets': ['Configuration', 'Business Information'],
      'Indirect Expenses': ['Business Information', 'Tax Applicability'],
      'Indirect Incomes': ['Configuration', 'Opening Balance'],
      'Investments': ['Opening Balance', 'Attachments'],
      'Loans (Liability)': ['Tax Applicability', 'Business Information'],
      'Misc. Expenses (ASSET)': ['Configuration', 'Attachments'],
      'Purchase Accounts': ['Tax Applicability', 'Opening Balance'],
      'Sales Accounts': ['Configuration', 'Business Information'],
      'Suspense A/c': ['Attachments', 'Business Information'],
      'Bank Accounts': ['Tax Applicability', 'Configuration'],
      'Bank OD A/c': ['Opening Balance', 'Configuration'],
      'Cash-in-hand': ['Business Information', 'Tax Applicability'],
      'Deposits (Asset)': ['Opening Balance', 'Business Information'],
      'Duties & Taxes': ['Tax Applicability', 'Opening Balance'],
      'Loans & Advances (Asset)': ['Attachments', 'Configuration'],
      'Provisions': ['Business Information', 'Attachments'],
      'Reserves & Surplus': ['Tax Applicability', 'Configuration'],
      'Secured Loans': ['Business Information', 'Attachments'],
      'Stock-in-hand': ['Tax Applicability', 'Configuration'],
      'Sundry Creditors': ['Opening Balance', 'Configuration'],
      'Sundry Debtors': ['Tax Applicability', 'Business Information'],
      'Unsecured Loans': ['Attachments', 'Business Information'],
      'Configuration': ['Opening Balance', 'Attachments'],
      'Tax Applicability': ['Configuration', 'Business Information'],
      'Business Information': ['Tax Applicability', 'Configuration'],
      'Opening Balance': ['Business Information', 'Attachments'],
      'Attachments': ['Tax Applicability', 'Configuration']
  }
  const hideDialog=(dialogName)=>{
    setVisibleDialog({...visibleDialog,[dialogName]:false})
  }
  const taxApplicableObj = {
    "Sundry Creditors": {
        "tcsBtn": true,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": true,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,

    },
    "Sundry Debtors": {
        "tcsBtn": true,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": true,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,

    },
    "Direct Incomes": {
        'gstBtn': true,
        "tcsBtn": true,
        'NatOfGoods': true,
        "tdsBtn": true,
        'NatOfPay': true,
    },
    'Indirect Incomes': {
        'gstBtn': true,
        "tcsBtn": true,
        'NatOfGoods': true,
        "tdsBtn": true,
        'NatOfPay': true,
    },
    'Current Assets': {
        'gstBtn': true,
        "tcsBtn": false,
        "panTcs": false,
        "tanTcs": false,
        "tcsColPref": false,
        "ignoreTcsTL": false,
        "Tcsresidential": false,
        "typeOfCollec": false,
        "lowerCollection": false,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": true,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        'typeOfApplicability': true
    },
    'Current Liabilities': {
        'gstBtn': true,
        "tcsBtn": true,
        'NatOfGoods': true,
        // "panTcs": true,
        // "tanTcs": true,
        // "tcsColPref": true,
        // "ignoreTcsTL": true,
        // "Tcsresidential": true,
        // "typeOfCollec": true,
        // "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": true,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        'typeOfApplicability': true

    },
    'Capital Account': {
        'gstBtn': false,
        "tcsBtn": false,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        'typeOfApplicability': true,

    },
    'Fixed Assets': {
        'gstBtn': true,
        "tcsBtn": false,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        'typeOfApplicability': true

    },
    'Cash-in-Hand': {
        "tcsBtn": true,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": true,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
    },
    'Loans (Liability)': {
        'gstBtn': true,
        "tcsBtn": false,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        'typeOfApplicability': true

    },
    'Branch / Divisions': {
        "tcsBtn": true,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        'typeOfApplicability': true
    },
    'Unsecured Loans': {
        'gstBtn': true,
        "tcsBtn": false,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        'typeOfApplicability': true

    },
    'Secured Loans': {
        'gstBtn': true,
        "tcsBtn": false,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        'tdsBtn': true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        'typeOfApplicability': true
    },
    'Reserves & Surplus': {
        'gstBtn': false,
        "tcsBtn": false,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        'typeOfApplicability': true
    },
    'Duties & Taxes': {
        'gstBtn': true,
        "tcsBtn": true,
        "tdsBtn": true,
        "panTds": false,
        "tanTds": false,
        'NatOfGoods': true,
        'NatOfPay': true,
        "typeOfDeduct": false,
        "lowerDeduct": false,
        "Tdsresidential": false,
        'tdsDeductionPref': false,
        "ignoreTdsTL": false,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
    },
    'Deposits (Asset)': {
        'gstBtn': false,
        "tcsBtn": false,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        'typeOfApplicability': true
    },
    'Misc. Expenses (ASSET)': {
        'gstBtn': true,
        "tcsBtn": false,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        'typeOfApplicability': true

    },
    'Loans & Advances (Asset)': {
        'gstBtn': true,
        "tcsBtn": false,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        'typeOfApplicability': true
    },
    'Sales Accounts': {
        'gstBtn': true,
        "tcsBtn": true,
        'NatOfGoods': true,
        "tdsBtn": true,
        'NatOfPay': true,
    },
    'Purchase Accounts': {
        'gstBtn': true,
        "tcsBtn": false,
        'NatOfGoods': true,


        "tdsBtn": true,

        'NatOfPay': true,
    },
    'Primary Expenses': {
        "tcsBtn": true,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
    },
    'Direct Expenses': {
        'gstBtn': true,
        "tcsBtn": false,
        'NatOfGoods': false,
        "tdsBtn": true,
        'NatOfPay': true,
    },
    'Indirect Expenses': {
        'gstBtn': true,
        "tcsBtn": false,
        'NatOfGoods': false,
        "tdsBtn": true,
        'NatOfPay': true,
    },
    'Suspense A/c': {
        'gstBtn': false,
        "tcsBtn": false,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        'typeOfApplicability': true
    },
    'Primary Liabilities': {
        "tcsBtn": false,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,

    },
    'Provisions': {
        'gstBtn': true,
        "tdsBtn": true,
        "tcsBtn": true,
        'NatOfGoods': true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        'typeOfApplicability': true
    },

    'Primary Assets': {

        "tcsBtn": false,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        'typeOfApplicability': false
    },
    'Primary Incomes': {
        "tcsBtn": false,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
    },
    'Investments': {
        "tcsBtn": false,
        "panTcs": true,
        "tanTcs": true,
        "tcsColPref": true,
        "ignoreTcsTL": true,
        "Tcsresidential": true,
        "typeOfCollec": true,
        "lowerCollection": true,
        'gstBtn': true,
        "tdsBtn": true,
        "panTds": true,
        "tanTds": false,
        "typeOfDeduct": true,
        "lowerDeduct": true,
        "msme": false,
        "regNum": true,
        "dor": true,
        "regType": true,
        "Tdsresidential": true,
        'tdsDeductionPref': true,
        "ignoreTdsTL": true,
        'typeOfApplicability': true
    }



}
  return (
    <Fragment>
      
    <label htmlFor='opt'>Choose
    <br/>
    <Dropdown value={selectedOne} onChange={handleChange} options={opt} name='opt' optionLabel="name" placeholder='Select an option' className='w-full md:w-14rem'/>
    {selectedOne && mapping[selectedOne.name] && (
      <div>
        {mapping[selectedOne.name].map((d,index)=>
        (
        <>
        <div className='tab'> 
        <Button key={index} label={d} onClick={()=>(handleButtonClick(d))} />
        
         
        </div>
        <br/>
        <br/>
        <br/>
        </>
  
      )
        )}
        <Dialog header="Configuration" visible={visibleDialog.configuration} onHide={() => hideDialog('configuration')}>
        </Dialog>
        <Dialog header="Opening Balance" visible={visibleDialog.opening} onHide={() => hideDialog('opening')}>
        </Dialog>
        <Dialog header="Attachments" visible={visibleDialog.attachments} onHide={() => hideDialog('attachments')}>
        </Dialog>
        <Dialog header="Business Information" visible={visibleDialog.business} onHide={() => hideDialog('business')}>
        </Dialog>
        <Dialog header="Tax Applicability" visible={visibleDialog.tax} onHide={() => hideDialog('tax')}>
        {/* <p>{data.slice(1).map((row, rowIndex) => (
          <ul>
              <li key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{typeof cell === 'boolean' ? (cell ? cell : pass) : cell}</td>
                ))}
              </li>
          </ul>
            ))}</p> */}
            {selectedOne?.name?
             (Object?.keys(taxApplicableObj[selectedOne?.name])?.map((d,i)=>{
  return (
    <>
        {taxApplicableObj[selectedOne?.name][d]?<React.Fragment>
          {d}<br/><InputText/><br/></React.Fragment>:null}
    </>
  )
             })):null
            }
        </Dialog>
 
      </div>

     )}</label>
    </Fragment>
  )
}

export default App
