import App from 'next/app'
import React from 'react'
import Menu from '../components/Menu';

import '../assets/fonts.css';
import '../assets/index.css';

import Footer from '../components/Footer';
import { MENUS_LIST } from '../constants/menu';

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
        <iframe src="https://snapwidget.com/embed/946502" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style={{ border: 'none', width: '100%', height: '180px'}} />
        <Footer />
        <div className="text-center text-xs uppercase my-4">Blog développé en 2020 par Mavillaz `Kize` Rémi</div>
      </div>
    )
  }
}

export default PortFolioApp;
