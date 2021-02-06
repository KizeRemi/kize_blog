import React from 'react';
import Link from 'next/link';
import { string } from 'prop-types';

const CallToAction = ({ title, subTitle, links }) => (
  <div className="container px-5 py-20 mx-auto flex items-center md:flex-row flex-col">
    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h4 className="text-sm text-gray-600 tracking-widest font-medium title-font mb-1 uppercase">{subTitle}</h4>
      <h3 className="md:text-3xl text-2xl font-medium title-font text-gray-900">{title}</h3>
    </div>
    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      {links.map(link => (
        <Link href={link.href}>
          <a className="border-2 inline-flex py-3 px-5 w-44 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <span className="flex items-start flex-col leading-none uppercase">
              <span className="text-xs text-gray-600 mb-1 font-medium">{link.subLabel}</span>
              <span className="title-font font-bold">{link.label}</span>
            </span>
          </a>
        </Link>
      ))}
    </div>
  </div>
);

CallToAction.propTypes = {
  title: string,
  subTitle: string,
};

export default CallToAction;
