import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-container">
            <div className="footer-logo">
                <Link to="##">
                    <i className="fab fa-github"></i>
                </Link>
            </div>
            <ul>
                <li>
                    <p>&copy; 2020 Github, Inc.</p>
                </li>
                <li>
                    <Link to="##">Terms</Link>
                </li>
                <li>
                    <Link to="##">Privacy</Link>
                </li>
                <li>
                    <Link to="##">Security</Link>
                </li>
                <li>
                    <Link to="##">Status</Link>
                </li>
                <li>
                    <Link to="##">Help</Link>
                </li>
                <li>
                    <Link to="##">Contact GitHub</Link>
                </li>
                <li>
                    <Link to="##">Pricing</Link>
                </li>
                <li>
                    <Link to="##">API</Link>
                </li>
                <li>
                    <Link to="##">Training</Link>
                </li>
                <li>
                    <Link to="##">Blog</Link>
                </li>
                <li>
                    <Link to="##">About</Link>
                </li>
            </ul>
            </div>
        </footer>
    );
}

export default Footer;
