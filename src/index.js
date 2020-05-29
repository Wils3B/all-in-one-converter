import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import themes from './themes';

export const ThemeContext = React.createContext({
  name: 'light',
  toggleTheme: () => {},
});

function RootComponent(props) {
  const themeStyle = React.useContext(ThemeContext);
  const [theme, setTheme] = React.useState(themeStyle.name);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <CssBaseline />
      <ThemeContext.Provider value={{ name: theme, toggleTheme }}>
        <App />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
