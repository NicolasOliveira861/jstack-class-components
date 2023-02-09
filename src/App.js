import React, { Component } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends Component {
  state = {
    changed: false,
  };

  componentDidMount() {
    console.log('componentDidMount executed!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({
      currentState: this.state,
      prevState,
      prevProps,
    });
  }

  componentDidCatch(error, info) {
    console.log({
      error,
      info,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log({
      currentState: this.state,
      nextState,
      nextProps,
    });

    return true;
  }

  render() {
    return (
      <ThemeProvider>
        <button onClick={() => this.setState({ changed: true })}>
          Change state
        </button>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
              {/* {theme === 'dark' && <Layout />} */}
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

// function App() {
//   const [theme, setTheme] = useState('dark');

//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark;
//   }, [theme]);

// function handleToggleTheme() {
//   setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
// }

//   return (
//     <ThemeProvider theme={currentTheme}>
//       <GlobalStyle />
//       <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
//     </ThemeProvider>
//   );
// }

export default App;
