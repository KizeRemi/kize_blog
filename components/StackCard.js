import React from 'react';
import { ImageLayout } from './Layout';

const StackCard = ({ logo, name, description }) => (
  <div class="xl:w-1/3 md:w-1/2 p-4">
    <div class="border border-gray-200 p-6 rounded-lg h-56">
      <ImageLayout colored>
        <img className="w-10" src={logo} />
      </ImageLayout>
      <h2 class="text-xl text-gray-900 font-bold title-font my-2">{name}</h2>
      <p class="leading-relaxed text-base">{description}</p>
    </div>
  </div>
);

export default StackCard;
