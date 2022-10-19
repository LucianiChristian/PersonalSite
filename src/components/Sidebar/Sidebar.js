import React from 'react';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faBriefcase, faEnvelope, faHome, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import { ThemeContextConsumer } from '../../contexts/ThemeContext';

export default function Sidebar() {
    const [showMenu, setShowMenu] = React.useState(false);
    
    function toggleNav() {
        setShowMenu(prevState => !prevState);
    }

    return (
        <ThemeContextConsumer>
            {(context) => (
                <div className={`sidebar ${context.theme}`}>
                    <Link className="logo" to="/">
                        <p className="logo">Christian Luciani</p>
                    </Link>
                    <nav className={showMenu ? "show" : "hide"}>
                        <NavLink exact={true} activeclassname="active" to="/" end className="home-link">
                            <FontAwesomeIcon icon={faHome} />
                        </NavLink>
                        <NavLink exact={true} activeclassname="active" to="/works" className="works-link">
                            <FontAwesomeIcon icon={faBriefcase} />
                        </NavLink>
                        <NavLink exact={true} activeclassname="active" to="/posts" className="posts-link">
                            <FontAwesomeIcon icon={faPen} />
                        </NavLink>
                        <NavLink exact={true} activeclassname="active" to="/contact" className="contact-link">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </NavLink>
                    </nav>
                    <ul className={showMenu ? "show" : "hide"}>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/christian-luciani/">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://github.com/LucianiChristian">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/christian_luciani/">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                    </ul>
                    <button onClick={toggleNav}><FontAwesomeIcon icon={faBars} color="#787692"/></button>
                </div>
            )}
            
        </ThemeContextConsumer>
    )
}