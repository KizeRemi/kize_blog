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

const CustomerExperienceKeyToSuccess = () => (
  <ArticleLayout>
    <Head>
      <title>Le Customer Experience, la clé de la réussite?</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Title centered as="h2" weight="thin" uppercase>BILLET DE BLOG</Title>
    <ArticleHeader>
      <Title centered size="huge" as="h1" color="black" uppercase>Le Customer Experience, la clé de la réussite?</Title>
      <Introduction>
        Amazon est devenu leader du commerce électronique grâce à ce que l’on appelle “L'expérience utilisateur”. Mais qu’est-ce que réellement l'expérience utilisateur (ou CX en anglais) et comment une jeune entreprise peut adopter cette pratique?
      </Introduction>
    </ArticleHeader>
    <ArticleBody>
      <Paragraph>
        Le CX, la clé de la réussite? Avec l’omniprésence du digital dans le monde, de nombreuses entreprises ont pu utiliser les technologies d’aujourd’hui pour mieux comprendre leurs utilisateurs. Amazon a ainsi pu devenir l’un des leaders de commerce électronique grâce à ce que l’on appelle “L'expérience utilisateur”. Mais qu’est-ce que réellement l'expérience utilisateur (ou CX en anglais) et comment une jeune entreprise peut adopter cette pratique?
      </Paragraph>
      <Title as="h3" weight="semibold" uppercase>1.Qu’est-ce que l'expérience utilisateur?</Title>
      <Paragraph>
        L'expérience utilisateur est définie par tous les interactions possibles entre les clients et l’entreprise. L'interaction n’est pas seulement physique mais peut être sous différentes formes tel que la culture, la découvertes, les achats, le service, etc. Il est donc de plus en plus courant, voir indispensable, que des entreprises investissent dans l'expérience client. Lorsqu’un client achète un produit d’une marque, si celui-ci se sent satisfait, il sera potentiellement un client loyal qui fera de nouveaux achats et qui n’hésitera pas à recommander la marque.
        Tout cela peut paraître être du “bon sens” mais l’arrivée du web fait qu’une entreprise peut communiquer beaucoup plus facilement avec ses utilisateurs et il est important de ne pas faire d’erreurs Ainsi une client est heureux avec une marque, plus il sera susceptible de rester. Par conséquent, une entreprise avec une mauvaise gestion des utilisateurs sera plus exposé à perdre leurs fidélités.
      </Paragraph>
      <Title as="h3" weight="semibold" uppercase>2.L'expérience client n’est pas le service client</Title>
      <Paragraph>
        Au premier abord, les 2 termes peuvent paraître très similaire mais il n’en est rien, puisque le service client n’est en réalité qu’une petite partie de l'expérience client ! Par exemple, l’un des premiers contacts du client avec une entreprise est très souvent avec un employé. Cet employé va alors avoir l’opportunité de délivrer un service au client, c’est ce qu’on appelle le service client.
        L'expérience va beaucoup plus loin, puisque par exemple, si un client commande un billet de train sur son téléphone, puis qu’il le reçoit très tôt et que le train est bien entretenu, alors il s’agit d’une bonne experience client.
      </Paragraph>
      <Paragraph>
        Comme cité en début de cet article, les entreprises ont de nouveaux moyens pour se connecter avec leurs utilisateurs afin de mieux de les comprendre. Par exemple, grâce aux historiques des achats ou de navigation, il est possible de prédire les besoins du client, ce qui donne un sérieux avantage à une entreprise qui sera proactif et en avance comparé à la concurrence.
        Le CX apporte donc de nouvelles façons de renforcer la relation entre l’entreprise et ses clients.
      </Paragraph>
      <Title as="h3" weight="semibold" uppercase>3.Exemples de bonnes stratégies d'expériences clients</Title>
      <Paragraph>
        Comprendre qui sont vos clients Si une entreprise veut vraiment comprendre les besoins des clients, ils doivent être en mesure d’affronter des situations auxquelles vos clients sont confrontés. Il est donc important de créer des personnages “fictifs”, ou persona, qui vont alors vivre une expérience client avec l’entreprise. Ce personnage va suivre une ligne directive d’un point A à B et l’entreprise va étudier quels sont les difficultés potentiels qu’un client pourrait être confronté. Le service client sera mieux préparé aux types de clients auxquels ils ont affaire et de mieux les comprendre.
      </Paragraph>
      <Paragraph>“Ce n'est pas ce que vous dites; C'est comment vous le dites”</Paragraph>
      <Paragraph>
        Les meilleurs expériences clients sont réalisées lorsqu’une connexion émotionnelle s’est créée avec un client. Le journal “Costumer Research” estime que 50% de l'expérience client est basée sur l’émotion puisque c’est celle-ci qui influence les attitudes et les décisions d’un client. Selon “Harvard Business Review”, les clients émotionnellement engagés sont: 3 fois susceptibles de recommander la marque 3 fois susceptible d’acheter à nouveau un produit moins regardant sur le prix de vente
      </Paragraph>
      <Paragraph>
        Retour client en temps réel Il existe de nombreux moyens d’avoir des retours sur l'expérience client. Chat en ligne, SMS, Email, commentaires, il est important de recueillir un maximum d’informations sur ses clients puisqu’elles permettent à l’entreprise de les analyser afin d’améliorer les points négatifs, mais aussi positifs .
      </Paragraph>
      <Paragraph>
        Pour donner un exemple concret, des sites e-commerce proposent désormais un système de tchat en ligne afin de répondre directement au potentiel acheteur si celui ci à des questions.
        On voit bien que la marque essaye de mettre le client en confiance avec des photos qui représentent les conseillers. Tout cela est chaleureux et ne peut qu’améliorer l'expérience du client en arrivant sur le site. En plus de cela, les conseillers peuvent remonter les différents problèmes qui interviennent souvent.
      </Paragraph>
    </ArticleBody>
    <ArticleFooter>
      <Conclusion>
        Depuis quelques années, les attentes des clients est de plus en plus élevées et le bouche-à-oreille n'a jamais été aussi important grâce au web. L'expérience client est un domaine qui nécessite de la réflexion, de l’investissement et ce, de manière continu. En mettant l'accent sur la stratégie de l'expérience client, les entreprises auront un impact positif sur la fidélisation de la clientèle, et donc des revenus accrus.
      </Conclusion>
      <div className="flex flex-col text-sm my-12 pt-12 items-end justify-end justify-items-end">
        <div className="font-hairline">Mai 2017</div>
        <div>écrit par Mavillaz Rémi</div>
      </div>
    </ArticleFooter>
  </ArticleLayout>
);

export default CustomerExperienceKeyToSuccess;
