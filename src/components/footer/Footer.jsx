import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Welcome to Movie Madness, your ultimate destination for all things
          movies, TV shows, and celebrities. We're dedicated to providing you
          with the most comprehensive and up-to-date information on the latest
          releases, classic films, top-rated TV series, and the talented
          individuals who bring them to life. Our passionate community of movie
          enthusiasts actively engages in discussions, ratings, and reviews,
          making us your go-to source for honest opinions and recommendations.
          We're proud to be a part of the IMDb family and strive to offer you
          the best experience in exploring the world of cinema. Thank you for
          joining us on this cinematic journey, and remember to stay connected
          with us through our social media channels and mobile apps for the
          latest updates.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
