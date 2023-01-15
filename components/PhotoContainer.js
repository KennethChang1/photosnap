import styles from "../styles/Photo.module.css";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */

const PhotoContainer = ({ title, author, img }) => {
  return (
    <div className={styles.container}>
      <img
        className={`img ${styles.img}`}
        src={`/stories/mobile/${img}.jpg`}
        alt=""
      />
      <div className={`container ${styles.info}`}>
        <div className={styles.textContainer}>
          <p className={styles.header}>{title}</p>
          <p>by {author}</p>
        </div>
        <div className={styles.btnContainer}>
          <Link href="/" className="btn btn-dark">
            read story
          </Link>
          <img src="/shared/desktop/arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PhotoContainer;
