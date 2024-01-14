import LanguageIcon from "@mui/icons-material/Language";
import Link from "next/link";
import PublicIcon from "@mui/icons-material/Public";

const Nav = (props) => {
  let language = props.lang;
  return (
    <nav className="wrapper">
      {language === "en" ? (
        <>
          <div className="language-bar">
            <PublicIcon fontSize="small"/>
            <Link href="/en" className="lang-btn on">
              <h2>EN</h2>
            </Link>
            <Link href="/es" className="lang-btn">
              <h2>ES</h2>
            </Link>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="language-bar">
            <PublicIcon fontSize="small"/>
            <Link href="/en" className="lang-btn">
              <h2>EN</h2>
            </Link>
            <Link href="/es" className="lang-btn on">
              <h2>ES</h2>
            </Link>
          </div>
        </>
      )}
      <div className="main-nav">
        {language === "en" ? (
          <>
            <Link href="/en" className="logo">
              <h1>MEDINA MARCAS</h1>
            </Link>
          </>
        ) : (
          <>
            <Link href="/es" className="logo">
              <h1>MEDINA MARCAS</h1>
            </Link>
          </>
        )}
        <div className="desktop-nav">
          {language === "en" ? (
            <>
              <Link href="/en/about" className="link">
                About
              </Link>
              <Link href="/en/contact" className="link">
                Services
              </Link>
              <Link href="/en/contact" className="link">
                Contact
              </Link>
            </>
          ) : language === "es" ? (
            <>
              <Link href="/es/acerca" className="link">
                Acerca de
              </Link>
              <Link href="/es/contacto" className="link">
                Servicios
              </Link>
              <Link href="/es/contacto" className="link">
                Contacto
              </Link>
            </>
          ) : null}
        </div>
        <div className="mobile-nav">
          <div id="nav-icon4">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
