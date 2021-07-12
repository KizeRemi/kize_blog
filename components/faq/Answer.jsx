import React from "react";
import { node } from "prop-types";
import { Disclosure } from '@headlessui/react';

import Emoji from "../Emoji";

const Answer = ({ children }) => (
  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
    <Emoji emoji="me" />{children}
  </Disclosure.Panel>
);

Answer.propTypes = {
  children: node.isRequired,
};

export default Answer;