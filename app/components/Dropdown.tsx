'use client';
import { useState, useEffect } from 'react';

export default function Dropdown({
  amount,
  setAmount,
}: {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='inline-flex items-center rounded-lg bg-blue-700 justify-center px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        type='button'
        onClick={() => (!open ? setOpen(true) : setOpen(false))}
        onBlur={() => setOpen(false)}
      >
        Select{' '}
        <svg
          className='ml-2 h-4 w-4'
          aria-hidden='true'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'
          ></path>
        </svg>
      </button>

      <div
        className={`z-10 ${
          open ? '' : 'hidden'
        } divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
      >
        <ul
          className='py-2 text-sm text-gray-700 dark:text-gray-200'
          aria-labelledby='dropdownDefaultButton'
        >
          <li>
            <a
              href='#'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={() => {
                setAmount(25);
                setOpen(false);
              }}
            >
              25
            </a>
          </li>
          <li>
            <a
              href='#'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={() => {
                setAmount(50);
                setOpen(false);
              }}
            >
              50
            </a>
          </li>
          <li>
            <a
              href='#'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={() => {
                setAmount(75);
                setOpen(false);
              }}
            >
              75
            </a>
          </li>
          <li>
            <a
              href='#'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={() => {
                setAmount(100);
                setOpen(false);
              }}
            >
              100
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
