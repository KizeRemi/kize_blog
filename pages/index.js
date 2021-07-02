import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import ArticleCard from '../components/articles/ArticleCard';
import Title from '../components/Title';
import Resume from '../components/Resume';
import Paragraph from '../components/articles/Paragraph';
import CallToAction from '../components/CallToAction';
import { CategoryLink } from '../components/links';

import { CATEGORIES } from '../constants/categories';
import { CTA_LINKS } from '../constants/menu';
import CXImage from '../public/images/articles/cx.jpg';
import DatalegreyaImage from '../public/images/articles/datalegreya.png';
import VisioImage from '../public/images/articles/visiohandicap.png';
import AlternanceImage from '../public/images/articles/alternance.jpg';
import AvatarImage from '../public/images/avatar.jpg';

const Home = () => (
  <div>
    <Head>
      <title>Rémi Mavillaz - Développeur web chez Eleven Labs</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <section className="bg-white w-full px-5 py-6 mx-auto text-gray-600 max-w-7xl">
      <Header />
    </section>
    <section className="bg-white w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
      <Title centered as="h2" weight="thin" uppercase>Derniers articles</Title>
      <div className="flex grid grid-cols-12 pb-10 gap-x-8 gap-y-16">
        <ArticleCard
          className="col-span-12 sm:col-span-6 xl:col-span-4"
          link="/articles/changer-entreprise-durant-alternance"
          category="Experiences"
          imageUrl={AlternanceImage}
          title="Retour d'experience: Changer d'entreprise durant l'alternance"
          date="Novembre 2017"
          description="Cela fait maintenant 2 ans et demi que j'ai repris les études en alternance. Je me suis inscrit à l'université de Cergy Pontoise, filière développement web et mobile. Après avoir été accepté, j'ai dû faire face à cette fameuse période où il faut absolument trouver une entreprise avant la rentrée."
        />
        <ArticleCard
          className="col-span-12 sm:col-span-6 xl:col-span-4"
          link="/articles/customer-experience-cle-de-la-reussite"
          category="Informatique"
          imageUrl={CXImage}
          title="Le Customer Experience, la clé de la réussite?"
          date="Mai 2017"
          description="Amazon est devenu leader du commerce électronique grâce à ce que l’on appelle “L'expérience utilisateur”. Mais qu’est-ce que réellement l'expérience utilisateur (ou CX en anglais) et comment une jeune entreprise peut adopter cette pratique?"
        />
        <ArticleCard
          className="col-span-12 sm:col-span-6 xl:col-span-4"
          link="/articles/importance-de-la-typographie"
          category="Informatique"
          imageUrl={DatalegreyaImage}
          title="L’importance de la typographie dans le web"
          date="Février 2017"
          description="Avec le web, les marques font désormais très attention à leur typographie, pourquoi cet intérêt si soudain? Les écrans ont-ils influé sur la typographie? Quel sont les enjeux en terme de marketing? Le web design se voit souvent heurté par plusieurs problématiques."
        />
        <ArticleCard
          className="col-span-12 sm:col-span-6 xl:col-span-4"
          link="/articles/technologie-la-solution-a-handicap"
          category="Informatique"
          imageUrl={VisioImage}
          title="La technologie, la solution à l’handicap?"
          date="Décembre 2016"
          description="Depuis quelques années, de nombres scientifiques mettent en place des prototypes destinés aux handicapés afin d’améliorer leurs quotidiens. Les progrès sont nombreux mais ces solutions sont-elles complètement viables aujourd’hui ? Pas si sûr."
        />
      </div>
    </section>
    <section className="bg-white w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
      <Title centered as="h2" weight="thin" uppercase>Meilleurs catégories</Title>
      <div className="flex text-white grid grid-cols-12 pb-10 gap-8">
        {CATEGORIES.map((category) => <CategoryLink {...category}>Découvrir</CategoryLink>)}
      </div>
    </section>
    <section className="bg-white w-full px-5 py-6 mx-auto max-w-7xl">
      <Title centered as="h2" weight="thin" uppercase>Biographie</Title>
      <Resume title="Biographie" name="Mavillaz Rémi" job="Développeur web React - Node.js - GraphQL" imageUrl={AvatarImage}>
        <Paragraph>Je m’appelle Rémi, j’ai 31 ans et je vis à Rueil-Malmaison dans les Hauts-de-Seine avec mon Shiba inu.</Paragraph>
        <p>Passioné de jeux vidéos mais aussi par le code, je créé des applications web depuis quelques années.</p>
        <p>J’aime partager mes connaissances, et m’investir à fond dans les produits que je développe !</p>
      </Resume>
    </section>
    <section className="bg-gray-100 border border-gray-200 rounded mt-8">
      <CallToAction
        subTitle="Envie de connaitre mon parcours professionnel?"
        title="Ou tout simplement rester en contact?"
        links={CTA_LINKS}
      />
    </section>
  </div>
)

export default Home;
