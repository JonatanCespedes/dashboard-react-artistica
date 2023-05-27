import styles from "./index.module.css"

export const Alert = ({type, message}) => {
    return (
        <div className={`alert alert-${type} ${styles.alert}`} role="alert">
            {message}
        </div>
    )
}