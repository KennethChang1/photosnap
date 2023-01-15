import styles from "./PricingItem.module.css";
import Link from "next/link";

const PricingItem = ({ copy, title, price, dark }) => {
  return (
    <div
      className={`${styles.card} ${dark ? styles.cardDark : styles.cardLight}`}
    >
      <h3 className={styles.header}>{title}</h3>
      <p className={`card_copy`}>{copy}</p>
      <div className={styles.wrapper}>
        <p className={styles.price}>${price}</p>
        <p className="card_copy">per month</p>
      </div>
      <Link href="/" className={`btn-secondary ${dark ? styles.btnWhite : ""}`}>
        PICK PLAN
      </Link>
    </div>
  );
};

export default PricingItem;
