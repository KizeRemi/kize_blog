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

const Home = () => (
  <div>
    <Head>
      <title>Rémi Mavillaz - Développeur web chez Eleven Labs</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <section class="text-gray-600 my-8">
      <Header />
    </section>
    <section className="my-20 bg-white container mx-auto">
      <Title centered as="h2" weight="thin" uppercase>Derniers articles</Title>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 divide-y divide-gray-400 lg:pr-16">
          <ArticleCard
            link="/articles/technologie-la-solution-a-handicap"
            category="Informatique"
            imageUrl="/images/articles/visiohandicap.png"
            title="La technologie, la solution à l’handicap?"
            date="Décembre 2016"
            description="Depuis quelques années, de nombres scientifiques mettent en place des prototypes destinés aux handicapés afin d’améliorer leurs quotidiens. Les progrès sont nombreux mais ces solutions sont-elles complètement viables aujourd’hui ? Pas si sûr."
          />
          <ArticleCard
            link="/articles/importance-de-la-typographie"
            category="Informatique"
            imageUrl="/images/articles/datalegreya.png"
            title="L’importance de la typographie"
            date="Février 2017"
            description="Avec le web, les marques font désormais très attention à leur typographie, pourquoi cet intérêt si soudain? Les écrans ont-ils influé sur la typographie? Quel sont les enjeux en terme de marketing?"
          />
          <ArticleCard
            link="/articles/customer-experience-cle-de-la-reussite"
            category="Informatique"
            imageUrl="/images/articles/cx.jpg"
            title="Le Customer Experience, la clé de la réussite?"
            date="Mai 2017"
            description="Amazon est devenu leader du commerce électronique grâce à ce que l’on appelle “L'expérience utilisateur”. Mais qu’est-ce que réellement l'expérience utilisateur (ou CX en anglais) et comment une jeune entreprise peut adopter cette pratique?"
          />
          <ArticleCard
            link="/articles/changer-entreprise-durant-alternance"
            category="Experiences"
            imageUrl="/images/articles/alternance.jpg"
            title="Retour d'experience: Changer d'entreprise durant l'alternance"
            date="Novembre 2017"
            description="Cela fait maintenant 2 ans et demi que j'ai repris les études en alternance. Je me suis inscrit à l'université de Cergy Pontoise, filière développement web et mobile. Après avoir été accepté, j'ai dû faire face à cette fameuse période où il faut absolument trouver une entreprise avant la rentrée..."
          />
        </div>
      </div>
    </section>
    <section className="my-20 bg-white container mx-auto">
      <Title centered as="h2" weight="thin" uppercase>Meilleurs catégories</Title>
      <div className="flex flex-row flex-wrap text-white justify-center lg:my-8">
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
