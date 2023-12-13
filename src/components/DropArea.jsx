import React, { useState } from "react";

const DropArea = (props) => {
  const { photos } = props;
  const [droppedImages, setDroppedImages] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const photoId = e.dataTransfer.getData("text/plain");
    if (photoId && droppedImages.length < 15) {
      const droppedImg = photos.find((photo) => photo.id === Number(photoId));
      if (
        droppedImg &&
        !droppedImages.some((img) => img.id === droppedImg.id)
      ) {
        setDroppedImages((prevImages) => [...prevImages, droppedImg]);
      }
    }
    else {
        alert("Limit Reached");
    }
  };

  return (
    <div
      className="dropContainer"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="imageInfo">
        {droppedImages.map((photo) => (
          <div key={photo.id} className="imageDiv">
            <img
              src={photo.url}
              className="border aspect-auto object-contain"
              style={{ width: "100px" }}
            />
          </div>
        ))}
      </div>
      <div className="staggedList">
        {droppedImages.map((photo, index) => (
          <div key={photo.id} className="staggedItem">
            <span><b>{index+1}</b> {photo.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropArea;
