import { useState, useEffect } from "react";
import axios from "axios";
import PerfumeCard from "../components/PerfumeCard";

function ViewAll() {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/perfumes");
        setPerfumes(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.messages);
        setLoading(false);
      }
    };
    fetchPerfumes();
  }, []);

  if (loading) {
    return <div>Loading perfumes...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="view-all-container">
      <h3 className="title">View All Perfumes ({perfumes.length})</h3>
      <div className="perfume-grid">
        {perfumes.map((perfume) => (
          <PerfumeCard
            key={perfume.id}
            name={perfume.name}
            brand={perfume.brand}
            season={perfume.season}
            sillage={perfume.sillage}
            longevity={perfume.longevity}
            rating={perfume.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default ViewAll;
