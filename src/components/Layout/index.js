import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Routes from '../../routes';
import { BrowserRouter, Link } from 'react-router-dom';
import { Nav } from './styles';

export default class Layout extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log('scrolled...');
  };

  render() {
    return (
      <BrowserRouter>
        <Header />

        <Nav>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/posts/123">Post</Link>
        </Nav>

        <Routes />
        <Footer />
      </BrowserRouter>
    );
  }
}

// export default function Layout() {
//   return (
//     <>
//       {undefined.map((item) => item)} FORCE ERROR -> componentDidCatch
//       <Header />
//       <PostsList />
//       <Footer />
//     </>
//   );
// }
