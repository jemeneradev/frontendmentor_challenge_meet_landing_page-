
import styles from '../styles/Button.module.css'
export default function Button(props) {
    let btnstyle = {width:props.bwidth,backgroundColor:props.defaultStateColor}
    let content = props['span'] === undefined ? <p> {props.message}</p> : <p> {props.message} <span>{props.span}</span></p> 
    return (
        <div className={styles.Button} style={btnstyle}>
            {content}
        </div>
    )
}
