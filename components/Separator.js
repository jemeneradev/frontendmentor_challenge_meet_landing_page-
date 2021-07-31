import styles from '../styles/Separator.module.css'
export default function Separator(props) {
    return (<div className={styles.Separator} style={{top:props.top?props.top:0}}>
        <div className={styles.Tail}></div>
        <p>{props.num}</p>
    </div>)
}