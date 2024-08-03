import styles from '../Relogio/Relogio.module.scss'

export default function Relogio() {
    return (
        <>
            <span className={styles.relogioNumber}>0</span>
            <span className={styles.relogioNumber}>0</span>
            <span className={styles.relogioDivision}>:</span>
            <span className={styles.relogioNumber}>0</span>
            <span className={styles.relogioNumber}>0</span>
        </>
    )
}