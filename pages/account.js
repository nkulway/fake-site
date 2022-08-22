import Link from "next/link";
import accountStyles from "../styles/Account.module.css"

const account = () => {
  return (
    <div className={accountStyles.account}>
      <h1 className={accountStyles.accountTitle}>Account</h1>
      <p className={accountStyles.accountInfo}>Welcome to the account page of the world&apos;s greatest fake website. <br /> In the near future here is where you will get to learn all about me, Nick. <br /> You probably already know that I'm a software developer but I also thoroughly enjoy <br /> board games, playig guitar, cooking good food, spending time with my friends and family.</p>
      <Link href={"/"}>
        <p className={accountStyles.navLink}>Back Home</p>
      </Link>   
    </div>
  );
};

export default account;
