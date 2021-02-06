import React from 'react'
import Head from 'next/head'
import Paragraph from '../../components/Paragraph';
import Introduction from '../../components/Introduction';
import Conclusion from '../../components/Conclusion';
import Title from '../../components/Title';
import ArticleHeader from '../../components/ArticleHeader';
import ArticleBody from '../../components/ArticleBody';
import ArticleFooter from '../../components/ArticleFooter';
import ArticleLayout from '../../components/ArticleLayout';

const ImportanceOfTypography = () => (
  <ArticleLayout>
    <Head>
      <title>L’importance de la typographie </title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Title centered as="h2" weight="thin" uppercase>BILLET DE BLOG</Title>
    <ArticleHeader>
      <Title centered size="huge" as="h1" color="black" uppercase>L’importance de la typographie </Title>
      <Introduction>
      Avec le web, les marques font désormais très attention à leur typographie, pourquoi cet intérêt si soudain? Les écrans ont-ils influé sur la typographie? Quel sont les enjeux en terme de marketing?
      </Introduction>
    </ArticleHeader>
    <ArticleBody>
      <Paragraph>
        Le web design se voit souvent heurté par plusieurs problématiques que ce soit les couleurs, les images, la lisibilité mais il y à un élément majeur que l’on tend parfois à oublier : la typographie. Jusqu’alors, seules les marques de luxe s’intéressaient véritablement à la typographie tandis que les marques plus lambda se contentaient de logos et d’images bariolés.
        Cette tendance s’efface depuis quelques années et les marques font désormais très attention à leur typographie, pourquoi cet intérêt si soudain? Les écrans ont-ils influé sur la typographie? Quel sont les enjeux en terme de marketing?
      </Paragraph>
      <Title as="h3" weight="semibold" uppercase>1.La perception du message par le lecteur</Title>
      <Paragraph>
        Avant toute chose, il est important de noter que, selon la typographie, le message va être perçu de différentes façons par le lecteur. Elle sert à mettre en valeur les mots et les textes, par le choix des caractères, la mise en page, les tailles. En soi, une véritable mise en scène. C’est une forme d’expression artistique et un outil de design à part entière très utilisée dans l’édition, l’affiche et qui a un rôle majeur pour les logos.
        À l’oral, l’humain a pour habitude de faire passer un message grâce à l’intonation de la voix. Cela est bien évidemment différent à l’écrit et le jeu de la typographie va donc influencer le lecteur.
      </Paragraph>
      <Paragraph>
        Sur la première image, on constate que le mot “Attention”, qui est pourtant un mot assez fort, est “atténué” grâce à la typographie. On ne sent pas un réel danger contrairement à la 2ème image qui met réellement en garde le lecteur. 
      </Paragraph>
      <Title as="h3" weight="semibold" uppercase>2.La typographie sur les écrans</Title>
      <Paragraph>
        Depuis l'avènement des smartphones et des tablettes, les designers se sont confrontés à un problème de taille: comment rendre les caractères visible quel que soit la taille de l’écran ? Il existe 2 typographies avec serif et sans serif. C’est à dire avec ou sans pattes.
        Comme vous pouvez le constater avec les exemples ci-dessus, les typographies avec serif, sont beaucoup plus difficile à lire sur les écrans contrairement au sans serif. Elle est donc réservée la plupart du temps pour des documents imprimés tandis que les sans serif seront plus utilisé pour le web car la lecture est différente avec des mots qu’il faut mettre en valeur.
      </Paragraph>
      <Paragraph>
        Quoi de mieux que donner un exemple avec Google. L’entreprise à mis du temps à changer la typographie de son logo mais pourtant, depuis 2015, celui-ci arbore enfin un design épuré comme Apple, Windows, etc. Exit les couleurs flashy, les effets d’ombres, 3D, et bienvenue à la simplicité !
      </Paragraph>
      <Title as="h3" weight="semibold" uppercase>3.Le choix de la typographie pour le marketing</Title>
      <Paragraph>
        Comme vu précédemment, nous avons constaté que la typographie influait non seulement sur l’émotion des lecteurs mais aussi qu’elle doit être lisible facilement sur n’importe quel support. En marketing, il est donc indispensable de choisir sa typographie correctement afin de faire passer le bon message aux lecteurs.
      </Paragraph>
      <Paragraph>
        Une entreprise qui veut lancer sa marque doit se rendre compte que son logo va apparaître sur plusieurs supports. Avec l’exemple de Google, le logo est beaucoup plus perceptible sur un smartphone depuis 2015, contrairement à celui de 2000.
      </Paragraph>
      <Paragraph>
        Un design épuré ne suffit pas à lui seul donner une image à la marque. Plus haut, la 1ere typographie pour Apple symbolise la modernité, la rigueur et le design. La 2eme typographie est en revanche beaucoup plus enfantin et ludique. L’entreprise doit donc faire extrêmement attention au message qu’il veut faire passer et surtout, quel public viser.
      </Paragraph>
    </ArticleBody>
    <ArticleFooter>
      <Conclusion>
        Ce n’est un secret pour personne, l’univers digitale connaît une évolution de plus en plus rapide, les polices d’écriture ont pris une importance primordiale. À la fois commercial et esthétique, son impact est très important contrairement à ce que l’on pourrait penser. Les développeurs web et les webdesigners doivent porter une attention particulière au type d’écriture utilisé pour être en concordance avec l'image de l’entreprise. La typographie a finalement un rôle qui pourrait être indirectement économique, puisqu’elle influe directement sur la perception de la marque et sur celle de ses services et produits.
      </Conclusion>
      <div className="flex flex-col text-sm my-12 pt-12 items-end justify-end justify-items-end">
        <div className="font-hairline">Février 2017</div>
        <div>écrit par Mavillaz Rémi</div>
      </div>
    </ArticleFooter>
  </ArticleLayout>
)

export default ImportanceOfTypography;
