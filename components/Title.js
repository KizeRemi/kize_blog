import React from 'react';
import cn from 'classnames';

const sizes = {
  huge: 'text-4xl',
  big: 'text-2xl',
};

const colors = {
  gray: 'text-gray-600',
  darkGray: 'text-gray-800',
  black: 'text-gray-900'
};

const weights = {
  medium: 'font-medium',
  thin: 'font-thin',
  semibold: 'font-semibold'
}

const Title = ({ as: Html, children, size, uppercase, centered, weight, color }) => {
  return (
    <Html className={cn('my-1 pb-4 tracking-widest', colors[color], weights[weight], sizes[size], { 'text-center': centered, uppercase })}>
      {children}
    </Html>
  )
};

Title.defaultProps = {
  size: 'normal',
  weight: 'medium',
  color: 'black'
};

export default Title;
