import React from 'react';

const {Provider, Consumer} = React.createContext();

function ThemeContextProvider(props) {
    const [theme, setTheme] = React.useState("dark");
    
    return (
        <Provider value={theme}>
            {props.children}
        </Provider>
    )
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };