import { useEffect, useState } from 'react';

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export default function CountdownClock({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  function calculateTimeLeft(): TimeLeft | null {
    const difference = +targetDate - +new Date();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = timeLeft
    ? Object.keys(timeLeft).map((interval) => {
        const value = timeLeft[interval as keyof TimeLeft];
        if (!value) {
          return null;
        }

        return (
          <span key={interval} className="mx-2">
            {value} {interval}{' '}
          </span>
        );
      })
    : [];

  return (
    <div className="text-center">
      <h2 className="text-2xl mb-2">Countdown to 2025</h2>
      <div className="text-3xl md:text-5xl animate-pulse">
        {timerComponents.length ? timerComponents : <span>Happy New Year!</span>}
      </div>
    </div>
  );
}
