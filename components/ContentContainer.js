import Link from "next/link";

const ContentContainer = ({ header, copy, btn, bgColor }) => {
  return (
    <div className={`card card-${bgColor}`}>
      <h2 className="card_header">{header}</h2>
      <p className="card_copy">{copy}</p>
      <div className="btn-container">
        <Link href="/" className={`btn btn-${bgColor}`}>
          {btn}
        </Link>
        {bgColor === "dark" ? (
          <img src="/shared/desktop/arrow.svg" alt="" />
        ) : (
          <img src="/shared/desktop/arrow-black.svg" alt="" />
        )}
      </div>
    </div>
  );
};

export default ContentContainer;
