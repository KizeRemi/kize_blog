import React from "react";
import { node } from "prop-types";
import { Disclosure } from '@headlessui/react';

import Emoji from "../Emoji";

const Answer = ({ children }) => (
  <Disclosure.Panel className="mt-4 sm:px-4 sm:text-lg md:text-normal text-gray-500">
    <Emoji emoji="me" />{children}
  </Disclosure.Panel>
);

Answer.propTypes = {
  children: node.isRequired,
};

export default Answer;