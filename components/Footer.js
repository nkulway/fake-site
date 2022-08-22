import footerStyles from "../styles/Footer.module.css";
import logo from "../public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={footerStyles.footerInfo}>
        <ul className={footerStyles.infoItem}>
          <h2>Fakesite</h2>
          <li>About Us</li>
          <li>Press</li>
          <li>Policies</li>
          <li>Help</li>
        </ul>
        <ul className={footerStyles.infoItem}>
          <h2>Account</h2>
          <li>Edit Profile</li>
          <li>Friends</li>
          <li>Social</li>
          <li>Delete Profile</li>
        </ul>
      </div>
      <footer className={footerStyles.footer}>
        <hr className={footerStyles.horizontal} />
        <ul>
          <li className={footerStyles.footerLogo}>
            <Image src={logo} alt='Logo' />
          </li>
          <li className={footerStyles.footerItems}>Terms</li>
          <li className={footerStyles.footerItems}>Privacy</li>
          <li className={footerStyles.footerItems}>Site Map</li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
