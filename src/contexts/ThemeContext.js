import React from 'react';

const {Provider, Consumer} = React.createContext();

function ThemeContextProvider(props) {
    const [theme, setTheme] = React.useState("dark");

    const context = { theme, setTheme };
    
    return (
        <Provider value={context}>
            {props.children}
        </Provider>
    )
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };