import React, { Fragment, useState } from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const Select = ({ options, onChange, defaultOptions, disabled }) => {
  const [selected, setSelected] = useState(defaultOptions || options[0])

  return (
      <Listbox disabled={disabled} value={selected} onChange={(option) => {
        setSelected(option);
        onChange(option);
      }}>
        <div className="relative mt-1 z-10">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  className={({ active }) =>
                    `${active ? 'text-gray-900 bg-gray-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? 'text-amber-600' : 'text-amber-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
  );
}

Select.defaultProps = {
  onChange: () => {},
  disabled: false,
};

Select.propTypes = {
  options: arrayOf(shape({
    name: string.isRequired,
    id: string.isRequired,
  })),
  defaultOption: shape({
    name: string.isRequired,
    id: string.isRequired,
  }),
  onChange: func,
  disabled: bool,
};

export default Select;
