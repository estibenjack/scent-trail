const seasonLookup = {
  WINTER: "Winter",
  SPRING: "Spring",
  SUMMER: "Summer",
  AUTUMN: "Autumn",
};

const sillageLookup = {
  INTIMATE: "Intimate",
  MODERATE: "Moderate",
  STRONG: "Strong",
  ENORMOUS: "Enormous",
};

const longevityLookup = {
  WEAK: "Weak",
  MODERATE: "Moderate",
  LONG: "Long lasting",
  ETERNAL: "Eternal",
};

function PerfumeCard({ name, brand, season, sillage, longevity, rating }) {
  const readableSeason = seasonLookup[season];
  const readableSillage = sillageLookup[sillage];
  const readableLongevity = longevityLookup[longevity];

  return (
    <div className="perfume-card">
      <h4>{name}</h4>
      <p>{brand}</p>
      <p>Suitable for: {readableSeason}</p>
      <p>Sillage: {readableSillage}</p>
      <p>Longevity: {readableLongevity}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default PerfumeCard;
