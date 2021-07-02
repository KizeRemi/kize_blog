import React from 'react';
import Image from 'next/image';

const Resume = ({ children, job, name, imageUrl }) => (
  <div className="lg:mb-0 mb-6 p-4">
    <div className="h-full text-center">
      <div className="w-32 h-32 mb-8 rounded-full inline-block border-2 border-gray-200 bg-gray-100">
        <Image
          layout="responsive"
          placeholder="blur"
          quality={100}
          className="object-cover object-center rounded-full"
          alt="testimonial remi mavillaz avatar"
          src={imageUrl}
        />
      </div>
      <p className="leading-relaxed text-lg text-gray-500">{children}</p>
      <span className="inline-block h-1 w-10 rounded bg-gray-500 mt-6 mb-4"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm font-bold uppercase">{name}</h2>
      <p className="text-gray-500">{job}</p>
    </div>
  </div>
);

export default Resume;
