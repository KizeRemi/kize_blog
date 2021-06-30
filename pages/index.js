import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';
import Title from '../components/Title';
import Resume from '../components/Resume';
import Paragraph from '../components/Paragraph';
import CallToAction from '../components/CallToAction';
import { CategoryLink } from '../components/links';

import { CATEGORIES } from '../constants/categories';
import { CTA_LINKS } from '../constants/menu';
import CXImage from '../public/images/articles/cx.jpg';
import DatalegreyaImage from '../public/images/articles/datalegreya.png';
import VisioImage from '../public/images/articles/visiohandicap.png';

const Home = () => (
  <div>
    <Head>
      <title>Rémi Mavillaz - Développeur web chez Eleven Labs</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <section class="container px-5 lg:px-14 container mx-auto text-gray-600 my-8">
      <Header />
    </section>
    <section class="bg-white">
      <div class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
        <div class="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
          <ArticleCard
            link="/articles/customer-experience-cle-de-la-reussite"
            category="Informatique"
            imageUrl={CXImage}
            title="Le Customer Experience, la clé de la réussite?"
            date="Mai 2017"
            description="Amazon est devenu leader du commerce électronique grâce à ce que l’on appelle “L'expérience utilisateur”. Mais qu’est-ce que réellement l'expérience utilisateur (ou CX en anglais) et comment une jeune entreprise peut adopter cette pratique?"
          />
          <ArticleCard
            link="/articles/importance-de-la-typographie"
            category="Informatique"
            imageUrl={DatalegreyaImage}
            title="L’importance de la typographie dans le web"
            date="Février 2017"
            description="Avec le web, les marques font désormais très attention à leur typographie, pourquoi cet intérêt si soudain? Les écrans ont-ils influé sur la typographie? Quel sont les enjeux en terme de marketing? Le web design se voit souvent heurté par plusieurs problématiques..."
          />
          <ArticleCard
            link="/articles/technologie-la-solution-a-handicap"
            category="Informatique"
            imageUrl={VisioImage}
            title="La technologie, la solution à l’handicap?"
            date="Décembre 2016"
            description="Depuis quelques années, de nombres scientifiques mettent en place des prototypes destinés aux handicapés afin d’améliorer leurs quotidiens. Les progrès sont nombreux mais ces solutions sont-elles complètement viables aujourd’hui ? Pas si sûr."
          />
        </div>
      </div>
    </section>
    <section className="my-20 px-5 lg:px-14 bg-white container mx-auto">
      <Title centered as="h2" weight="thin" uppercase>Meilleurs catégories</Title>
      <div className="flex flex-row flex-wrap text-white justify-center">
        {CATEGORIES.map((category) => <CategoryLink {...category}>Découvrir</CategoryLink>)}
      </div>
    </section>
    <section class="flex flex-col items-center md:text-center my-8 bg-white container mx-auto">
      <Title centered as="h2" weight="thin" uppercase>Biographie</Title>
      <Resume title="Biographie" name="Mavillaz Rémi" job="Développeur web React - Node.js - GraphQL" imageUrl="/images/avatar.jpg">
        <Paragraph>Je m’appelle Rémi, j’ai 29 ans et je vis à Rueil-Malmaison dans les Hauts-de-Seine avec mon Shiba inu.</Paragraph>
        <p>Passioné de jeux vidéos mais aussi par le code, je créé des applications web depuis quelques années.</p>
        <p>J’aime partager mes connaissances, et m’investir à fond dans les produits que je développe !</p>
      </Resume>
    </section>
    <section class="bg-gray-100 border border-gray-200 rounded mt-8">
      <CallToAction
        subTitle="Envie de connaitre mon parcours professionnel?"
        title="Ou tout simplement rester en contact?"
        links={CTA_LINKS}
      />
    </section>
  </div>
)

export default Home;
