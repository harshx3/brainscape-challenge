import { useEffect, useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import DropArea from "./components/DropArea";


function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(`https://api.slingacademy.com/v1/sample-data/photos?limit=132`);
          const data = await response.json();
          const newPhotos = data.photos;
          console.log("newphotos", newPhotos);
          setPhotos((prev) => [...prev, ...newPhotos]);
          console.log(data.photos);
          console.log(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
    
      fetchData();
    }, []); 
    
  // const handleInfiniteScroll = async () => {
  //   try {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop + 1 >=
  //       document.documentElement.scrollHeight
  //     ) {
  //       setLimit(() => limit+10);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleInfiniteScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleInfiniteScroll);
  //   };
  // }, [loading]);

  return (
    <>
      <h1 className="text-center font-bold mt-2">Brainscape Coding Exercise</h1>
      <Gallery photos={photos} loading={loading} />
      <DropArea photos={photos} />
    </>
  );
}

export default App;
