import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";

const Home = () => {
  return (
    <main className="home-main">
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
      <div className="sub-bar">
        <p>Defenses</p>
        <p>Registrations</p>
        <p>Surveillance</p>
      </div>
      <div className="header-bar wrapper">
        <div className="header-container">
          <div className="bar-container">
            <h2 className="bar-h2">
              24/7 <br /> support
            </h2>
            <p className="bar-p">
              Highly qualified and experienced legal professionals available to
              you 24 hours a day, guaranteeing your satisfaction.
            </p>
          </div>
          <div className="bar-container">
            <h2 className="bar-h2">
              Global <br /> consulting
            </h2>
            <p className="bar-p">
              Serving clients from all over the world, from our main office in
              Uruguay, and all throughout The Americas.
            </p>
          </div>

          <div className="bar-container">
            <h2 className="bar-h2">
              Responsability <br /> first
            </h2>
            <p className="bar-p">
              We take care of providing you with peace of mind and security at
              every stage of the process, assuming full responsibility.
            </p>
          </div>
        </div>
      </div>
      <div className="middle-section wrapper">
        <div className="left-side">
          <div className="info-container">
            <h2 className="middle-h2">Why should I register my trademark?</h2>
            <p className="middle-p">
              When a trademark is registered, the owner obtains exclusive rights
              in the country where it is registered, which allows them to take
              legal action against unauthorized use by third parties.
              <br />
              Although trademark registration is not mandatory in Uruguay, not
              doing so can expose the owner to legal conflicts if another
              applicant registers a similar mark.
              <br />
              The registration grants a transferable right, highly valuable for
              businesses, which can be licensed in onerous or free agreements.
            </p>
          </div>
          <div className="info-container">
            <h2 className="middle-h2">Why choose us?</h2>
            <p className="middle-p">
              We offer a fluid commercial and professional relationship through
              various communication channels, physical and online presence to
              attend to your requirements and provide maximum confidence. <br />
              Our qualified professionals have practical experience in extensive
              areas of the real world.
              <br />
              We know the laws and processes of trademarks and patents in all
              countries of The Americas, ensuring exhaustive and up-to-date
              control in each task assigned.
              <br />
              We work with select colleagues and assume the responsibility to
              protect your interests in Industrial, Commercial and Intellectual
              Law.
            </p>
          </div>
        </div>
        <div className="right-side">
          <div className="right-info">
            <h1 className="right-h1">99%</h1>
            <p className="right-p">Satisfied clients</p>
          </div>
          <div className="right-info">
            <h1 className="right-h1">2500+</h1>
            <p className="right-p">Won cases</p>
          </div>
          <div className="right-info">
            <h1 className="right-h1">4000+</h1>
            <p className="right-p">Granted trademarks</p>
          </div>
          <div className="right-info">
            <h1 className="right-h1">550+</h1>
            <p className="right-p">Registered patents</p>
          </div>
          <div className="right-info">
            <h1 className="right-h1">400+</h1>
            <p className="right-p">Disputes settled</p>
          </div>
        </div>
      </div>
      <div className="faq-section wrapper">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel0a-content"
            id="panel0a-header"
          >
            <Typography>What is a trademark?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className="faq-p">
              It is defined by our current regulations as any sign with
              sufficient aptitude to distinguish either products or services
              (depending on the classes to which it is requested/registered),
              from a natural or legal person from another.
              <br />A sign to be requested or registered, can be of several
              types: <br />
              Only the word or words, word/s with a drawing, drawing only,
              advertising phrases, sounds, aromas.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              How is the application process for a trademark?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className="faq-p">
              Priorly, it is possible to carry out a free report for the client,
              on the feasibility of the application to be requested and its
              immediate incorporation into the register. <br />
              The Trademark Application requires the identification of the sign
              to be requested, which after being entered cannot be changed.{" "}
              <br />
              In addition to the applicant&apos;s data (name and surname in the case
              of an individual or name if it is a legal entity, identification
              with an identity document or tax registration, physical address in
              Uruguay or another country). The class or classes for which it is
              requested.
              <br />
              Once your application is entered, it is assigned an act number
              that confers a priority right with date and time over any other
              subsequent one that is presented of the same mark or similar,
              which will remain pending the resolution of its previous one.
              <br />
              If there are no objections in the Register due to precedents or
              from third parties who could file a protest against the
              application, it will be granted for a period of ten years.
              Renewable for equal periods.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Can a trademark be registered internationally?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className="faq-p">
              Trademarks are territorial, that is, they respond to the
              regulations of a specific territory or country. <br />
              Taking that territorial nature into account, we do have
              International Conventions, such as: <br />
              Paris Convention, and other treaties such as Madrid Protocol,
              Treaty of the European Union, Andean Pact, which with a single
              request and payment of the fees for each of the requested
              countries, a process begins in all of them, even though the result
              of one does not bind the other.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="test">What is a patent?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className="faq-p">
              A novel industrial object is a product of an idea that seeks to
              solve a situation in a specific area.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>What types of patents can be registered?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className="faq-p">
              Invention, utility model and industrial design.
              <br />
              Depending on the object to be patented, meeting the requirement of
              having inventive activity and being capable of having industrial
              application:
              <br />
              Invention: New products or processes that are novel, non-obvious,
              and useful.;
              <br />
              Utility model: A new arrangement or configuration obtained or
              introduced in tools, work instruments, utensils, devices,
              equipment, or other known objects, which results in a better use
              or a better result for its purpose, for its use or manufacture.
              <br />
              Industrial design: Original ornamental creations that give a
              different appearance to the product.
              <br />
              Once a patent is granted, it gives the owner the exclusive right
              to utilize the invention, utility model, or industrial design for
              a period of 20 years for inventions, and 10 years for utility
              models and industrial designs (renewable for an additional five
              years for utility models and industrial designs).
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography>
              How does the patent application process work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className="faq-p">
              It is advisable to conduct a prior search both nationally and
              internationally.
              <br />
              After the submission of the Patent Application, with all the
              necessary requirements for its submission, which is different than
              in trademarks, a preliminary examination of formalities and
              patentability is carried out. After the legal deadlines have
              elapsed, it is published in the Official Gazette of Trademarks.
              <br />
              The deadline for third-party oppositions begins, sixty days after
              publication.
              <br />
              If examiner&apos;s technical report allows it, no third-party
              oppositions have been filed, and there are no regulatory
              impediments, the patent is granted.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </main>
  );
};

export default Home;
