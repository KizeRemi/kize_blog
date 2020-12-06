import React from 'react'
import Head from 'next/head'
import STACKS_LIST from '../constants/stacks';
import StackCard from '../components/StackCard';
import MISSIONS_LIST from '../constants/missions';
import MissionCard from '../components/MissionCard';
import Achievement from '../components/Achievement';

const PRO_INFORMATIONS = [
  { title: 'Nom complet', value: 'Mavillaz Rémi' },
  { title: 'Métier', value: 'Développeur web' },
  { title: 'Société', value: 'Eleven Labs' },
  { title: 'Adresse email', value: 'remi.mavillaz@live.fr' },
  { title: 'A propos', value: "Développeur web a forte appétence et très orienté produit. J'aime les codes simples" },
]

const ACHIEVEMENTS = [
  { value: 7, label: 'Articles publiés' },
  { value: 8, label: 'Missions réussies' },
  { value: 2, label: 'certifications' },
  { value: 5, label: <>Années<br />d'experiences</> },
]

const Contact= () => (
  <div>
    <Head>
      <title>Mavillaz Rémi - Informations professionnelle - CV - Projets</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <h2 class="container mx-auto text-base text-center my-6 leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Page professionnelle</h2>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg container mx-auto">
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
    </div>
    <div class="container px-2 md:px-0 mx-auto py-12">
      <h2 class="text-base text-center my-6 leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Technos préférés</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {STACKS_LIST.map(stack => <StackCard {...stack} />)}
      </div>
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
    </div>
  </div>
)

export default Contact
