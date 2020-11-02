import React from 'react';
import { ImageLayout } from './Layout';

const StackCard = ({ logo, name, description }) => (
  <div class="bg-white max-w-sm m-auto sm:m-0 rounded overflow-hidden shadow">
    <div class="p-4 text-center">
      <div className="flex justify-center">
        <ImageLayout colored>
          <img src={logo} />
        </ImageLayout>
      </div>
      <div class="font-bold my-2 text-xl">{name}</div>
      <p class="text-gray-700 text-sm">
        {description}
      </p>
    </div>
  </div>
);

export default StackCard;
