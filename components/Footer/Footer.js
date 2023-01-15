import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src="/shared/desktop/logo-white.svg" alt="logo" />
      <div>
        <img className={styles.logo} src="/icons8-instagram.svg" alt="" />
        <img className={styles.logo} src="/icons8-twitter.svg" alt="" />
      </div>
      <div className={styles.footerContainer}>
        <Link className={styles.footerLinks} href="/">
          Home
        </Link>
        <Link className={styles.footerLinks} href="/stories">
          Stories
        </Link>
        <Link className={styles.footerLinks} href="/">
          features
        </Link>
        <Link className={styles.footerLinks} href="/">
          pricing
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
