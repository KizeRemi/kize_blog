import React from 'react';

const Header = () => (
  <div class="relative bg-white overflow-hidden container mx-auto">
    <div class="max-w-screen-xl mx-auto">
      <div class="z-10 bg-white lg:max-w-2xl lg:w-full">
        <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8">
          <div class="sm:text-center lg:text-left">
            <h2 class="text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-3xl sm:leading-none md:text-4xl">
              Je suis Rémi.
              <br />
              <span class="text-gray-600">un développeur web, mais pas que !</span>
            </h2>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Venez me rencontrer pour discuter code, technos, nutella, yoga et plein d’autres choses !
            </p>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/5">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/remi.jpg" alt="" />
    </div>
  </div>
);

export default Header;