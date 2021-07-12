import React, { useState } from 'react';
import Head from 'next/head';

import Select from '../components/forms/Select';
import Title from '../components/Title';
import Introduction from '../components/articles/Introduction';
import ArticleCard from '../components/articles/ArticleCard';
import Divider from '../components/Divider';

import { ARTICLES_LIST } from '../constants/articles';
import { CATEGORIES_OPTIONS, FILTER_OPTIONS } from '../constants/categories';

const Articles = () => {
  const [articles, setDisplayedArticles] = useState(ARTICLES_LIST);
  const onChangeCategory = (option) => {
    const articlesByCategories = option.id !==  "ALL"
      ? ARTICLES_LIST.filter(article => article.category === option.name)
      : ARTICLES_LIST;
    setDisplayedArticles(articlesByCategories);
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
      <div className="flex px-2 lg:px-0 flex-col sm:flex-row items-center justify-end mt-2 lg:mt-4 mb-8">
        <div className="mx-4 w-full lg:w-64">
          <Select options={CATEGORIES_OPTIONS} onChange={onChangeCategory} />
        </div>
        <div className="ml-0 lg:ml-4 w-full lg:w-64">
          <Select options={FILTER_OPTIONS} disabled id="orderBy" name="orderBy" label="Trier par: " />
        </div>
      </div>
      <Divider />
      <div className="grid grid-cols-12 pb-10 gap-x-8 gap-y-16">
        {articles.map(article => (
          <ArticleCard className="col-span-12 sm:col-span-6" {...article}/>
        ))}
      </div>
    </div>
  );
}

export default Articles;
