import Image from 'next/image'
import styles from '../styles/Benefits.module.css'
export default function Home() {
    return (
        <div className={styles.Benefits_Container}>
            <ul className={styles.Users}>
                <li style={{gridArea:"one"}} className={styles.UserPhoto}>
                    <Image src="/images/image-woman-in-videocall.jpg" layout="fill"/>
                </li>
                <li style={{gridArea:"two"}} className={styles.UserPhoto}>
                    <Image src="/images/image-women-videochatting.jpg" layout="fill"/>
                </li>
                <li style={{gridArea:"three"}} className={styles.UserPhoto}>
                    <Image src="/images/image-men-in-meeting.jpg" layout="fill"/>
                </li>
                <li style={{gridArea:"four"}} className={styles.UserPhoto}>
                    <Image src="/images/image-man-texting.jpg" layout="fill"/>
                </li>
            </ul>
            <h2>Built for Modern Use</h2>
            <h3>Smarter meetings, all in one place</h3>
            <p>Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite&#8209;only team access, data encryption, and data export.</p>
        </div>
    )
}