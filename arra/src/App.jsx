import './App.css'

function App() {
const VouchersData = [
    {
        key: "0",
        id: "0",
        className: "",
        data: {
            parent: 'vouchers',
            particulars: "Accounting Vouchers",
            id: "data-0",
            fullAccess: "Yes",
            viewAccess: "Yes",
            editAccess: "Yes",
            createAccess: "Yes",
            deleteAccess: "Yes",
            exportPrintAndDownload: "Yes"
        },
        children: [
            {
                key: "0-0",
                id: "v-0",
                data: {
                    parent: 'accountingVouchers',
                    particulars: "Sales",
                    id: "data-0-0",
                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
            {
                key: "0-1",
                id: "v-1",
                data: {
                    parent: 'accountingVouchers',
                    particulars: "Purchases",
                    id: "data-0-1",

                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
            {
                key: "0-2",
                id: "v-2",
                data: {
                    parent: 'accountingVouchers',
                    particulars: "Payments",
                    id: "data-0-2",
                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
            {
                key: "0-3",
                id: "v-3",
                data: {
                    parent: 'accountingVouchers',
                    particulars: "Journals",
                    id: "data-0-3",

                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
            {
                key: "0-4",
                id: "v-4",
                data: {
                    parent: 'accountingVouchers',
                    particulars: "Receipts",
                    id: "data-0-4",

                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },

            {
                key: "0-5",
                id: "v-6",
                data: {
                    parent: 'accountingVouchers',
                    particulars: "Contra",
                    id: "data-0-6",

                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
            {
                key: "0-6",
                id: "v-7",
                data: {
                    parent: 'accountingVouchers',
                    particulars: "Credit Note",
                    id: "data-0-7",

                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
            {
                key: "0-7",
                id: "v-8",
                data: {
                    parent: 'accountingVouchers',
                    particulars: "Debit Note",
                    id: "data-0-8",
                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
        ],
    },
    {
        key: "1",
        id: "vv-1",
        className: "",
        data: {
            particulars: "Inventory Vouchers",
            id: "data-1",
            parent: 'vouchers',
            fullAccess: "Yes",
            viewAccess: "Yes",
            editAccess: "Yes",
            createAccess: "Yes",
            deleteAccess: "Yes",
            exportPrintAndDownload: "Yes"
        },
        children: [
            {
                key: "1-0",
                id: "v1-0",
                data: {
                    parent: 'inventoryVouchers',
                    particulars: "Sales Order",
                    id: "data-1-0",

                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
            {
                key: "1-1",
                id: "v1-1",
                data: {
                    parent: 'inventoryVouchers',
                    particulars: "Purchase Order",
                    id: "data-1-1",
                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
            {
                key: "1-2",
                id: "v1-2",
                data: {
                    parent: 'inventoryVouchers',
                    particulars: "Delivery Note",
                    id: "data-1-2",
                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
            {
                key: "1-3",
                id: "v1-3",
                data: {
                    parent: 'inventoryVouchers',
                    particulars: "Receipt Note",
                    id: "data-1-3",
                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
            {
                key: "1-4",
                id: "v1-4",
                data: {
                    parent: 'inventoryVouchers',
                    particulars: "Rejection Note - Customers & JW",
                    id: "data-1-4",
                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
            {
                key: "1-5",
                id: "v1-5",
                data: {
                    parent: 'inventoryVouchers',
                    particulars: "Rejection Note - Suppliers & JW",
                    id: "data-1-5",
                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
            {
                key: "1-6",
                id: "v1-6",
                data: {
                    parent: 'inventoryVouchers',
                    particulars: "Physical Stock",
                    id: "data-1-6",
                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
            {
                key: "1-7",
                id: "v1-7",
                data: {
                    parent: 'inventoryVouchers',
                    particulars: "Stock Conversion Journal",
                    id: "data-1-7",
                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
            {
                key: "1-8",
                id: "v1-8",
                data: {
                    parent: 'inventoryVouchers',
                    particulars: "Manufacturing Journal",
                    id: "data-1-8",
                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
            {
                key: "1-9",

                data: {
                    parent: 'inventoryVouchers',
                    particulars: "Inter Godown Transfer",
                    id: "data-1-9",
                    fullAccess: "Yes",
                    viewAccess: "Yes",
                    editAccess: "Yes",
                    createAccess: "Yes",
                    deleteAccess: "Yes",
                    exportPrintAndDownload: "Yes"
                },
            },
        ],
    },
];


  var result = VouchersData.flatMap(value =>
    value.children.map(child => ({ parentData: value.data, childData: child.data }))
  );
  console.log(result)
  var result1 = VouchersData.flatMap(value =>
    value.children.filter((child)=>child.data.viewAccess==='Yes')
  );
  console.log(result1)
  var result2=VouchersData.reduce((accumulator,current)=>accumulator+current.children.length,0)
  console.log(result2)
  var result3=VouchersData.flatMap(value=>value.children.some((child)=>child.data.particulars==='Debit Note'))
  console.log(result3)
  var result4=VouchersData.flatMap(value=>value.children.find((val)=>val.data.particulars==='Rejection Note - Suppliers & JW'))
  console.log(result4)
  var result5=VouchersData.flatMap(value=>value.children.slice(2,5))
  console.log(result5)
  var result6=VouchersData.flatMap(value=>value.children.reverse())
  console.log(result6)
  var result7=Object.keys(VouchersData).map(key=>VouchersData[key])
  console.log(result7)
  var result8=VouchersData.flatMap(value=>value.children.findLastIndex((val)=>val.data.parent==='accountingVouchers'))
  console.log('result',result8)
  var result9=VouchersData.flatMap(value=>value.children.every((val)=>val.data.deleteAccess==='Yes'))
  console.log(result9)
  var result10=console.log(result.pop())
  console.log(result)
  console.log(result.push(result10))
  console.log(result)
  var result11=console.log(result.shift())
  console.log(result)
  console.log(result.unshift(result11))
  console.log(result)
  var result12=VouchersData.flatMap(val=>val.children.findLast((val)=>val.data.particulars==="Sales Order"))
  console.log(result12)
  VouchersData.flatMap(val=>val.children.forEach((val)=>console.log(val)))
  return (
 null
  )
}

export default App
