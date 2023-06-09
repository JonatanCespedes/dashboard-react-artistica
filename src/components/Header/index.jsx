import styles from "./index.module.css";
import { useAuth } from "../../context/AuthProvider";
import { Link } from "react-router-dom";

export const Header = () => {
  const { currentUser, logout } = useAuth();
  const handleLogout = () => logout()
  return (
    <>
      {/* <!-- Topbar --> */}
      <nav className="navbar navbar-expand navbar-dark bg-dark topbar mb-4 static-top shadow">
        {/* <!-- Sidebar Toggle (Topbar) --> */}

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
          {currentUser ? (
            <>
              <li className={`nav-item ${styles.avatarLogoContainer}`}>
                <i className={`fas fa-user ${styles.userLogo}`}></i>
                <span className="text-gray-600 small text-center">
                  {currentUser.email}
                </span>
              </li>
              <div className="topbar-divider d-none d-sm-block"></div>
              <button className="btn btn-info" onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
              </button>
            </>
          ) : (
            <>
              <li className={`nav-item ${styles.avatarLogoContainer}`}>
                <Link to="/signin">Signin</Link>
              </li>
              <div className="topbar-divider d-none d-sm-block"></div>
              <li className={`nav-item ${styles.avatarLogoContainer}`}>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      {/* <!-- End of Topbar --> */}
    </>
  );
};
