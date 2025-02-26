import { useState, useEffect } from "react";
import axios from "axios";
import PerfumeCard, {
  seasonLookup,
  sillageLookup,
  longevityLookup,
} from "../components/PerfumeCard";

function ViewAll() {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editPerfumeId, setEditPerfumeId] = useState(null);
  const [newPerfume, setNewPerfume] = useState({
    name: "",
    brand: "",
    season: [],
    sillage: "",
    longevity: "",
    rating: "",
  });

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

  const handleAddPerfume = async (e) => {
    e.preventDefault();
    // console.log("Form data submitted:", newPerfume); // Log the perfume data

    try {
      if (isEditMode) {
        // to update existing perfume entry
        const response = await axios.put(
          `http://localhost:8080/api/perfumes/${editPerfumeId}`,
          newPerfume
        );
        console.log("Perfume updated: ", response.data);
        // update the perfume list with edited perfume
        setPerfumes(
          perfumes.map((perfume) =>
            perfume.id === editPerfumeId ? response.data : perfume
          )
        );
      } else {
        const response = await axios.post(
          "http://localhost:8080/api/perfumes",
          newPerfume
        );
        console.log("New perfume added:", response.data); // Log the response
        setPerfumes([...perfumes, response.data]);
      }
      resetFormAndCloseModal();
      // setIsModalOpen(false);
      // setNewPerfume({
      //   name: "",
      //   brand: "",
      //   season: "",
      //   sillage: [],
      //   longevity: "",
      //   rating: "",
      // });
    } catch (err) {
      console.error(
        isEditMode ? "Error updating perfume: " : "Error adding perfume: ",
        err
      );
    }
  };

  const handleEdit = (perfume) => {
    setIsEditMode(true);
    setEditPerfumeId(perfume.id);
    setNewPerfume({
      name: perfume.name,
      brand: perfume.brand,
      season: perfume.season || [],
      sillage: perfume.sillage,
      longevity: perfume.longevity,
      rating: perfume.rating,
    });
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPerfume((prev) => ({ ...prev, [name]: value }));
  };

  const resetFormAndCloseModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setEditPerfumeId(null);
    setNewPerfume({
      name: "",
      brand: "",
      season: [],
      sillage: "",
      longevity: "",
      rating: "",
    });
  };

  const handleDelete = async (id) => {
    if (!id) {
      console.log("Error: Perfume ID is undefined.");
      return;
    }

    try {
      //send DELETE req to remove the perfume from the backend
      await axios.delete(`http://localhost:8080/api/perfumes/${id}`);
      //update the state to remove the deleted perfume from the frontend
      setPerfumes(perfumes.filter((perfume) => perfume.id !== id));
      console.log(`Perfume with ID ${id} deleted <successfully.`);
    } catch (err) {
      console.error("Error deleting perfume: ", err);
    }
  };

  const openAddModal = () => {
    setIsEditMode(false);
    setEditPerfumeId(null);
    setNewPerfume({
      name: "",
      brand: "",
      season: "",
      sillage: [],
      longevity: "",
      rating: "",
    });
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="page-container">
        <h2 className="title" style={{ padding: "20px" }}>
          Loading perfumes...
        </h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="page-container">
        <h2 className="title" style={{ padding: "20px" }}>
          Error: {error}
        </h2>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="view-all-container">
        <h3 className="title">View All Perfumes ({perfumes.length})</h3>
        <button onClick={openAddModal} className="add-btn">
          Add Perfume
        </button>
        <div className="perfume-grid">
          {perfumes.map((perfume) => {
            // console.log(typeof perfume.rating);
            return (
              <PerfumeCard
                key={perfume.id}
                id={perfume.id}
                name={perfume.name}
                brand={perfume.brand}
                season={perfume.season}
                sillage={perfume.sillage}
                longevity={perfume.longevity}
                rating={perfume.rating}
                onDelete={handleDelete}
                onEdit={() => handleEdit(perfume)}
              />
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{isEditMode ? "Edit Perfume" : "Add New Perfume"}</h2>
            <form onSubmit={handleAddPerfume}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newPerfume.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={newPerfume.brand}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Season</label>
                <div className="season-grid">
                  {Object.entries(seasonLookup).map(([key, label]) => (
                    <label key={key} className="checkbox-label">
                      <input
                        className="cb-input"
                        type="checkbox"
                        name="season"
                        value={key}
                        checked={newPerfume.season.includes(key)}
                        onChange={(e) => {
                          const { value } = e.target;
                          setNewPerfume((prev) => ({
                            ...prev,
                            season: prev.season.includes(value)
                              ? prev.season.filter((s) => s !== value)
                              : [...prev.season, value],
                          }));
                        }}
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="sillage">Sillage</label>
                <select
                  id="sillage"
                  name="sillage"
                  value={newPerfume.sillage}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select Sillage
                  </option>
                  {Object.entries(sillageLookup).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="longevity">Longevity</label>
                <select
                  id="longevity"
                  name="longevity"
                  value={newPerfume.longevity}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select Longevity
                  </option>
                  {Object.entries(longevityLookup).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  value={newPerfume.rating}
                  onChange={(e) => {
                    const value = Math.max(
                      1,
                      Math.min(5, Number(e.target.value))
                    );
                    setNewPerfume((prev) => ({ ...prev, rating: value }));
                  }}
                  min="1"
                  max="5"
                  required
                />
              </div>
              <div className="button-group">
                <button type="submit" className="btn-primary">
                  {isEditMode ? "Update" : "Save"}
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={resetFormAndCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewAll;
