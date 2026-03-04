import styles from './Loading.module.css'

export default function Loading({loading}) {
    return (
        <>
            {loading && <p className={styles.loadingMessage}>Cargando...</p>}
        </>
    )
}