import React from 'react';
import { oneOf } from 'prop-types';

const EMOJIS_MAPS = {
  robot: <>🤖</>,
  me: <>👨🏻‍💻</>,
  nop: <>🙅🏻‍♂️</>,
};

const Emoji = ({ emoji }) => (
  <span className="text-lg mr-2">{EMOJIS_MAPS[emoji]}</span>
);

Emoji.propTypes = {
  emoji: oneOf(Object.keys([EMOJIS_MAPS])).isRequired,
};

export default Emoji;
