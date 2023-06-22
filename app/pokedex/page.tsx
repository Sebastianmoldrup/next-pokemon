import Navigation from '../components/Navigation';

export default function Home() {
  const link =
    'px-4 py-2 bg-blue-400 rounded-md text-black/75 hover:bg-white hover:scale-125';
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Navigation />
    </main>
  );
}
