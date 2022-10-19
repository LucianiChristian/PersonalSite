import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContextConsumer } from '../../contexts/ThemeContext';

export default function ThemeToggleButton() {
    const [icon, setIcon] = React.useState("moon");
    
    function handleClick() {
        setIcon(prevState => prevState === "moon" ? "sun" : "moon");
    }

    return (
        <ThemeContextConsumer>
            {(context) => (
                <button className="themeToggle" onClick={() => {
                        handleClick(); 
                        context.toggleTheme();
                    }}>
                    {icon === "moon" ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />} 
                </button>   
            )}
        </ThemeContextConsumer>
    )
}