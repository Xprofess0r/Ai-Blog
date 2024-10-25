import React from 'react';
import HeaderHero from './components/Header';
import GallerySection from './components/Blog';
import Pagination from './components/Pagination';
import SidebarSection from './components/PopularPost';
import Footer from './components/Footer';
import SlideshowGallery from './components/Hero';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AdminPage from './pages/AdminPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div>
        <HeaderHero />
        <Routes>
          <Route path="/" element={<SlideshowGallery />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Admin page protected by ProtectedRoute */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          } />
        </Routes>
        <GallerySection />
        <Pagination />
        <SidebarSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
