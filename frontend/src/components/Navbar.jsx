import { NavLink } from "react-router-dom";
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          draggable="false"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/view-all"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          draggable="false"
        >
          View All
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
