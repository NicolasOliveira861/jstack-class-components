import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Routes from '../../routes';

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
      <>
        <Header />
        <Routes />
        <Footer />
      </>
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
