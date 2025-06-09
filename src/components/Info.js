import Button from "@mui/material/Button";

const Info = () => {
  return (
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
  );
};

export default Info;
