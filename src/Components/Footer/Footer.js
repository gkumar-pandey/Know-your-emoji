import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const user = {
    githubHandle: "https://github.com/gkumar-pandey",
    linkedinHandle: "https://www.linkedin.com/in/gkpandey/",
    twitterHandle: "https://twitter.com/gautamkp078",
  };
  return (
    <div className="footer">
      <div>
        <p>Develop by GKP &#169; 2022</p>
      </div>
      <div>
        <a href={user.githubHandle} target="_blank">
          <FontAwesomeIcon icon={faGithubSquare} style={style.icon} />
        </a>
        <a href={user.linkedinHandle} target="_blank">
          <FontAwesomeIcon icon={faLinkedin} style={style.icon} />
        </a>
        <a href={user.twitterHandle} target="_blank">
          <FontAwesomeIcon icon={faTwitterSquare} style={style.icon} />
        </a>
      </div>
    </div>
  );
}
const style = {
  icon: {
    fontSize: "2.3rem",
    padding: "8px",
  },
};

export default Footer;
