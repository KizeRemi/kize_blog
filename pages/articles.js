import React from 'react'
import Head from 'next/head'
import Select from '../components/forms/Select';
import Title from '../components/Title';
import ArticleCard from '../components/ArticleCard';
import Introduction from '../components/Introduction';

const Articles = () => (
  <div class="bg-white container mx-auto">
    <Head>
      <title>Articles</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Title centered as="h2" weight="thin" uppercase>Articles</Title>
    <Introduction>
      Vous retrouverez ici tous mes articles. Code, jeux videos, mode, je parle de plein de sujets, expériences, tests de marques et éventuellement de tutos.
    </Introduction>
    <div className="flex px-2 lg:px-0 flex-col sm:flex-row items-center justify-end mt-2 lg:mt-4 mb-8">
      <div className="mx-4 w-full lg:w-64">
        <Select
          id="category"
          name="category"
          label="Catégorie: "
        >
          <option value="">Toutes les catégories</option>
          <option value="MALE">Code</option>
          <option value="FEMALE">Mode</option>
          <option value="FEMALE">Autre</option>
        </Select>
      </div>
      <div className="ml-0 lg:ml-4 w-full lg:w-64">
        <Select id="orderBy" name="orderBy" label="Trier par: ">
          <option value="MOST_RECENT">Plus récent</option>
        </Select>
      </div>
    </div> 
    <div className="grid grid-cols-12 gap-8 my-24">
      <div className="col-span-6 divide-y divide-gray-400">
        <ArticleCard
          link="/articles/changer-entreprise-durant-alternance"
          category="Experiences"
          imageUrl="http://www.remi-mavillaz.fr/images/articles/changer-alternance.jpg"
          title="Retour d'experience: Changer d'entreprise durant l'alternance"
          date="Novembre 2017"
          description="Cela fait maintenant 2 ans et demi que j'ai repris les études en alternance. Je me suis inscrit à l'université de Cergy Pontoise, filière développement web et mobile. Après avoir été accepté, j'ai dû faire face à cette fameuse période où il faut absolument trouver une entreprise avant la rentrée..."
        />
      </div>
      <div className="col-span-6 divide-y divide-gray-400">
        <ArticleCard
          link="/articles/customer-experience-cle-de-la-reussite"
          category="Informatique"
          imageUrl="http://www.remi-mavillaz.fr/images/articles/emakina-meetup.png"
          title="Le Customer Experience, la clé de la réussite?"
          date="Mai 2017"
          description="Amazon est devenu leader du commerce électronique grâce à ce que l’on appelle “L'expérience utilisateur”. Mais qu’est-ce que réellement l'expérience utilisateur (ou CX en anglais) et comment une jeune entreprise peut adopter cette pratique?"
        />
      </div>
      <div className="col-span-6 divide-y divide-gray-400">
        <ArticleCard
          link="/articles/importance-de-la-typographie"
          category="Informatique"
          imageUrl="http://www.remi-mavillaz.fr/images/articles/datalegreya-meetup.png"
          title="L’importance de la typographie"
          date="Février 2017"
          description="Avec le web, les marques font désormais très attention à leur typographie, pourquoi cet intérêt si soudain? Les écrans ont-ils influé sur la typographie? Quel sont les enjeux en terme de marketing?"
        />
      </div>
      <div className="col-span-6 divide-y divide-gray-400">
        <ArticleCard
          link="/articles/technologie-la-solution-a-handicap"
          category="Informatique"
          imageUrl="http://www.remi-mavillaz.fr/images/articles/visionhandicap-meetup.png"
          title="La technologie, la solution à l’handicap?"
          date="Décembre 2016"
          description="Depuis quelques années, de nombres scientifiques mettent en place des prototypes destinés aux handicapés afin d’améliorer leurs quotidiens. Les progrès sont nombreux mais ces solutions sont-elles complètement viables aujourd’hui ? Pas si sûr."
        />
      </div>
      <div className="col-span-6 divide-y divide-gray-400">
        <ArticleCard
          category="Informatique"
          link="/articles/internet-une-nouvelle-forme-apprentissage"
          imageUrl="http://remi-mavillaz.fr/images/articles/openclassroom-meetup.png"
          title="Internet, une nouvelle forme d'apprentissage?"
          date="Novembre 2016"
          description="Se cultiver, apprendre, échanger, et développer ses propres idées, c’est aujourd’hui possible très facilement grâce à internet. Ainsi, est-il possible d’apprendre sur internet, de la même manière que dans des établissements physique?"
        />
      </div>
    </div>
  </div>
)

export default Articles;
