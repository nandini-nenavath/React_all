import React, { useState } from "react";

const PhotoRow = ({ photo, addPhoto, removePhoto, onPhotoClick }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddPhoto = () => {
    addPhoto(photo);
    setIsAdded(true);
  };

  return (
    <tr className="tab" onClick={() => onPhotoClick(photo)}>
      <td className="tab">
        <img src={photo.img_src} alt={photo.camera.full_name} width="200" />
      </td>
      <td className="tab">{photo.camera.id}</td>
      <td className="tab">{photo.camera.name}</td>
      <td className="tab">{photo.camera.full_name}</td>
      <td className="tab">
        {addPhoto && (
          <button onClick={handleAddPhoto} disabled={isAdded}>
            {isAdded ? "Added to local" : "Add to local"}
          </button>
        )}
      </td>
      <td className="tab">
        {removePhoto && (
          <button onClick={() => removePhoto(photo)}>Remove from local</button>
        )}
      </td>
    </tr>
  );
};

export default PhotoRow;
