import React from 'react'
import Head from 'next/head'
import Paragraph from '../../components/articles/Paragraph';
import Introduction from '../../components/articles/Introduction';
import Conclusion from '../../components//articles/Conclusion';
import Title from '../../components/Title';
import ArticleHeader from '../../components/articles/ArticleHeader';
import ArticleBody from '../../components/articles/ArticleBody';
import ArticleFooter from '../../components/articles/ArticleFooter';
import ArticleLayout from '../../components/articles/ArticleLayout';

const TechnologySolutionToHandicap = () => (
  <ArticleLayout>
    <Head>
      <title>La technologie, la solution à l’handicap?</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Title centered as="h2" weight="thin" uppercase>BILLET DE BLOG</Title>
    <ArticleHeader>
      <Title centered size="huge" as="h1" color="black" uppercase>La technologie, la solution à l’handicap?</Title>
      <Introduction>
        Depuis quelques années, de nombres scientifiques mettent en place des prototypes destinés aux handicapés afin d’améliorer leurs quotidiens.
        Les progrès sont nombreux mais ces solutions sont-elles complètement viables aujourd’hui ? Pas si sûr.
      </Introduction>
    </ArticleHeader>
    <ArticleBody>
      <Paragraph>
        Mercredi 14 Décembre, 19h, Paris. Damien Cottin et son équipe, nous proposent une conférence sur Visio-handicap, une société qui propose un soutien aux déficients visuels. Malgré une présentation confuse du projet en lui-même, nous pouvez admettre que certaines start-up veulent mettre à disposition des outils afin d’améliorer le quotidien des handicapés, ainsi que de les démocratiser. 
      </Paragraph>
      <Title as="h3" weight="semibold" uppercase>1.Donner l’espoir d’une vie normale.</Title>
      <Paragraph>
        Avec l’arrivé des objets connectés, de nombres sociétés proposent aux handicapés des moyens d’améliorer leurs quotidiens. Petit tour rapide des moyens les plus intéressantsinteressants.
      </Paragraph>
      <Paragraph>
        Une montre pour les personnes autistes
        Très simple d’utilisation, cet objet ressemblant très fortement à une montre permet aux personnes souffrant d’autisme, d’être alerté à différents moments de la journée des tâches quotidiennes (se laver, prendre le bus, etc).

        Un bracelet d'écholocalisation
        Ce bracelet, à l’état de prototype, permet aux malvoyants, de se repérer dans l’espace de la même manière que les chauve-souris, par exemple. L’objet envoie des ondes sonores et la détection de l’écho permettrait de se localiser. Les personnes aveugles l’utilisent déjà de manière naturelle, mais cette solution serait plus poussée avec des vibrations pour alerter d’un obstacle.
      </Paragraph>
      <Title as="h3" weight="semibold" uppercase>2.Des technologies trop difficiles d’accès</Title>
      <Paragraph>
        Pour mettre fin au handicap, il faudrait que toutes les personnes aient accès à ces solutions. Ce qui est encore très loin d’être le cas. LesDe nombreux médias ne rapportent que très peu les différentes avancées technologiques, ce qui est fort dommageable.
        De plus, certaines sont extrêmement onéreuses comme les exosquelettes ce qui rend leur utilisation impossible pour le commun des mortels (environ 50 000 Euros).
      </Paragraph>
      <Paragraph>
        Certaines prothèses ou appareils technologique reste contraignante, en effet, leur utilisation demande très souvent une aide technique et psychologique. Ils doivent donc être pris en charge régulièrement afin de vérifier les personnes utilisent ces outils dans de bonnes conditions. Les pays les plus démunis ne peuvent même pas espérer avoir recours à ces technologies…
      </Paragraph>
      <Title as="h3" weight="semibold" uppercase>3.Comment résoudre ce problème ?</Title>
      <Paragraph>
        Il est aujourd’hui encore très difficile le problème du coût mais il commence à émerger des nouvelles solutions à ce niveau-là grâce à l’impression 3D. En effet, certaines start-ups mettent à disposition des codes “open source” qui permet de réaliser des prothèses à bas coût. Avec le bon paramétrage, il est alors possible de produire des prothèses adaptées à la morphologie du patient.
      </Paragraph>
    </ArticleBody>
    <ArticleFooter>
      <Conclusion>
        Difficile d’affirmer que les technologies solutionnent réellement les différents handicap tant le prix est parfois exorbitant et très souvent à l’état de prototype. Ce qu’on peut néanmoins confirmer, c’est que certaines sociétés produisent des applications ou des objet connectés afin d’améliorer le quotidien des handicapés.
        Ceux-ci reste très abordable et facilement utilisable, même si cela ne “guérit” pas l’handicap en soi. Les chercheurs ont été encore beaucoup de travail mais il y a tout même beaucoup d’espoir pour que cela se concrétise dans les prochaines années.
      </Conclusion>
      <div className="flex flex-col text-sm my-12 pt-12 items-end justify-end justify-items-end">
        <div className="font-hairline">Décembre 2016</div>
        <div>écrit par Mavillaz Rémi</div>
      </div>
    </ArticleFooter>
  </ArticleLayout>
)

export default TechnologySolutionToHandicap;
