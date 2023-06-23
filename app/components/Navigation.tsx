'use client';

export default function Navigation() {
  const link =
    'px-2 py-1 bg-white rounded-md text-black hover:bg-black hover:text-white hover:scale-110';
  return (
    <nav className='top-0 left-0 w-full px-8 py-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-bold'>
          <a href='/'>Pokemon</a>
        </h2>
        <div className='flex items-center justify-center gap-10'>
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
      </div>
    </nav>
  );
}
