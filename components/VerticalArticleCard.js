import React from 'react';
import { ButtonLink } from '../components/links'

const VerticalArticleCard = ({ imageUrl, date, title, description, category, link }) => (
    <div class="h-full rounded-xs overflow-hidden">
      <img class="lg:h-56 md:h-44 w-full object-cover object-center" src={imageUrl} alt="blog" />
      <div class="h-full p-2">
        <h3 class="tracking-widest text-xs title-font font-bold text-gray-400 mb-1 uppercase mt-2">{category}</h3>
        <h2 class="text-2xl font-semibold leading-7 text-gray-900 mb-3 uppercase">{title}</h2>
        <p class="leading-6 text-gray-700 my-5">{description}</p>
        <div class="flex items-center flex-wrap justify-between mt-6">
          <ButtonLink href={link}>Lire l'article</ButtonLink>
          <span class="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            {date}
          </span>
        </div>
      </div>
    </div>
);

export default VerticalArticleCard;
