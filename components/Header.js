import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import heroImage from "../public/images/remi-hero.jpg";

const Header = () => (
  <div className="flex md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font text-3xl sm:text-4xl md:text-3xl lg:text-4xl mb-4 font-medium text-gray-900">Je suis Rémi.
        <br className="lg:inline-block" />un développeur web, mais pas que !
      </h1>
      <p className="mb-8 leading-relaxed sm:text-3xl md:text-xl">Venez me rencontrer pour discuter code, technos, nutella, yoga et plein d’autres choses !</p>
      <div className="flex justify-center">
        <Link href="/articles">
          <a className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded lg:text-lg text-center">Lire mes articles</a>
        </Link>
        <Link href="/contact">
          <a className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded lg:text-lg text-center">Voir mon parcours</a>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" layout="responsive" placeholder="blur" alt="hero" src={heroImage} />
    </div>
  </div>
);

export default Header;
