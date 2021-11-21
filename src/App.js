import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));

function App() {
    return (
        <>
            <Suspense fallback={<div className="loading"></div>}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default App;
