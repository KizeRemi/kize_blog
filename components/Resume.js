import React from 'react';
import Title from './Title';

const Resume = ({ title, children, imageUrl }) => (
  <div class="flex flex-col items-center my-20 text-center bg-white container mx-auto">
    <Title centered as="h2" weight="thin" uppercase>{title}</Title>
    <p className="mt-4 max-w-4xl text-xl leading-7 text-gray-500 lg:mx-auto">
      {children}
    </p>
    <img src={imageUrl} className="w-32 my-4 rounded-full" alt="portrait remi mavillaz" />
  </div>
);

export default Resume;
