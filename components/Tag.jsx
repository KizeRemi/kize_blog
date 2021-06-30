import React from 'react';
import { node } from 'prop-types';

const Tag = ({ children }) => (
  <div class="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
    <span>{children}</span>
  </div>
);

Tag.propTypes = {
  children: node,
};

export default Tag;
