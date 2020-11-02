import React from 'react';
import Title from '../components/Title';

const Header = () => (
  <div class="relative bg-white overflow-hidden container mx-auto mt-6 lg:mt-16">
    <div class="max-w-screen-xl mx-auto">
      <div class="z-10 bg-white w-full lg:max-w-xl lg:w-full xl:max-w-2xl">
        <main class="mx-auto max-w-screen-xl px-4 sm:mt-6 sm:px-6 lg:px-8">
          <div class="sm:text-center lg:text-left leading-tight">
            <Title weight="semibold" size="huge" as="h2" color="black">
              Je suis Rémi.
              <br />
              <span class="text-gray-600">un développeur web, mais pas que !</span>
            </Title>
            <p class="mb-6 mt-3 lg:mb-0 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Venez me rencontrer pour discuter code, technos, nutella, yoga et plein d’autres choses !
            </p>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/5">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/me.jpg" alt="" />
    </div>
  </div>
);

export default Header;
