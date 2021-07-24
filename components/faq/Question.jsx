import React from "react";
import { bool, node } from "prop-types";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import Emoji from "../Emoji";

const Question = ({ open, children }) => (
  <Disclosure.Button
    className="flex justify-between items-center w-full px-4 py-2 text-lg sm:text-xl md:text-2xl font-bold text-left text-purple-700 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
  >
    <h3 className="flex items-center"><Emoji emoji="robot" />{children}</h3>
    <ChevronUpIcon className={`${ open ? 'transform rotate-180' : '' } w-8 h-8 text-purple-500`} />
  </Disclosure.Button>
);

Question.defaultProps = {
  open: false,
};

Question.propTypes = {
  children: node.isRequired,
  open: bool,
};

export default Question;