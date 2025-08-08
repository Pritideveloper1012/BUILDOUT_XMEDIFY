import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMedicalCenters } from "../Utils/Api";
import HospitalCard from "../Components/HospitalCard/HospitalCard";
import SearchBar from "../Components/SearchBar/SearchBar";
import FAQs from "../Components/Sections/FAQs/FAQs";
import DownloadApp from "../Components/Sections/DownloadApp/DownloadApp";

const Search = () => {
  const [params] = useSearchParams();
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);

  const state = params.get("state");
  const city = params.get("city");

 useEffect(() => {
  if (state && city) {
    fetchMedicalCenters(state, city).then(data => {
      setCenters(data);
      setLoading(false);
    });
  } else {
    setLoading(false);
  }
}, [state, city]);

  return (
    <>
    <SearchBar />
  <div className="container my-4">
  {loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <h4>{centers.length} medical centers available in {state}</h4>
      {centers.length === 0 ? (
        <p>No medical centers found in {city}, {state}.</p>
      ) : (
        centers.map(center => (
          <HospitalCard key={center.id} data={center} />
        ))
      )}
    </>
  )}
</div>

    <FAQs />
    <DownloadApp />
    </>
  );
};

export default Search;