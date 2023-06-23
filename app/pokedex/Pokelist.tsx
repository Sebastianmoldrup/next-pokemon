'use client';
import { useState } from 'react';
import Dropdown from '../components/Dropdown';

export default function Pokelist() {
  const [amount, setAmount] = useState(50);
  console.log('list', amount);
  const pokeArr = [];
  const getPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${''}`;
  };
  return (
    <div>
      <div className='flex flex-wrap gap-4 py-4'>
        <button className='bg-blue-700 px-4 py-2 rounded-md hover:scale-110 hover:text-blue-700 hover:bg-white h-[40px]'>
          Load {amount} more
        </button>
        <Dropdown amount={amount} setAmount={setAmount} />
      </div>
    </div>
  );
}
