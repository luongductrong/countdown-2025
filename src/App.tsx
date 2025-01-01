import { lazy, Suspense } from 'react';
import Loading from './components/Loading';

const LazyPage = lazy(() => import('./Page'));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyPage />
    </Suspense>
  );
}
