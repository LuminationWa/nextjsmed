import Link from "next/link";
import Button from "@mui/material/Button";

const Hero = () => {
    return (
        <section className="top">
        <div className="top-section wrapper">
          <div className="top-section-content">
            <h1 className="h1 main-h1">We are the best</h1>
            <p className="header-p">
              Accompanying you since 1968
              <br />
              Your <span className="highlight-2">Trademarks</span> and{" "}
              <span className="highlight-2">Patents</span> protected, and your
              ideas brought to reality
              <br />
              Always available, continuous support with
              tailored solutions for each client&apos;s needs
            </p>
            <Link href="/en/contact">
              <Button variant="contained">Get in touch</Button>
            </Link>
          </div>
          <div className="image-container"></div>
        </div>
      </section>
    )
}

export default Hero;