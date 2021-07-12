import React from "react";
import { bool, node } from "prop-types";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import Emoji from "../Emoji";

const Question = ({ open, children }) => (
  <Disclosure.Button
    className="flex justify-between items-center w-full px-4 py-2 text-sm font-bold text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
  >
    <span className="flex items-center"><Emoji emoji="robot" />{children}</span>
    <ChevronUpIcon className={`${ open ? 'transform rotate-180' : '' } w-5 h-5 text-purple-500`} />
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