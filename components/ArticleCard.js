import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tag from './Tag';

const ArticleCard = ({ imageUrl, date, title, description, category, link }) => (
  <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
    <Link href={link}>
      <div className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56">
        <div className="transition duration-200 ease-out transform hover:scale-110">
          <Image layout="responsive" placeholder="blur" alt="hero" src={imageUrl} /> 
        </div>
      </div>
    </Link>
    <Tag>{category}</Tag>
    <h2 class="text-lg font-bold sm:text-xl md:text-2xl"><Link href={link}>{title}</Link></h2>
    <p class="text-md text-gray-500">{description}</p>
    <p class="pt-2 text-xs font-bold">
      <a href="#_" class="mr-2 underline">Rémi 'Kize' Mavillaz</a>
       ·
      <span class="mx-2">{date}</span>
       ·
      <span class="mx-2 text-gray-600">3 min. read</span>
    </p>
  </div>
);

export default ArticleCard;
