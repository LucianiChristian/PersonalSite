import React from 'react';

const {Provider, Consumer} = React.createContext();

function ThemeContextProvider(props) {
    const [theme, setTheme] = React.useState("dark");

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
    }

    const context = { theme, toggleTheme };
    
    return (
        <Provider value={context}>
            {props.children}
        </Provider>
    )
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };