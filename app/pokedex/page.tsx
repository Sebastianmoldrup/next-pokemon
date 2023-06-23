import Navigation from '../components/Navigation';
import Pokelist from './Pokelist';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Navigation />
      <Pokelist />
    </main>
  );
}
