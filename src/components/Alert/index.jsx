import styles from "./index.module.css"

export const Alert = ({type, message}) => {
    return (
        <div class={`alert alert-${type} ${styles.alert}`} role="alert">
            {message}
        </div>
    )
}