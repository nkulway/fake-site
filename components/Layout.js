import Header from "./Header";
import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Header />
      <div className={styles.container}>
        <main className='{styles.main} col'>{children}</main>
        <div className={styles.siteInfo}>
          <h1>Ready to have you cake and eat it too?</h1>
          <p>
            Start by designing the experience you have in mind. We&#39;ll guide
            you through each step. If <br />
            your experience meets the quality standards, you&#39;ll hear more
            about what&#39;s next.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
