import React from 'react';

const Header = () => (
  <div class="relative bg-white overflow-hidden container mx-auto mt-6 lg:mt-16 dark:bg-gray-800">
    <div class="max-w-screen-xl mx-auto w-full">
      <div class="z-10 bg-white w-full lg:w-4/6">
        <main class="mx-auto max-w-screen-xl px-4 md:mt-6 sm:px-6 lg:px-8">
          <div class="sm:text-center lg:text-left leading-none sm:leading-tight">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900">
              Je suis Rémi.
              <br />
              <span class="text-gray-600">un développeur web, mais pas que !</span>
            </h2>
            <p class="mb-6 mt-3 lg:mb-0 text-2xl text-gray-500 sm:mt-5 sm:text-3xl sm:mx-auto md:mt-5 md:text-4xl lg:mx-0">
              Venez me rencontrer pour discuter code, technos, nutella, yoga et plein d’autres choses !
            </p>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/6">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/me.jpg" alt="" />
    </div>
  </div>
);

export default Header;
