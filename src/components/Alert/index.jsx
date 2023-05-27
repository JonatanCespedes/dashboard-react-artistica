import { useEffect } from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";

const ALERT_TIME = 2000;

export const Alert = ({ alert, setAlert }) => {
  const { message, type, show } = alert;
  /* 
        Los tipos de alerta que acepta son los de bootstrap: 
        - primary
        - secondary
        - success
        - danger
        - warning
        - info
        - ligth
        - dark
    */
  useEffect(() => {
    if (!show) return;

    const alertTimeOut = setTimeout(() => {
      setAlert({
        ...alert,
        show: false,
        type: "",
        message: "",
      });
    }, [ALERT_TIME]);

    return () => clearTimeout(alertTimeOut);
  }, [show]);

  return (
    <div className={`alert alert-${type} ${styles.alert}`} role="alert">
      {message}
    </div>
  );
};

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
  setAlert: PropTypes.func.isRequired,
};
