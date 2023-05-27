import styles from "./index.module.css";
import PropTypes from "prop-types";

export const Alert = ({type, message}) => {
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
    return (
        <div className={`alert alert-${type} ${styles.alert}`} role="alert">
            {message}
        </div>
    )
}

Alert.propTypes = {
    type: PropTypes.string.isRequired,
}