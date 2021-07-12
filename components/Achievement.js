import React from 'react';
import { bool, number, string } from 'prop-types';

const Achievement = ({ start, label, value }) => (
  <div className={`${start ? "items-start" : "md:items-end"} h-48 md:h-64 flex`}>
    <div className="border-8 border-gray-200 rounded-full text-center h-40 w-40 flex flex-col justify-start items-center">
      <div className="text-3xl mt-6 text-gray-600">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  </div>
);

Achievement.defaultProps = {
  start: false,
};

Achievement.propTypes = {
  value: number.isRequired,
  label: string.isRequired,
  start: bool,
};

export default Achievement;
