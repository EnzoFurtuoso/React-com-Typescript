
import styles from '../List.module.scss'
export default function Item(props: {tarefa: string, tempo: string}) {
    const {tarefa, tempo } = props
    return (
        <li className={styles.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    )
}