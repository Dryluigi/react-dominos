import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer__title">Find Us On:</h3>
        <ul className="footer__social-media">
          <Link to="*">
            <li>
              <img className="social-media__icon" src="/assets/images/social-media-icons/app_store.png" alt="social media icon" />
            </li>
          </Link>
          <Link to="*">
            <li>
              <img className="social-media__icon" src="/assets/images/social-media-icons/google_play.png" alt="social media icon" />
            </li>
          </Link>
          <Link to="*">
            <li>
              <img className="social-media__icon" src="/assets/images/social-media-icons/facebook.png" alt="social media icon" />
            </li>
          </Link>
          <Link to="*">
            <li>
              <img className="social-media__icon" src="/assets/images/social-media-icons/instagram.png" alt="social media icon" />
            </li>
          </Link>
          <Link to="*">
            <li>
              <img className="social-media__icon" src="/assets/images/social-media-icons/twitter.png" alt="social media icon" />
            </li>
          </Link>
          <Link to="*">
            <li>
              <img className="social-media__icon" src="/assets/images/social-media-icons/line.png" alt="social media icon" />
            </li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;