import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div>
    <Header />
    <main className="container mt-4">
      <div className="row">
        <MainContent />
        <Sidebar />
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
