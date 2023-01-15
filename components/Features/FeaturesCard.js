import styles from "./Features.module.css";

const FeaturesCard = ({ img, title, copy }) => {
  return (
    <div className={`container ${styles.container}`}>
      <img className={styles.img} src={`/features/desktop/${img}.svg`} alt="" />
      <h3 className={styles.header}>{title}</h3>
      <p className={`card_copy`}>{copy}</p>
    </div>
  );
};

export default FeaturesCard;
