import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const Card = ({ color, title, quantity, icon, href }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card border-left-${color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}
              >
                {title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {quantity}
              </div>
              <div>
                <Link to={href}>Detalle</Link>
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas ${icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}

