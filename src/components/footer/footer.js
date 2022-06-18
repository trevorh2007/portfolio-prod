import "./footer.scss";
import {
  RiLinkedinBoxLine,
  RiGithubFill,
  RiCopyrightLine,
} from "react-icons/ri";
import { HiChevronDoubleUp } from "react-icons/hi";

const Footer = () => {
  return (
    <section id="footer" className="footer-section">
      <div
        className="chevron-up"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <HiChevronDoubleUp />
      </div>
      <div className="icon-wrap flex-row">
        <a
          href="https://www.linkedin.com/in/trevor-howard-ut/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLinkedinBoxLine />
        </a>
        <a
          href="https://github.com/trevorh2007"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiGithubFill />
        </a>
      </div>
      <div className="copyright">
        TREVOR HOWARD&nbsp;
        <RiCopyrightLine />
        {new Date().getFullYear()}
      </div>
    </section>
  );
};

export default Footer;
