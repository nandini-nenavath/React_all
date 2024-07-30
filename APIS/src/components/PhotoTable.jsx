import React, { useState } from "react";
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';

const PhotoTable = ({ module, photos, addPhoto, removePhoto, onPhotoClick }) => {
  const [globalFilter, setGlobalFilter] = useState(null);

  const columns = [
    { field: 'img_src', name: 'Picture', sortable: false, cell: (row) => <img src={row.img_src} alt={row.camera.name} width="150" /> },
    { field: 'id', name: 'Camera ID', sortable: true },
    { field: 'camera.name', name: 'Camera Name', sortable: true },
    { field: 'camera.full_name', name: 'Camera Full Name', sortable: true },
    {field: 'Add to Local', name: 'Add to Local', button: true, sortable: false,cell: (row) => addPhoto && (<button onClick={() => addPhoto(row)}>Add to Local</button>)},
    {field: 'Remove from Local', name: 'Remove from Local', button: true, sortable: false,cell: (row) => removePhoto && (<button onClick={() => removePhoto(row)}>Remove From Local</button>)}
  ];

  const header = (
    <div className="table-header">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
      </span>
    </div>
  );

  return (
    <>
      <DataTable
        showGridlines
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 15, 20, 50]}
        value={photos}
        onRowClick={(e) => onPhotoClick(e.data)}
        globalFilter={globalFilter}
        header={header}
      
      >
       
          {columns?.filter((e)=>module==='photos'?e?.name!=='Remove from Local':e?.name!=='Add to Local')?.map((d,i)=>(d?.cell?<Column field={d?.field} header={d?.name} body={(row)=>d.cell?d.cell(row):null}/>:<Column sortable={d?.sortable} filterType="numeric" field={d?.field} filter
              filterPlaceholder={`Search by ${d.name}`}
              filterField={d.field.includes('.') ? d.field.split('.')[1] : d.field}
              filterElement={(options) => <InputText value={options.value} onChange={(e) => options.filterCallback(e.target.value, options.index)} />} header={d?.name}/>))}
      </DataTable>
    </>
    // <table className="tab">
    //   <thead className="tab">
    //     <tr className="tab">
    //       <th className="tab">Picture</th>
    //       <th className="tab">Camera ID</th>
    //       <th className="tab">Camera Name</th>
    //       <th className="tab">Camera Full Name</th>
    //       {addPhoto && <th className="tab">Add to Local</th>}
    //       {removePhoto && <th className="tab">Remove from Local</th>}
    //     </tr>
    //   </thead>
    //   <tbody className="tab">
    //     {photos.map((photo) => (
    //       <PhotoRowComponent key={photo.id} photo={photo} addPhoto={addPhoto} removePhoto={removePhoto} onPhotoClick={onPhotoClick} />
    //     ))}
    //   </tbody>
    // </table>
  );
};

export default PhotoTable;


