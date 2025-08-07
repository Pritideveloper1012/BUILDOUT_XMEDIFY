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
    fetchMedicalCenters(state, city).then(data => {
      setCenters(data);
      setLoading(false);
    });
  }, [state, city]);

  return (
    <>
    <SearchBar />
    <div className="container my-4">
      <h4>{centers.length} medical centers available in {state}</h4>
      {loading ? <p>Loading...</p> : (
        centers.map(center => <HospitalCard key={center.id} data={center} />)
      )}
    </div>
    <FAQs />
    <DownloadApp />
    </>
  );
};

export default Search;