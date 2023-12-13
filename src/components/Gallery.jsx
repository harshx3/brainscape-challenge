import React from "react";

const Gallery = (props) => {
  const { photos, loading } = props;

  const handleImageDrag = (e, photoId) => {
    e.dataTransfer.setData("text/plain", photoId.toString());
    console.log(photoId);
  };
 

  return (
    <>
      <div className="flex flex-wrap gap-2 items-start justify-start w-[50%] m-5">
        {loading && <div>Loading...</div>}
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative w-[14rem] flex flex-col items-center justify-center border bottom-2 border-gray-950"
          >
            <h2 className="border text-black-900 absolute top-0 left-0 font-bold">
              {photo.id}
            </h2>
            <img
              draggable
              onDragStart={(e) => handleImageDrag(e, photo.id)}
              src={photo.url}
              className="border aspect-auto object-contain cursor-grab"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
