import { useEffect, useState } from 'react';
import CurrentClock from './components/CurrentClock';
import CountdownClock from './components/CountDownClock';
import mewmew from './assets/mewmew.webp';

export default function Page() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main
      className={`min-h-screen ${isLandscape ? 'bg-landscape' : 'bg-portrait'}
      bg-cover bg-center flex flex-col items-center justify-center p-4 text-white font-vt323 max-w-screen max-h-screen`}
    >
      <div className="bg-black bg-opacity-50 min-w-[90%] p-6 rounded-lg shadow-lg">
        <CurrentClock currentTime={currentTime} />
        <CountdownClock targetDate={new Date('2025-01-01T00:00:01')} />
      </div>
      <div className="fixed bottom-4 left-4">
        <img src={mewmew} alt="Mewwwwww" className="h-28" />
      </div>
      <div className="fixed top-4 right-4">
        <img src={mewmew} alt="Mewwwwww" className="h-28" />
      </div>
    </main>
  );
}
