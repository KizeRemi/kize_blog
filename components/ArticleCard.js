import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tag from './Tag';

const ArticleCard = ({ imageUrl, date, title, description, category, link, className }) => (
  <div className={`flex flex-col items-start space-y-3 ${className}`}>
    <Link href={link}>
      <div className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56">
        <div className="transition duration-200 ease-out transform hover:scale-110">
          <Image layout="responsive" placeholder="blur" alt="hero" src={imageUrl} /> 
        </div>
      </div>
    </Link>
    <Tag>{category}</Tag>
    <h2 className="text-lg font-bold sm:text-xl md:text-2xl"><Link href={link}>{title}</Link></h2>
    <p className="text-md text-gray-500">{description}</p>
    <Link href={link}>
      <a className="mr-2 block underline text-right">Lire la suite de l'article</a>
    </Link>
    <p className="pt-2 text-xs font-bold">
      <a href="#_" className="mr-2 underline">Rémi 'Kize' Mavillaz</a>
       ·
      <span className="mx-2">{date}</span>
       ·
      <span className="mx-2 text-gray-600">3 min. read</span>
    </p>
  </div>
);

export default ArticleCard;
