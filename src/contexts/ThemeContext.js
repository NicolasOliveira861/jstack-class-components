import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  state = {
    theme: JSON.parse(localStorage.getItem('theme')) || 'dark',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      console.log('mudou!');
    }
  }

  handleToggleTheme = () => {
    this.setState(
      (prevState) => ({ theme: prevState.theme === 'dark' ? 'light' : 'dark' }),
      () => {
        console.log(this.state);

        localStorage.setItem('theme', JSON.stringify(this.state.theme));
      } // Função executada assim que o state atualizar
    );
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('dark');

//   function handleToggleTheme() {
//     setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
//   }

//   return (
//     <ThemeContext.Provider
//       value={{
//         theme,
//         setTheme,
//         handleToggleTheme,
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// }
