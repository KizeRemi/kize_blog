import React from 'react';
import Head from 'next/head';

import Paragraph from '../../components/articles/Paragraph';
import Introduction from '../../components/articles/Introduction';
import Conclusion from '../../components/articles/Conclusion';
import Title from '../../components/Title';
import ArticleHeader from '../../components/articles/ArticleHeader';
import ArticleBody from '../../components/articles/ArticleBody';
import ArticleFooter from '../../components/articles/ArticleFooter';
import ArticleLayout from '../../components/articles/ArticleLayout';

const InternetANewWayToLearn = () => (
  <ArticleLayout>
    <Head>
      <title>Internet, une nouvelle forme d'apprentissage?</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Title centered as="h2" weight="thin" uppercase>BILLET DE BLOG</Title>
    <ArticleHeader>
      <Title centered size="huge" as="h1" color="black" uppercase>Internet, une nouvelle forme d'apprentissage?</Title>
      <Introduction>
        Depuis l’ouverture d’internet aux grands publics, de nombreux sites ont proliféré afin de développer certains domaines, que ce soit en France ou à l’international. En effet, depuis le fameux Web 2.0, internet est devenu beaucoup plus accessible et l’accès à l’information n’a jamais été aussi simple.
        Se cultiver, apprendre, échanger, et développer ses propres idées, c’est aujourd’hui possible très facilement grâce à internet. Ainsi, est-il possible d’apprendre sur internet, de la même manière que dans des établissements physique?
      </Introduction>
    </ArticleHeader>
    <ArticleBody>
      <Title as="h3" weight="semibold" uppercase>1.Le cas OpenClassrooms</Title>
      <Paragraph>
        Durant la conférence sur OpenClassrooms tenu par Matthieu nebra, co-fondateur, nous avons pu en apprendre davantage sur la naissance des cours numériques.
        OpenClassrooms est donc une plateforme proposant divers cours sur les technologies de web. Lancé en 1999, le site devait répondre à la problématique : Comment apprendre à développer très facilement ?. En effet, les différentes méthodes d’apprentissage classique, que ce soit par les livres, ne sont pas forcément adaptées pour ce domaine et les écoles ne proposent pas forcément des cours de développement, surtout au collège ou au lycée.
        Ainsi, OpenClassrooms est né pour palier à cela et propose aux internautes d’apprendre à développer et créer des applications web de manière gratuite.

        Le site a mis un peu de temps à se développer, mais il est aujourd’hui leader des MOOC, comme le souligne Mr Francois Hollande:

        ”OpenClassrooms est maintenant leader en Europe dans le secteur des MOOC, une plateforme permettant de rassembler tout ce qui est connaissance et de le mettre à la disposition du plus grand nombre.”
      </Paragraph>
      <Title as="h3" weight="semibold" uppercase>2.Les MOOC?</Title>
      <Paragraph>
        Cet acronyme anglais signifie Massive Open Online Course ce qui peut être traduit en français par Cours en Ligne Massif et Ouvert. Il s’agit d’un des aspects qui rend l’apprentissage par internet très intéressant, les MOOC veulent révolutionner les méthodes d’enseignements grâce à des cours gratuits et qui permet d'interagir avec les autres.
        Les MOOC proposent tout un panel de cours que les jeunes et moins jeunes peuvent consulter à n’importe quel moment. Plusieurs formats sont disponibles, que ce soit à base d’articles, de vidéos, de PowerPoints, etc. Contrairement aux écoles, les internautes peuvent apprendre à leurs rythmes sans pression extérieure, mais une évaluation par un jury est possible via des exercices ou des projets.
        Point important à souligner, même si les cours sont écrits par des internautes, ils peuvent aussi l’être par des vrais professeurs ce qui peut leur donner un vrai statut professionnel.
      </Paragraph>
      <Title as="h3" weight="semibold" uppercase>3.Trouvez un emploi grâce à internet</Title>
      <Paragraph>
        Depuis quelques années, la popularité des MOOC ont montré qu’il y avait un réel intérêt à apprendre sur internet mais cela n’était pas reconnu par l’état. Apprendre à développer par exemple et donc possible, mais il n’y a absolument rien qui validait les compétences… jusqu’à aujourd’hui. En effet, des sites comme OpenClassrooms proposent des parcours diplômants à l’issu des 4 à 12 mois de cours. Celui-ci est reconnu et permet donc de se former à son rythme.
        Contrairement à l’université, on décide réellement du rythme d’apprentissage et d’approfondir certains points. Les élèves travaillent mentors et permettent ainsi d’avoir des suivis personnalisés. Pour Matthieu Nebra, il est important que les cours soient composé de projet professionnels qui viendront garnir un portfolio, c’est ce qui permet de déterminer si le diplôme est valorisant. Selon lui, le CV sera bientôt remplacé par un Portfolio regroupant tous les projets du demandeur d’emploi.
      </Paragraph>
      <Title as="h3" weight="semibold" uppercase>4.Des diplômes payants</Title>
      <Paragraph>
        Tout au long de ce billet, nous avons parlé de cours accessibles et gratuits. Mais attention, ce n’est pas forcément le cas des parcours diplômants ! En effet, l’obtention des diplômes requiert un mentor, des projets professionnels qui seront validé par un jury ce qui rend les cours payants. À titre d’exemple, le diplôme “Chef de projet Multimédia - Développement” coûte 300€ / mois sur OpenClassrooms.
        En effet, la plupart des sites MOOC se sont vendus comme des sites gratuits mais elles ont tendance à mettre en avant leurs formations qui sont payantes. L’intérêt premier n’était-il pas d'amener les internautes à faire leurs premiers pas dans le monde du multimédia?
        Il est tout à fait possible d’utiliser les MOOC en complément des universités, grâce à leurs cours gratuits. Mais il est légitime de se demander si les parcours sont vraiment plus intéressant qu’une formation en alternance, par exemple.
      </Paragraph>
    </ArticleBody>
    <ArticleFooter>
      <Conclusion>
        Selon Matthieu Nébra, les métiers ont énormément évolué ces dernières années, ce qui rend beaucoup de formations obsolètes. Un métier comme développeur Web demande à la personne d’apprendre durant sa formation, mais de continuer à apprendre après sa formation et de s’adapter en permanence aux nouvelles technologies. Pour un élève en université, l’enjeu est bel et bien “d’apprendre à apprendre” pour éviter d’être complètement dépassé par la suite en reposant sur ses acquis.
        C’est pour cela que des sites comme OpenClassrooms peuvent avoir une réelle valeur dans les prochaines années. En proposant des formations plus courtes, elles peuvent aider certaines personnes qui manquent de compétences et se mettre à jour sur le marché du travail.
      </Conclusion>
      <div className="flex flex-col text-sm my-12 pt-12 items-end justify-end justify-items-end">
        <div className="font-hairline">Novembre 2016</div>
        <div>écrit par Mavillaz Rémi</div>
      </div>
    </ArticleFooter>
  </ArticleLayout>
)

export default InternetANewWayToLearn;
