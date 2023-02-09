import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

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
        <PostsList />
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
