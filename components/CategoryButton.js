import React from 'react';

const CategoryButton = ({ label, imageUrl }) => (
  <button style={{ backgroundImage: `url('${imageUrl}')` }} className="mx-2 lg:mx-auto bg-cover my-8 text-sm w-64 h-64 flex flex-col justify-center items-center uppercase tracking-widest">
    <div style={{ textShadow: '1px 0 10px black' }} className="font-thin underline -mb-2">Catégorie</div>
    <div style={{ textShadow: '2px 0 10px black' }} className="my-2 text-3xl font-weight">{label}</div>
    <div className="bg-white text-gray-900 px-4 py-2 rounded tracking-wider">Découvrir</div>
  </button>
);

export default CategoryButton;
