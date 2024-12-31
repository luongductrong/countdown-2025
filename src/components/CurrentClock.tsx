import { format } from 'date-fns';

export default function CurrentClock({ currentTime }: { currentTime: Date }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl mb-2">Current Time</h2>
      <div className="text-3xl md:text-5xl animate-bounce">{format(currentTime, 'yyyy-MM-dd HH:mm:ss')}</div>
    </div>
  );
}
