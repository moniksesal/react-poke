import styles from './ErrorMessage.module.css'

export default function ErrorMessage({message}) {
    if (!message) return null

    return <p className={styles.errorMessage}>{message}</p>
}

console.log(styles)