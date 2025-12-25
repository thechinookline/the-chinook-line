import ProfileInfo from "../../components/profileinfo";
import Footer from "../../components/footer";
import Subfooter from "../../components/subfooter";
import styles from "./profile.module.css";
import MessageBanner from "../../components/message";

export default function Profile() {
    return(

    <div className={styles.page}>
       <main>
        <ProfileInfo />
       </main>
      <Footer />
      <MessageBanner/>
      <Subfooter />
    </div>
    )
}