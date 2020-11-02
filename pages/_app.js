import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components';
import Menu from '../components/Menu';
import '../assets/index.css';

import { GlobalStyle } from '../components/Global';
import Footer from '../components/Footer';

const theme = {
  colors: {
    primary: '#0070f3',
  },
}
const menuConfig = [
  {
    href: '/',
    label: 'Accueil',
  },
  {
    href: '/articles',
    label: 'Articles',
  },
  {
    href: '/contact',
    label: 'Professionnel',
    important: true,
  },
];

export class PortFolioApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <div className="container mx-auto">
          <Menu items={menuConfig} />
        </div>
        <GlobalStyle />
        <Component {...pageProps} />
        <iframe src="https://snapwidget.com/embed/884278" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style={{ border: 'none', width: '100%', height: '180px'}} />
        <Footer />
        <div className="text-center text-xs uppercase my-4">Blog développé en 2020 par Mavillaz `Kize` Rémi</div>
      </ThemeProvider>
    )
  }
}

export default PortFolioApp;
