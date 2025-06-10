import "../styles/nav.css";
import LanguageIcon from "@mui/icons-material/Language";
import Link from "next/link";
import PublicIcon from "@mui/icons-material/Public";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="wrapper">
      <div className="logo-div">
        <Image
          src="/pictures/logo.png"
          alt="Logo"
          width={756}
          height={346}
          style={{
            width: "auto",
            maxHeight: "100px",
          }}
        ></Image>
        <div className="language-bar">
          <PublicIcon fontSize="small" />
          <Link href="/en" className="lang-btn on">
            <h2>EN</h2>
          </Link>
          <Link href="/es" className="lang-btn">
            <h2>ES</h2>
          </Link>
        </div>
      </div>
      <div className="bottom-nav desktop-nav">
        <div>
          <Link href="/en/about" className="link">
            About
          </Link>
          <Link href="/en/contact" className="link">
            Services
          </Link>
          <Link href="/en/contact" className="link">
            Contact
          </Link>
        </div>
        <div className="language-bar"></div>
        <button className="quote-button" type="button">
          Get a Free Quote
        </button>
      </div>
    </nav>
  );
};

export default Nav;
