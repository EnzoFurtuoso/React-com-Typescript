import styles from '../Relogio/Relogio.module.scss'

interface Props {
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 } : Props) {

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;

    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');

    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
    return (
        <>
            <span className={styles.relogioNumber}>{minutoDezena}</span>
            <span className={styles.relogioNumber}>{minutoUnidade}</span>
            <span className={styles.relogioDivision}>:</span>
            <span className={styles.relogioNumber}>{segundoDezena}</span>
            <span className={styles.relogioNumber}>{segundoUnidade}</span>
        </>
    )
}