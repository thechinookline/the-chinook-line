import Footer from "../../components/footer";
import Subheader from '../../components/subheader';
import Header from "../../components/header";
import Subfooter from "../../components/subfooter";
import styles from "./termsandconditions.module.css";
import MessageBanner from "../../components/message";

export default function TermsAndConditions() {
  return (
    <div className={styles.page}>
      <Subheader />
      <Header/>
      
      <main className={styles.main}>
        <h1 className={styles.title}>Terms and conditions</h1>
        <div className={styles.termsandcondition}>
        <p>
          The Chinook Line welcomes you to its Web site. Using this Web site indicates your consent and agreement to be bound by this User Agreement and any policies or practices contained herein.
        </p>
        <p>
          All content and information (including, but not limited to, code, graphics, photos, guides, promotional materials, press releases, articles, plans, schedules, illustrations, audio clips, and video clips) displayed on this Web site is owned or licensed by The Chinook Line and its respective owners, all content on this site is protected by copyright and other intellectual property laws. Any names, titles, logos and designs displayed on the Web site that contain The Chinook Line, titles, logos, or brands are the exclusive property and trademarks of The Chinook Line or its members. You may not modify, publish, transmit, transfer, sell, reproduce, re-post or alter any such content. The Chinook Line hereby grants you a personal, non-exclusive, non-assignable and non-transferable license to use and display, for home, non-commercial and personal use only, one copy of any content that you may download from this Web site. Any other use or reproduction of this Web site, in whole or in part, will be considered to be a violation of The Chinook Line intellectual property rights.
        </p>
        <p>
          Your use of this Web site constitutes your agreement to abide by these terms of use included in this online User Agreement. The Chinook Line reserves the right to modify, alter or otherwise update this User Agreement at any time.
        </p>
        <p>
          If you disagree with any of the above terms of use or any part of the User Agreement, do not use this Web site.
        </p>
        </div>
      </main>
      
      <Footer />
      <MessageBanner />
      <Subfooter />
    </div>
  );
}
