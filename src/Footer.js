import React from "react";
import {
  GitHub,
  Database,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
} from "react-feather";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <h3>{t("Contact me at")}</h3>
      <a
        href="mailto:shivumalapur08@gmail.com"
        className="mail"
        target="_blank"
        rel="noopener noreferrer"
      >
        shivumalapur08@gmail.com
      </a>
      <br />
      <div className="links">
        <a
          href="https://www.linkedin.com/in/shivashankar-malapur-31963894/"
          className="insta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>

        <a
          href="https://github.com/Shivu08/COVID-19-Tracker"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>

        <a
          href="https://www.facebook.com/shivu.malapur/"
          className="insta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>

        <a
          className="api"
          href="https://disease.sh/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Database />
        </a>

        <a
          href="https://www.instagram.com/amshiv_/"
          className="insta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
