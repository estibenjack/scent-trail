import { useState, useEffect } from "react";
import axios from "axios";
import PerfumeCard from "./PerfumeCard";

const MainDisplay = () => {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/perfumes");
        setPerfumes(response.data);
      } catch (error) {
        console.error("Error fetching perfumes: ", error);
      }
    };
    fetchPerfumes();
  }, []);

  return (
    <div className="main-container">
      <h3 className="title">Perfumes tried: {perfumes.length}</h3>
      <div className="perfume-grid">
        {perfumes.map((perfume, index) => (
          <PerfumeCard key={index} name={perfume.name} brand={perfume.brand} />
        ))}
      </div>
    </div>
  );
};

export default MainDisplay;
