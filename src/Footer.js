import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <h6>
        <a
          href="https://github.com/FriederikeM/Weather-App"
          id="github-link"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-github"></i> Open-source code{" "}
        </a>
        by Friederike Möser
      </h6>
    </div>
  );
}
