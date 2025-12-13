import styles from "./privacypolicy.module.css";
import Link from 'next/link';
import Subheader from "../../components/subheader";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Subfooter from "../../components/subfooter";

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>      
      <Subheader/>
      <Header currentPage="points"/>
      <main className={styles.main}>
        <div className={styles.content}>
          
          {/* Header */}
          <header className={styles.header}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.subtitle}>
              Last Updated: <strong>January 1, 2026</strong>
            </p>
          </header>

          {/* Introduction Section */}
          <section className={styles.section}>
            <p>
              This policy applies to <strong>The Chinook Line</strong> Web site only. 
              It is designed to inform you of how and why The Chinook Line gathers 
              personal and non-personal information about you. This policy complies 
              with provisions of Canada's Freedom of Information and Protection of 
              Privacy Act.
            </p>
            <p className={styles.note}>
              <strong>Note:</strong> This Web site may be connected by "hyperlinks" 
              to other Web sites. We are not responsible in any way for the privacy 
              practices on other Web sites and suggest that you review the privacy 
              policies on those linked Web sites before using them.
            </p>
            <p>
              We are accountable for this Privacy Policy and these practices on this 
              Web site, including the Privacy Code set out below. If you have any 
              questions or concerns regarding the privacy practices on this Web site, 
              please e-mail us.
            </p>
          </section>

          {/* What Information Is Collected? */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What Information Is Collected?</h2>
            <p>
              The Chinook Line collects two kinds of information from this Web site:
            </p>
            
            <div className={styles.infoTypes}>
              <div className={styles.infoType}>
                <span className={styles.typeLabel}>A.</span>
                <h3 className={styles.typeTitle}>Your voluntarily provided personal information</h3>
              </div>
              <div className={styles.infoType}>
                <span className={styles.typeLabel}>B.</span>
                <h3 className={styles.typeTitle}>Anonymous information about your visit</h3>
              </div>
            </div>
          </section>

          {/* Personal Information Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>A. Your Personal Information</h2>
            </div>
            <p>
              During normal Web site usage, you can visit this site without communicating 
              any personal information. However, to make use of certain features on this 
              site, promotions or subscriptions users may be asked to register with 
              The Chinook Line Web site. As part of this voluntary registration, 
              The Chinook Line may request contact information (such as name, mailing 
              address, e-mail address, etc.) and other data required for operating 
              these services.
            </p>
            <p>
              The only way we can collect personal information from you is if you 
              voluntarily provide it. By voluntarily providing this personal information 
              to us by sending us a comment or suggestion. You are under no obligation 
              to provide us with personal information and can access and enjoy many 
              parts of The Chinook Line Web site without providing us any personal 
              information.
            </p>
            
            <div className={styles.purposeList}>
              <h3 className={styles.listTitle}>We may ask for your personal information to:</h3>
              <ul className={styles.list}>
                <li>Respond to your questions or the comments you e-mail to us</li>
                <li>Provide you with communication activities</li>
                <li>Keep aggregate information on Web site use</li>
              </ul>
            </div>
          </section>

          {/* Anonymous Information Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>B. Anonymous Information About Your Visit</h2>
            </div>
            <p>
              When you visit this site, information about your visit (e.g. how you 
              navigate the site) may be collected and stored. This information may 
              include the length of your visit, the date and time of your visit, the 
              pages you look at and the sites you visit before and after leaving this 
              site. It does not include personally identifiable information such as 
              your name, mailing or e-mail address or telephone number.
            </p>
            <p>
              We use this non-identifiable and aggregate information to better design 
              this Web site and develop an efficient Web marketing plan. We also may 
              share this information with our Web designer, board of directors and sponsors.
            </p>
            
            <div className={styles.dataList}>
              <h3 className={styles.listTitle}>
                The Chinook Line may collect the following non-identifiable information:
              </h3>
              <ul className={styles.list}>
                <li>Your Internet Service Provider (ISP)</li>
                <li>Time of your visit</li>
                <li>Pages you visited</li>
                <li>Web Browser Used</li>
              </ul>
            </div>
          </section>

          {/* Agreement Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What If I Do Not Agree With this Privacy Policy?</h2>
            <p>
              By visiting this Web site and voluntarily providing personal information 
              to The Chinook Line Web site, you agree to the terms of this online 
              User Agreement and the Privacy Policy contained herein. However, we 
              welcome your comments and/or suggestions on improving this Web site 
              and policies.
            </p>
            
            <div className={styles.contact}>
              <p>
                <strong>The Chinook Line</strong><br />
                January 1, 2026
              </p>
            </div>
          </section>

          {/* Navigation */}
          <nav className={styles.navigation}>
            <Link href="/" className={styles.backLink}>
              ← Back to Home
            </Link>
            <div className={styles.legalLinks}>
              <Link href="/termsandconditions" className={styles.legalLink}>
                Terms and Conditions
              </Link>
              <span className={styles.separator}>|</span>
              <Link href="/sitemap" className={styles.legalLink}>
                Sitemap
              </Link>
            </div>
          </nav>

        </div>
      </main>
      <Footer/>
      <Subfooter/>
    </div>
  );
}