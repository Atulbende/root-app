import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const AuthApp = lazy(() => import('auth/App'));
const HomeApp = lazy(() => import('home/App'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Suspense fallback="Loading..."><AuthApp /></Suspense>} />
        <Route path="/" element={<Suspense fallback="Loading..."><HomeApp /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
