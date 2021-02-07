import React from 'react';
import Link from 'next/link';
import { string, node } from 'prop-types';

const ButtonLink = ({ children, href }) => (
  <Link href={href}>
    <a className="text-gray-900 border border-gray-900 hover:text-white hover:bg-gray-900 py-2 px-8">
      {children}
    </a>
  </Link>
);

ButtonLink.propTypes = {
  children: node.isRequired,
  href: string.isRequired,
};

export default ButtonLink;
