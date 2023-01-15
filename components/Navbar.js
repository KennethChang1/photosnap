import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container">
      <div className="nav">
        <Link href="/">
          <img src="/shared/desktop/logo.svg" alt="" />
        </Link>
        <img
          onClick={() => setIsOpen((prev) => !prev)}
          src="/shared/mobile/menu.svg"
          alt=""
        />
      </div>
      <div className={`container nav-links ${isOpen ? "" : "close"}`}>
        <div className="nav-links-wrapper">
          <Link className="nav-link" href="/stories">
            Stories
          </Link>
          <Link className="nav-link" href="/features">
            features
          </Link>
          <Link className="nav-link" href="/">
            pricing
          </Link>
        </div>
        <a href="/" className="btn-secondary">
          Get an invite
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
