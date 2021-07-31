import styles from '../styles/Separator.module.css'
export default function Separator(props) {
    return (<div className={styles.Separator}>
        <div className={styles.Tail}></div>
        <p>{props.num}</p>
    </div>)
}