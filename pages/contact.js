import React from 'react'
import Head from 'next/head'

import STACKS_LIST from '../constants/stacks';
import StackCard from '../components/StackCard';
import MISSIONS_LIST from '../constants/missions';
import MissionCard from '../components/MissionCard';
import Achievement from '../components/Achievement';

import { PRO_INFORMATIONS, ACHIEVEMENTS } from '../constants/professional';
import { Answer, Question } from '../components/faq';
import { Disclosure } from '@headlessui/react';
import Emoji from '../components/Emoji';

const Contact= () => (
  <div className="my-20 px-2 md:px-0 bg-white container mx-auto">
    <Head>
      <title>Mavillaz Rémi - Informations professionnelle - CV - Projets</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <h2 class="container mx-auto text-base text-center my-6 leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Page professionnelle</h2>
    <section className="bg-white shadow overflow-hidden sm:rounded-lg container mx-auto">
      <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Informations
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          Retrouvez ici toutes les informations me concernant.
        </p>
      </div>
      <div>
        <dl>
          {PRO_INFORMATIONS.map((information, index) => (
            <div className={`${index % 2 ? 'bg-gray-100' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
              <dt class="text-sm leading-5 font-medium text-gray-500">
                {information.title}
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {information.value}
              </dd>
            </div>
          ))}
          <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm leading-5 font-medium text-gray-500">
              Documents
            </dt>
            <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              <ul class="border border-gray-200 rounded-md">
                <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
                  <div class="w-0 flex-1 flex items-center">
                    <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                    </svg>
                    <span class="ml-2 flex-1 w-0 truncate">
                      mavillaz_remi.cv.pdf
                    </span>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </section>
    <section className="bg-white w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
      <h2 class="text-base text-center my-6 leading-6 text-indigo-600 font-semibold tracking-wide uppercase">F.A.Q.</h2>
      <div className="w-full mx-auto rounded-2xl">
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Question open={open}> Peux-tu te présenter rapidement?</Question>
              <Answer>
                Je m’appelle Rémi, j’ai 31 ans et je vis à Rueil-Malmaison dans les Hauts-de-Seine avec ma Shiba inu qui me suit partout.
                J'aime les randonnées en forêt, montagne et faire la fête, toujours partant pour aller boire un verre !<br /><br />

                Passioné de jeux vidéos depuis mon enfance mais aussi par le code, je créé des applications web depuis quelques années maintenant.
              </Answer>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-6" defaultOpen>
          {({ open }) => (
            <>
              <Question open={open}>As tu une passion en dehors du développement?</Question>
              <Answer>
                Oui, je m'intéresse énormément aux animaux et notamment les chiens que j'adore (mais j'ai un peu peur des chats !).
                J'aime beaucoup promener jouer avec les chiens, m'occuper d'eux et étudier les différentes races. Mon job idéal à terme est de pouvoir allier développement web et animaux de compagnie.<br /><br />

                Je suis aussi un grand fan de jeux vidéos, ayant baigné dans cet univers depuis mon enfance, grâce à mes grands-parents qui sont des gamers !
                J'ai néanmoins tronqué pas mal de temps dédié aux jeux vidéos pour mon 1ere passion désormais, mais je continue de regarder de temps en temps l'e-sport.<br />
              </Answer>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-6" defaultOpen>
          {({ open }) => (
            <>
              <Question open={open}>Pour quel entreprise travailles-tu actuellement?</Question>
              <Answer>
                Je travaille chez Eleven Labs, à Paris dans le 16ème arrondissement, une ESN (entreprise au service du numérique) spécialisé dans le développement web sur différents langages (principalement Javascript, PHP) mais aussi experte dans le devOps, Product Owner, Architecture.<br />
                En tant que consultant Javascript, je suis emmené à intervenir directement chez le client ou dans les locaux d'Eleven Labs dans le cadre d'un projet développé sur-mesure pour un client.
              </Answer>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-6" defaultOpen>
          {({ open }) => (
            <>
              <Question open={open}>Es-tu ouvert au recrutement?</Question>
              <Answer>
                J'ai tendance à chercher et m'intéresser moi-même aux entreprises donc je ne souhaite pas recevoir d'offres.<Emoji emoji="nop" /><br />
                Je suis néanmoins à la recherche d'une école où je pourrais intervenir et partager mes connaissances dans le développement web (principalement Javascript et framework qui sont liés).
              </Answer>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-6" defaultOpen>
          {({ open }) => (
            <>
              <Question open={open}>Comment te contacter rapidement?</Question>
              <Answer>
                Soit par mail <a href="mailto:remi.mavillaz@live.fr" className="text-purple-500 underline">remi.mavillaz@live.fr</a>, soit via mon <a href="https://www.linkedin.com/in/remi-mavillaz" className="text-purple-500 underline">Linkedin</a>.<br />
                Mais comme je le disais, <b>je ne souhaite pas recevoir d'offres</b> donc inutile de perdre du temps et de me spammer pour ça. En revanche, si vous êtes une école et que vous cherchez des intervenants, n'hésites pas à mon contacter pour en discuter.
              </Answer>
            </>
          )}
        </Disclosure>
      </div>
    </section>
    <section className="text-gray-600 py-8">
      <h2 className="text-base text-center my-6 leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Technos préférés</h2>
      <div className="flex flex-wrap">
        {STACKS_LIST.map(stack => <StackCard {...stack} />)}
      </div>
    </section>
    <section class="containermx-auto py-8">
      <h2 class="text-base text-center my-12 leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Expériences</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        {MISSIONS_LIST.map(({ description1, description2, ...mission })=> (
          <MissionCard {...mission}>
            {description1}
            <br /><br />
            {description2}
          </MissionCard>
        ))}
      </div>
      <h2 class="text-base text-center my-12 leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Hauts faits</h2>
      <div class="flex flex-row flex-wrap md:flexnowrap md:flex-row justify-around">
        {ACHIEVEMENTS.map((achievement, index) => <Achievement start={index % 2} {...achievement} />)}
      </div>
    </section>
  </div>
)

export default Contact
