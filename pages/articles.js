import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Select from '../components/forms/Select';
import Title from '../components/Title';
import VerticalArticleCard from '../components/VerticalArticleCard';
import Introduction from '../components/articles/Introduction';

import { ARTICLES_LIST } from '../constants/articles';
import ArticleCard from '../components/ArticleCard';

const Articles = () => {
  const [articles, setDisplayedArticles] = useState(ARTICLES_LIST);
  const switchCategory = (e) => {
    const { value: selectedCategory } = e.target;
    const articlesByCategories = selectedCategory && ARTICLES_LIST.filter(article => article.category === selectedCategory);
    setDisplayedArticles(articlesByCategories || ARTICLES_LIST);
  };

  return (
    <div class="bg-white px-5 lg:px-14 container mx-auto">
      <Head>
        <title>Mavillaz Rémi - Liste d'articles - Code Jeux vidéos Mode</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Title centered as="h2" weight="thin" uppercase>Articles</Title>
      <Introduction>
        Vous retrouverez ici tous mes articles. Code, jeux videos, mode, je parle de plein de sujets, expériences, tests de marques et éventuellement de tutos.
      </Introduction>
      <div class="flex my-6 justify-center">
        <div class="w-16 h-0.5 bg-gray-500 inline-flex"></div>
      </div>
      <div className="flex px-2 lg:px-0 flex-col sm:flex-row items-center justify-end mt-2 lg:mt-4 mb-8">
        <div className="mx-4 w-full lg:w-64">
          <Select
            id="category"
            name="category"
            label="Catégorie: "
            onChange={switchCategory}
          >
            <option value="">Toutes les catégories</option>
            <option value="Code">Code</option>
            <option value="Mode">Mode</option>
            <option value="Experiences">Experiences</option>
            <option value="Informatique">Numérique</option>
          </Select>
        </div>
        <div className="ml-0 lg:ml-4 w-full lg:w-64">
          <Select disabled id="orderBy" name="orderBy" label="Trier par: ">
            <option value="MOST_RECENT">Plus récent</option>
          </Select>
        </div>
      </div>
      <div className="flex grid grid-cols-12 pb-10 gap-x-8 gap-y-16">
        {articles.map(article => (
          <ArticleCard className="col-span-12 sm:col-span-6" {...article}/>
        ))}
      </div>
    </div>
  );
}

export default Articles;
