import Image from 'next/image';

export default function Home() {
  const link =
    'px-4 py-2 bg-blue-400 rounded-md text-black/75 hover:bg-white hover:scale-125';
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div className='w-screen h-screen flex items-center justify-center gap-10 text-xl'>
        <a href='/pokedex' className={link}>
          <h2>Pokedex</h2>
        </a>
        <a href='/search' className={link}>
          <h2>Search</h2>
        </a>
        <a href='/favorites' className={link}>
          <h2>Favorites</h2>
        </a>
      </div>
    </main>
  );
}
