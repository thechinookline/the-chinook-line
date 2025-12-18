import styles from './ProfilePageForUserAccount.module.css'
import Image from "next/image"

export default function ProfilePageForUserAccount(){
    return(
        <section className={styles.profileSection}>
            <Image 
              src="/profileImage.png"
              alt=""
              width={210}
              height={210}
              // className={}
            />
            <div className={styles.textSection}>
                <h1 className={styles.welcomeMessage}>Welcome, Bob Doe</h1>
                <p className={styles.points}>Total Points: 5</p>
                <Image 
                 src="/rank.png"
                 alt=""
                 width={68}
                 height={95}/>
            </div>
        </section>

    )
}