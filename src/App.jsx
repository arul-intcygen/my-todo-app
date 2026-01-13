import React from 'react';
import Sidebar from './components/Sidebar';
import QuoteSection from './components/QuoteSection';
import Pomodoro from './components/Pomodoro';
import TodoApp from './components/TodoApp';
import './App.css';
import { FaQuoteLeft, FaTasks, FaClock } from 'react-icons/fa';

function App() {
  return (
    <div className="app-container">
      {/* 1. Sidebar di Kiri */}
      <Sidebar />

      {/* 2. Main Content di Kanan */}
      <main className="main-content">
        {/* Banner Gambar */}
        <div className="banner"></div>

        <div className="dashboard-area">
          {/* KOLOM KIRI (Utama) */}
          <div className="left-col">
            
            {/* Quote Section (Disulap jadi Daily Intention) */}
            <div className="widget quote-box">
              <div className="widget-title"><FaQuoteLeft /> Daily Inspiration</div>
              <QuoteSection />
            </div>

            {/* Todo List (Disulap jadi Task Manager) */}
            <div className="widget">
              <div className="widget-title"><FaTasks /> Active Tasks</div>
              <TodoApp />
            </div>
          </div>

          {/* KOLOM KANAN (Widgets) */}
          <div className="right-col">
            <div className="widget">
              <div className="widget-title"><FaClock /> Focus Timer</div>
              <Pomodoro />
            </div>
            
            {/* Placeholder untuk Widget lain (misal Music/Calendar nanti) */}
            <div className="widget">
               <div className="widget-title">🎵 Lo-fi Girl</div>
               <div style={{background: '#191919', height: '100px', borderRadius: '4px', display:'flex', alignItems:'center', justifyContent:'center', color:'#555'}}>
                  Music Placeholder
               </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;