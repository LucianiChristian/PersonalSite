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
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="black"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/about" className="about-link">
                    <FontAwesomeIcon icon={faUser} color="black"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
                    <FontAwesomeIcon icon={faEnvelope} color="black"/>
                </NavLink>
            </nav>
        </div>
    )
}