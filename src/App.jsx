import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Toaster } from 'sonner';

const Login = lazy(() => import('login/Login'));
const Home = lazy(() => import('home/Home'));

// console.log('Loading remote from:', import('home/App'));

function App() {
  return (
    <><Toaster/>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Suspense fallback="Loading..."><Login /></Suspense>} />
        <Route path="/" element={<Suspense fallback="Loading..."><Home /></Suspense>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
