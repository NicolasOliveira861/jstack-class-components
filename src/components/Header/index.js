import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

export default function Header() {
  const history = useHistory();

  function handleNavigate() {
    history.push('/');
  }

  return (
    <Container>
      <h1>Jstack's Blog</h1>
      <button type="button">🌞</button>
      <button type="button" onClick={handleNavigate} style={{ color: '#fff' }}>
        Voltar para home
      </button>
    </Container>
  );
}

// function HOC(HeaderComponent) {
//   return class Component extends React.Component {
//     render() {
//       return (
//         <ThemeContext.Consumer>
//           {(value) => <HeaderComponent {...value} />}
//         </ThemeContext.Consumer>
//       );
//     }
//   };
// }

// class Header extends Component {
//   componentDidUpdate(prevProps, prevState) {
//     if (this.props.theme !== prevProps.theme) {
//       console.log('Tema mudou!');
//     }
//   }

//   render() {
//     return (
//       <Container>
//         <h1>JStack's Blog</h1>
//         <button type="button" onClick={this.props.handleToggleTheme}>
//           {this.props.theme === 'dark' ? '🌞' : '🌚'}
//         </button>
//       </Container>
//     );
//   }
// }

// export default HOC(Header);

// Header.propTypes = {
//   selectedTheme: PropTypes.string.isRequired,
//   onToggleTheme: PropTypes.func.isRequired,
// };
