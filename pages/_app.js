import App from 'next/app';
import React from 'react';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import InstagramWall from '../components/InstagramWall';

import { MENUS_LIST } from '../constants/menu';

import '../assets/fonts.css';
import '../assets/index.css';

export class PortFolioApp extends App {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    const { Component, pageProps } = this.props
    const onButtonClick = () => {
      this.myRef.current.classList.toggle("dark")
    };

    return (
      <div ref={this.myRef}>
        <div className="container mx-auto">
          <Menu items={MENUS_LIST} />
        </div>
        <Component {...pageProps} />
        <InstagramWall /> 
        <Footer />
        <div className="text-center text-xs uppercase my-4">Blog développé en 2020 par Mavillaz `Kize` Rémi</div>
      </div>
    )
  }
}

export default PortFolioApp;
