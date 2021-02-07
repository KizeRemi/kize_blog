import React from 'react';
import Link from 'next/link';
import { string, node } from 'prop-types';

const CategoryLink = ({ href, label, imageUrl, children }) => (
  <Link href={href}>
    <a style={{ backgroundImage: `url('${imageUrl}')` }} className="block mx-2 lg:mx-auto bg-cover my-8 text-sm w-full sm:w-72 h-72 flex flex-col justify-center items-center uppercase tracking-widest opacity-90">
      <div style={{ textShadow: '1px 0 10px black' }} className="font-thin underline text-lg -mb-2">Catégorie</div>
      <div style={{ textShadow: '2px 0 10px black' }} className="mt-1 mb-8 text-4xl font-weight">{label}</div>
      <div className="border border-gray-200 font-bold bg-white text-gray-900 px-4 py-2 tracking-wider">{children}</div>
    </a>
  </Link>
);

CategoryLink.propTypes = {
  children: node.isRequired,
  imageUrl: string.isRequired,
  label: string.isRequired,
  href: string.isRequired,
};

export default CategoryLink;
