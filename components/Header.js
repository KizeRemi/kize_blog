import React from 'react';
import Link from 'next/link';

const Header = () => (
  <div class="container mx-auto flex md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font text-3xl sm:text-4xl md:text-3xl lg:text-4xl mb-4 font-medium text-gray-900">Je suis Rémi.
        <br class="lg:inline-block" />un développeur web, mais pas que !
      </h1>
      <p class="mb-8 leading-relaxed sm:text-3xl md:text-xl">Venez me rencontrer pour discuter code, technos, nutella, yoga et plein d’autres choses !</p>
      <div class="flex justify-center">
        <Link href="/articles">
          <a class="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded lg:text-lg">Lire mes articles</a>
        </Link>
        <Link href="/contact">
          <a class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded lg:text-lg">Voir mon parcours</a>
        </Link>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/images/remi-hero.jpg" />
    </div>
  </div>
);

export default Header;
