import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = (props) => {
  let language = props.lang;
  return (
    <footer>
      {language === "en" ? (
        <>
          <div className="footer-top wrapper">
            <div className="row contact-info wrapper">
              <div className="contact-text">
                <h1>Connect with us</h1>
                <p>
                  Phone: +598 22039306 <br /> +598 98987250{" "}
                </p>
                <p>
                  or{" "}
                  <span className="underlined">
                    <Link href="/en/contact">send an email</Link>
                  </span>
                </p>
              </div>
              <div className="contact-icons">
                <a href="https://www.instagram.com/medina.marcas/">
                  <InstagramIcon fontSize="small" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100063489703723">
                  <FacebookIcon fontSize="small" />
                </a>
                <a href="https://twitter.com/marcasmedinauy">
                  <TwitterIcon fontSize="small" />
                </a>
              </div>
            </div>
            <div className="row links wrapper">
              <Link href="/en/about">About</Link>
              <Link href="/en/contact">Services</Link>
              <Link href="/en/contact">Contact</Link>
            </div>
          </div>
        </>
      ) : language === "es" ? (
        <>
          <div className="footer-top wrapper">
            <div className="row contact-info wrapper">
              <div className="contact-text">
                <h1>Entra en contacto</h1>
                <p>
                  Telefóno: +598 22039306 <br /> +598 98987250{" "}
                </p>
                <p>
                  o{" "}
                  <span className="underlined">
                    <Link href="/es/contacto">enviando un email</Link>
                  </span>
                </p>
              </div>
              <div className="contact-icons">
                <a href="https://www.facebook.com/profile.php?id=100063489703723 ">
                  <InstagramIcon fontSize="small" />
                </a>
                <a href="https://www.instagram.com/medina.marcas/">
                  <FacebookIcon fontSize="small" />
                </a>
                <a href="https://twitter.com/marcasmedinauy">
                  <TwitterIcon fontSize="small" />
                </a>
              </div>
            </div>
            <div className="row links wrapper">
              <Link href="/es/acerca">Acerca de</Link>
              <Link href="/es/contacto">Servicios</Link>
              <Link href="/es/contacto">Contacto</Link>
            </div>
          </div>
        </>
      ) : null}
      <div className="footer-bottom">@2025 Medina Marcas</div>
    </footer>
  );
};

export default Footer;
