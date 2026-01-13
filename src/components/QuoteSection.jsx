import React from 'react';
import { useQuote } from '../hooks/useQuote';
import { FaSyncAlt } from 'react-icons/fa';

const QuoteSection = () => {
  const { quote, loading, fetchQuote } = useQuote();

  return (
    <div className="quote-container-inner">
      
      {/* AREA 1: TEKS */}
      {/* Kita hapus percabangan if/else loading. 
          Struktur HTML SELALU SAMA, hanya transparansinya yang berubah. */}
      <div 
        className="quote-text-area" 
        style={{ 
          opacity: loading ? 0.5 : 1, 
          transition: 'opacity 0.3s ease' // Efek transisi halus
        }}
      >
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author" style={{ 
          color: 'var(--accent-green)', 
          marginTop: '8px', 
          fontSize: '0.8rem', 
          textAlign: 'right' 
        }}>
          - {quote.author}
        </p>
      </div>

      {/* AREA 2: TOMBOL */}
      <button 
        onClick={fetchQuote} 
        className="btn-pomo" 
        disabled={loading}
        style={{
          minWidth: '130px', 
          justifyContent: 'center'
        }}
      >
        <FaSyncAlt 
          className={loading ? "icon-spin" : ""} 
          style={{ marginRight: '8px' }}
        />
        {/* Tombol tetap bilang "New Quote" atau "Loading.." tapi ukurannya dikunci di CSS */}
        {loading ? "Loading..." : "New Quote"}
      </button>

    </div>
  );
};

export default QuoteSection;