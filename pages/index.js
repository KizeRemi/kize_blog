import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';
import Title from '../components/Title';
import CategoryButton from '../components/CategoryButton';
import Resume from '../components/Resume';

import { CATEGORIES } from '../constants/categories';
import CallToAction from '../components/CallToAction';

const Home = () => (
  <div>
    <Head>
      <title>Accueil</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header />
    <div className="my-20 bg-white container mx-auto">
      <Title centered as="h2" weight="thin" uppercase>Derniers articles</Title>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 divide-y divide-gray-400 lg:pr-8">
          <ArticleCard
            link="/articles/technologie-la-solution-a-handicap"
            category="Informatique"
            imageUrl="http://www.remi-mavillaz.fr/images/articles/visionhandicap-meetup.png"
            title="La technologie, la solution à l’handicap?"
            date="Décembre 2016"
            description="Depuis quelques années, de nombres scientifiques mettent en place des prototypes destinés aux handicapés afin d’améliorer leurs quotidiens. Les progrès sont nombreux mais ces solutions sont-elles complètement viables aujourd’hui ? Pas si sûr."
          />
          <ArticleCard
            link="/articles/importance-de-la-typographie"
            category="Informatique"
            imageUrl="http://www.remi-mavillaz.fr/images/articles/datalegreya-meetup.png"
            title="L’importance de la typographie"
            date="Février 2017"
            description="Avec le web, les marques font désormais très attention à leur typographie, pourquoi cet intérêt si soudain? Les écrans ont-ils influé sur la typographie? Quel sont les enjeux en terme de marketing?"
          />
          <ArticleCard
            link="/articles/customer-experience-cle-de-la-reussite"
            category="Informatique"
            imageUrl="http://www.remi-mavillaz.fr/images/articles/emakina-meetup.png"
            title="Le Customer Experience, la clé de la réussite?"
            date="Mai 2017"
            description="Amazon est devenu leader du commerce électronique grâce à ce que l’on appelle “L'expérience utilisateur”. Mais qu’est-ce que réellement l'expérience utilisateur (ou CX en anglais) et comment une jeune entreprise peut adopter cette pratique?"
          />
          <ArticleCard
            link="/articles/changer-entreprise-durant-alternance"
            category="Experiences"
            imageUrl="http://www.remi-mavillaz.fr/images/articles/changer-alternance.jpg"
            title="Retour d'experience: Changer d'entreprise durant l'alternance"
            date="Novembre 2017"
            description="Cela fait maintenant 2 ans et demi que j'ai repris les études en alternance. Je me suis inscrit à l'université de Cergy Pontoise, filière développement web et mobile. Après avoir été accepté, j'ai dû faire face à cette fameuse période où il faut absolument trouver une entreprise avant la rentrée..."
          />
        </div>
        <div className="flex flex-row flex-wrap lg:flex-col text-white justify-center lg:my-8">
          {CATEGORIES.map((category) => <CategoryButton {...category} />)}
        </div>
      </div>
    </div>
    <Resume title="Biographie" imageUrl="/images/avatar.jpg">
      Je m’appelle Rémi, j’ai 29 ans et je vis à Rueil-Malmaison dans les Hauts-de-Seine avec mon Shiba inu. <br />
      Passioné de jeux vidéos mais aussi par le code, je créé des applications web depuis quelques années.

      J’aime partager mes connaissances, et m’investir à fond dans les produits que je développe !
    </Resume>
    <CallToAction />
  </div>
)

export default Home;
