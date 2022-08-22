import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <>
      <nav className={navStyles.nav}>
        <ul className={navStyles.navItems}>
          <li className={navStyles.navLogo}>
            <Image src={logo} alt='Logo' />
          </li>
          <li className={navStyles.navLinks}>
            <Link href='/account'>Account</Link>
          </li>
          <li className={navStyles.navLinks}>
            <Link href='/help'>Help</Link>
          </li>
          <li className={navStyles.navLinks}>
            <Image src={logo} alt='Logo' className={navStyles.avatar} />
          </li>
          &nbsp;&nbsp;&nbsp;
        </ul>
        <div className={navStyles.headingContainer}>
          <p className={navStyles.headingTitle}>
            The world&apos;s greatest fake site
          </p>
          <p className={navStyles.headingSubContent}>
            Create the worlds greatest fake site and enjoy the breeze of fresh
            air when you complete it
          </p>
          <Link href='https://cephalofair.com/pages/gloomhaven'>
            <button className={navStyles.navButton}>
              Do something awesome
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
