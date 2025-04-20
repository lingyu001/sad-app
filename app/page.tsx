import dynamic from 'next/dynamic';

// Create a client component wrapper
const HomeClient = dynamic(() => import('./components/HomeClient'), { 
  loading: () => <p>Loading...</p>
});

export default function Home() {
  return <HomeClient />;
} 