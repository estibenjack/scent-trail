import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <h2 className="nav-title">
        <FontAwesomeIcon icon={faChartSimple} className="nav-title-icon" />
        Scent Trail
      </h2>
      <div className="nav-links">
        <Link to="/" draggable="false">
          Dashboard
        </Link>
        <Link to="/view-all" draggable="false">
          View All
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
