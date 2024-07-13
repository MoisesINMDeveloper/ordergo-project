"use client"
import React from 'react';
import Navbar from '@/components/organisms/Navbar';
import Dashboard from '@/templates/Dashboard';
import Footer from '@/components/organisms/Footer';

const Home: React.FC=() => {
  return (
    <main className="h-screen ">
      <Navbar />
      <Dashboard />
      <Footer />
    </main>
  );
};
export default Home;


// https://excalidraw.com/#json=LaLJLjMd8wedbl2j2pnDP,Z0bZLuoQ-mzo-q53PdB0GQ

