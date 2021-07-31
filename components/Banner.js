import Image from 'next/image'
import Button from '../components/Button.js'
import styles from '../styles/Banner.module.css'
export default function Home() {
    return (
            <div className={styles.Intro_Container}>
                <div className={styles.LogoSection}>
                    <div className={styles.Logo}>
                    <Image src="/images/logo.svg" width="119" height="28"/>
                    </div>                    
                </div>
                <div className={styles.LeftHero}>
                    <div className={styles.LeftHeroPic}>
                        <Image src="/images/image-hero-left.svg" width="394 " height="303"/>
                    </div>
                </div>
                <div className={styles.RightHero}>
                    <div className={styles.RightHeroPic}>
                        <Image src="/images/image-hero-right.svg" width="394 " height="303"/>
                    </div>
                </div>
                <div className={styles.CallToAction}>
                    <h1>Group Chat for Everyone</h1>
                    <p>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
                    <ul className={styles.ButtonLinks}>
                    <li><Button message="Download" span="v1.3" bwidth="12em" bgColor="#4D96A9" hoverColor="#71C0D4" spanColor="#8FE3F9"/></li>
                    <li>
                    <Button message="What is it?" bwidth="8.7em" bgColor="#855FB1" hoverColor="#D9B8FF"/>
                    </li>
                    </ul>
                </div>
            </div>
    )
}
