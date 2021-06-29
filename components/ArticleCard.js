import React from 'react';
import Link from 'next/link';

const ArticleCard = ({ imageUrl, date, title, description, category, link }) => (
  <div class="w-full lg:max-w-full lg:flex py-6 sm:py-8">
    <div class="h-48 lg:h-auto lg:w-2/5 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center" style={{ backgroundImage: `url(${imageUrl})`}}>
    </div>
    <div class="bg-white mt-2 lg:mt-0 rounded-b lg:rounded-b-none lg:rounded-r px-2 lg:px-4 flex flex-col justify-between leading-normal font-light">
      <div class="mb-8">
        <div class="flex-1 mb-4 min-w-0">
          <h2 class="text-2xl font-semibold leading-7 text-gray-900 sm:text-2xl sm:leading-9 uppercase">
            <Link href={link}>
              <a>{title}</a>
            </Link>
          </h2>
          <div class="mt-1 flex items-center flex-row sm:mt-0 sm:flex-wrap">
            <div class="flex text-sm leading-5 text-gray-500 mr-2 md:mr-4">
              <svg class="flex-shrink-0 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              {category}
            </div>
            <div class="mt-1 flex items-center text-sm leading-5 text-gray-500  mr-2 md:mr-4">
              <svg class="flex-shrink-0 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              Rémi 'Kize' Mavillaz
            </div>
            <div class="mt-1 flex items-center text-sm leading-5 text-gray-500">
              <svg class="flex-shrink-0 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
              </svg>
              {date}
            </div>
          </div>
        </div>
        <p class="text-gray-700 text-base">{description}</p>
      </div>
      <div class="flex">
        <Link href={link}>
          <a className="text-gray-900 border border-gray-900 py-2 px-8">
            Lire l'article
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default ArticleCard;
