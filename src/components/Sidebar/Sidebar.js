import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Link className="logo" to="/">
                <p>Christian Luciani</p>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/" className="home-link">
                    <FontAwesomeIcon icon={faHome} color="#4e4e4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/about" className="about-link">
                    <FontAwesomeIcon icon={faUser} color="#4e4e4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
                    <FontAwesomeIcon icon={faEnvelope} color="#4e4e4e"/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/christian-luciani/">
                        <FontAwesomeIcon icon={faLinkedin} color="4e4e4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/LucianiChristian">
                        <FontAwesomeIcon icon={faGithub} color="4e4e4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/christian_luciani/">
                        <FontAwesomeIcon icon={faInstagram} color="4e4e4e"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}