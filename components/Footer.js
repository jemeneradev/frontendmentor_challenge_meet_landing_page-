import styles from '../styles/Footer.module.css'
import Button from '../components/Button.js'
export default function Footer() {
    return (<div className={styles.Footer_Container}>
        <h2>Experience more together</h2>
        <p>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
        <div className={styles.Footer_Button}>
            <Button  message="Download" span="v1.3" bwidth="12em" bgColor="#855FB1" hoverColor="#B18BDD" spanColor="#D9B8FF"/>
        </div>
        
    </div>)
}