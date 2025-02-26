import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

export const seasonLookup = {
  WINTER: "Winter",
  SPRING: "Spring",
  SUMMER: "Summer",
  AUTUMN: "Autumn",
};

export const sillageLookup = {
  INTIMATE: "Intimate",
  MODERATE: "Moderate",
  STRONG: "Strong",
  ENORMOUS: "Enormous",
};

export const longevityLookup = {
  WEAK: "Weak",
  MODERATE: "Moderate",
  LONG: "Long lasting",
  ETERNAL: "Eternal",
};

// const ratingLookup = {
//   1: "⭐️",
//   2: "⭐️⭐️",
//   3: "⭐️⭐️⭐️",
//   4: "⭐️⭐️⭐️⭐️",
//   5: "⭐️⭐️⭐️⭐️⭐️",
// };

function PerfumeCard({
  id,
  name,
  brand,
  season,
  sillage,
  longevity,
  rating,
  onDelete,
  onEdit,
}) {
  // handle multiple seasons array
  const readableSeason =
    season && season.length > 0
      ? season.map((seasonItem) => seasonLookup[seasonItem]).join(", ")
      : "--";

  const readableSillage = sillage ? sillageLookup[sillage] : "--";
  const readableLongevity = longevity ? longevityLookup[longevity] : "--";
  // const readableRating = rating ? ratingLookup[rating] : "--";

  const renderRating = () => {
    if (rating === null || rating === undefined) {
      return "--";
    }
    const filledStars = Array.from({ length: rating }, (_, index) => (
      <FontAwesomeIcon
        icon={faStar}
        key={`filled-${index}`}
        style={{ color: "#ffc746" }}
      />
    ));
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
      <FontAwesomeIcon
        icon={faStarRegular}
        key={`empty-${index}`}
        style={{ color: "lightgray" }}
      />
    ));
    return [...filledStars, ...emptyStars];
  };

  return (
    <div className="perfume-card">
      <div className="card-actions">
        <button onClick={onEdit} className="card-edit-btn">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => onDelete(id)} className="card-del-btn">
          ✖
        </button>
      </div>
      <h4>{name}</h4>
      <h5>{brand}</h5>
      <p>Suitable for: {readableSeason}</p>
      <p>Sillage: {readableSillage}</p>
      <p>Longevity: {readableLongevity}</p>
      <p>Rating: {renderRating()}</p>
    </div>
  );
}

PerfumeCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  season: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(seasonLookup))),
  sillage: PropTypes.oneOf(Object.keys(sillageLookup)),
  longevity: PropTypes.oneOf(Object.keys(longevityLookup)),
  rating: PropTypes.oneOf([1, 2, 3, 4, 5]),
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default PerfumeCard;
