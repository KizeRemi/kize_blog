import React from 'react';
import Link from 'next/link';

const CallToAction = () => (
  <div class="bg-gray-100 border border-gray-200 rounded mt-8">
    <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10">
        Envie de connaitre mon parcours professionnel?
        <br />
        <span class="text-2xl text-indigo-600">Ou tout simplement rester en contact?</span>
      </h2>
      <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <Link href="/contact">
            <a class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Voir mon parcours
            </a>
          </Link>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            Réseaux sociaux
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default CallToAction;
