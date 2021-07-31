import Image from 'next/image'
import styles from '../styles/Benefits.module.css'
export default function Home() {
    return (
        <div className={styles.Benefits_Container}>
            <ul className={styles.Users}>
                <li style={{gridArea:"one"}}>
                    <Image src="/images/user_1.svg" layout="fill"/>
                </li>
                <li style={{gridArea:"two"}}>
                    <Image src="/images/user_2.svg" layout="fill"/>
                </li>
                <li style={{gridArea:"three"}}>
                    <Image src="/images/user_3.svg" layout="fill"/>
                </li>
                <li style={{gridArea:"four"}}>
                    <Image src="/images/user_4.svg" layout="fill"/>
                </li>
            </ul>
            <h2>Built for Modern Use</h2>
            <h3>Smarter meetings, all in one place</h3>
            <p>Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite&#8209;only team access, data encryption, and data export.</p>
        </div>
    )
}