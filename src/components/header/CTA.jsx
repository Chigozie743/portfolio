import React from "react";
import CV from "../../assets/Williams_Chigozie Iwuoha_Resume_plain.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={CV} download>
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
