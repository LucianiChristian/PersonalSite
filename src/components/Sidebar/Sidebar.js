import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faBriefcase, faEnvelope, faHome, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';

export default function Sidebar() {
    
    
    function toggleNav() {

    }

    return (
        <div className="sidebar dark">
            <Link className="logo" to="/">
                <p className="logo">Christian Luciani</p>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/" className="home-link">
                    <FontAwesomeIcon icon={faHome} color="#787692"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/works" className="works-link">
                    <FontAwesomeIcon icon={faBriefcase} color="#787692"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/posts" className="posts-link">
                    <FontAwesomeIcon icon={faPen} color="#787692"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
                    <FontAwesomeIcon icon={faEnvelope} color="#787692"/>
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
            <button onClick={toggleNav}><FontAwesomeIcon icon={faBars} color="4e4e4e"/></button>
        </div>
    )
}