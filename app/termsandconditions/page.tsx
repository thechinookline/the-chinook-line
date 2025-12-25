import Footer from "../../components/footer";
import Subheader from '../../components/subheader';
import Header from "../../components/header";
import Subfooter from "../../components/subfooter";
import styles from "./termsandconditions.module.css";
import MessageBanner from "../../components/message";

export default function TermsAndConditions() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Terms and Conditions</h1>
        <div className={styles.termsandconditions}>
          <p className={styles.lastUpdated}>Last Updated: January 15, 2024</p>
          
          <section className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              The Chinook Line welcomes you to its Web site. Using this Web site indicates your consent and agreement to be bound by this User Agreement and any policies or practices contained herein.
            </p>
            <p>
              If you disagree with any of the terms of use or any part of this User Agreement, do not use this Web site.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Intellectual Property Rights</h2>
            <p>
              All content and information (including, but not limited to, code, graphics, photos, guides, promotional materials, press releases, articles, plans, schedules, illustrations, audio clips, and video clips) displayed on this Web site is owned or licensed by The Chinook Line and its respective owners. All content on this site is protected by copyright and other intellectual property laws.
            </p>
            
            <h3>2.1 Trademarks</h3>
            <p>
              Any names, titles, logos and designs displayed on the Web site that contain The Chinook Line, titles, logos, or brands are the exclusive property and trademarks of The Chinook Line or its members.
            </p>
            
            <h3>2.2 Permitted Use</h3>
            <p>
              The Chinook Line hereby grants you a personal, non-exclusive, non-assignable and non-transferable license to use and display, for home, non-commercial and personal use only, one copy of any content that you may download from this Web site.
            </p>
            
            <h3>2.3 Prohibited Actions</h3>
            <p>
              You may not modify, publish, transmit, transfer, sell, reproduce, re-post or alter any such content. Any other use or reproduction of this Web site, in whole or in part, will be considered to be a violation of The Chinook Line's intellectual property rights.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. User Agreement and Modifications</h2>
            <p>
              Your use of this Web site constitutes your agreement to abide by these terms of use included in this online User Agreement. The Chinook Line reserves the right to modify, alter or otherwise update this User Agreement at any time.
            </p>
            <p>
              Continued use of the Web site after any such changes shall constitute your consent to such changes.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Limitation of Liability</h2>
            <p>
              The Chinook Line shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Web site or for the cost of procurement of substitute goods and services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Governing Law</h2>
            <p>
              This User Agreement shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <ul>
              <li>Email: legal@chinookline.com</li>
              <li>Phone: 111.111.1111</li>
            </ul>
          </section>
        </div>
      </main>
      
      <Footer />
      <MessageBanner />
      <Subfooter />
    </div>
  );
}