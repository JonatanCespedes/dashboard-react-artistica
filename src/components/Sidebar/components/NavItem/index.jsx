import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const NavItem = ({ href, icon, name }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link collapsed" href={href}>
        <i className={`fas fa-fw ${icon}`}></i>
        <span>{name}</span>
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
