import React from 'react';

const Resume = ({ children, job, name, imageUrl }) => (
  <div class="lg:mb-0 mb-6 p-4">
    <div class="h-full text-center">
      <img alt="testimonial" class="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={imageUrl} />
      <p class="leading-relaxed text-lg text-gray-500">{children}</p>
      <span class="inline-block h-1 w-10 rounded bg-gray-500 mt-6 mb-4"></span>
      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm font-bold uppercase">{name}</h2>
      <p class="text-gray-500">{job}</p>
    </div>
  </div>
);

export default Resume;
