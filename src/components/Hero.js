import "../styles/hero.css";
import Link from "next/link";
import Button from "@mui/material/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-split">
        <div className="hero-text">
          <h1 className="h1 main-h1">We are the best</h1>
          <p className="hero-p">
            Accompanying you since 1968
            <br />
            Your <span className="highlight-2">Trademarks</span> and{" "}
            <span className="highlight-2">Patents</span> protected, and your
            ideas brought to reality
            <br />
            Always available, continuous support with tailored solutions for
            each client&apos;s needs
          </p>
          <Link href="/en/contact">
            <Button variant="contained">Get in touch</Button>
          </Link>
        </div>
        <div>
          <Image
            src="/pictures/placeholder.jpg"
            alt="attorneys working"
            height={600}
            width={367}
            style={{
              height: "auto",
              maxWidth: "100%",
            }}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
