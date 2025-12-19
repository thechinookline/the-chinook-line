import ProfileInfo from "../../components/profileinfo";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Subfooter from "../../components/subfooter";
import Subheader from "../../components/subheader";
import styles from "./profile.module.css";
import MessageBanner from "../../components/message";

export default function Profile(){
    return(

    <div className={styles.page}>
      <Subheader />
      <Header currentPage="home" />
       <main>
        <ProfileInfo />
       </main>
      <Footer />
      <MessageBanner/>
      <Subfooter />
    </div>
    )
}