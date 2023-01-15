import styles from "../styles/Photo.module.css";

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
          <a href="/" className="btn btn-dark">
            read story
          </a>
          <img src="/shared/desktop/arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PhotoContainer;
