import Image from "next/image";
import helpStyles from "../styles/Help.module.css";
import helpImg from "../public/help.jpeg";
import Link from "next/link";

const help = () => {
  return (
    <div className={helpStyles.help}>
      <h1 className={helpStyles.helpTitle}>Help!!</h1>
      <Image src={helpImg} alt='Help!' />
      <Link href={"/"}>
        <p className={helpStyles.navLink}>Back Home</p>
      </Link>
    </div>
  );
};

export default help;
