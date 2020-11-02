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

const ChangeCompanyDuringWorkStudy = () => (
<ArticleLayout>
    <Head>
      <title>Retour d'experience: Changer d'entreprise durant l'alternance</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Title centered as="h2" weight="thin" uppercase>BILLET DE BLOG</Title>
    <ArticleHeader>
      <Title centered size="huge" as="h1" color="black" uppercase>Retour d'experience: Changer d'entreprise durant l'alternance</Title>
      <Introduction>
        Cela fait maintenant 2 ans et demi que j'ai repris les études en alternance. Je me suis inscrit à l'université de Cergy Pontoise, filière développement web et mobile. Après avoir été accepté, j'ai dû faire face à cette fameuse période où il faut absolument trouver une entreprise avant la rentrée.
        Comme une sorte de compte à rebours stressant, je me suis mis à chercher des entreprises, peu importe si elle me convenait ou pas. Sans le savoir, j'ai agi d'une très mauvaise manière.
      </Introduction>
    </ArticleHeader>
    <ArticleBody>
      <Paragraph>
        En tant que développeur, nous avons la chance d'être dans un domaine en plein expansion. Linkedin, lesjeudis, viadeo, monster, et j'en passe; Il n'y a pas vraiment d'excuses pour ne pas postuler. Je me suis donc inscrit un peu partout et j'ai remarqué qu'avec un profil bien remplit, on se fait contacter assez rapidement.
        Cela a été mon cas, ce qui a débouché sur des entretiens rapidement. Ceux-ci s'étant très bien passé, j'ai été recruté en 1 mois. Un grand soulagement, et une certaine fierté s'installe qui m'a permis d'être serein pour l'année à venir !
      </Paragraph>
      <Title as="h3" weight="semibold" uppercase>1.Ne jamais rester dans sa zone de confort</Title>
      <Paragraph>
        Bien que mon intégration en entreprise fut une réussite, au fil des mois, je faisais mon travail, je faisais du Symfony mais il y avait quelque chose qui manquait et je ne savais pas quoi. Ce qui étonnant alors que sur le papier, l'entreprise correspondait à ce que je cherchais. J'ai finalement laissé le temps passer, malgré des pèriodes un peu ennuyeuses. Finalement, j'ai réussi mon année, j'ai tout de même appris pas mal de choses et j'ai décidé de poursuivre mes études jusqu'au Bac+5. Dans la même entreprise.
        Durant ma 4ème année, il est arrivé un moment où je n'apprenais plus grand chose en entreprise et je me contentais de faire ce que je savais. Etonnant après seulement 1 an. Un sentiment de répétition s'est installé et un moment, un très bon ami à moi m'a dit :
      </Paragraph>
      <Paragraph>
        "S'il arrive un moment dans ton entreprise où tu n'apprends plus, c'est qu'il est temps de changer."
      </Paragraph>
      <Paragraph>
        Cette phrase m'a fait beaucoup réfléchir car je me suis vraiment senti concerné. En discutant avec bon nombre de développeurs,je me suis fait une liste de questions qui permet de déterminer si une entreprise favorise votre épanouissement. Je vous invite vivement à vous les poser:
      </Paragraph>
      <Paragraph>
        Dans mon cas, la plupart des réponses étaient négatives. Je sais que cela peut paraitre bête mais pourtant bon nombre d'entreprises sont dans ce cas et prennent des alternants uniquement par rentabilité.
        Sachez qu'il existe des entreprises qui favorisent l'apprentissage de leurs alternants plutôt que d'y voir un moyen de recruter quelqu'un de rentable sur le moment. Pourtant, je n'ai absolument rien à reprocher à mon ancienne entreprise que je côtoie toujours aujourd'hui.
        Elle a sa façon de faire depuis des années mais je me suis rendu compte qu'on avait pas du tout le même état d'esprit.
      </Paragraph>
    </ArticleBody>
    <ArticleFooter>
      <Conclusion>
        Vous l'aurez compris, j'ai fini par changer en passant par des négociations, un accord à l'amiable et une rupture du contrat. Ce n'est certes pas un passage très joyeux mais à partir du moment où vous trouverez une entreprise qui VOUS correspond en tant qu'alternant, vous y gagnerez clairement dans le futur.
        Si vous êtes dans mon cas, je ne peux que vous pousser à en faire de même. Une pèriode de formation, c'est du temps consacré à votre apprentissage, et pas uniquement lorsque vous êtes à l'école. Faites vous plaisir, apprenez des nouvelles choses et osez, c'est vraiment le meilleur moment pour le faire ! La phase de recherche d'entreprise est donc extrèmement importante, peut etre même encore plus pour un alternant qu'un employé alors ne la négligez pas !
      </Conclusion>
      <div className="flex flex-col text-sm my-12 pt-12 items-end justify-end justify-items-end">
        <div className="font-hairline">Novembre 2016</div>
        <div>écrit par Mavillaz Rémi</div>
      </div>
    </ArticleFooter>
  </ArticleLayout>
)

export default ChangeCompanyDuringWorkStudy;
