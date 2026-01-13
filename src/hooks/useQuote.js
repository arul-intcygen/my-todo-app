import { useState, useEffect, useCallback } from 'react';

export const useQuote = () => {
  // Kita pasang quote default yang PANJANG agar layout langsung terbentuk
  const [quote, setQuote] = useState({ 
    text: "The only limit to our realization of tomorrow will be our doubts of today. Let us move forward with strong and active faith.", 
    author: "Franklin D. Roosevelt" 
  });
  const [loading, setLoading] = useState(false);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      const data = await response.json();
      // Update quote hanya setelah data sukses didapat
      setQuote({ text: data.quote, author: data.author });
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Hapus useEffect jika kamu TIDAK ingin fetch otomatis saat refresh
  // Biarkan default state yang tampil duluan
  // useEffect(() => {
  //   fetchQuote();
  // }, [fetchQuote]);

  return { quote, loading, fetchQuote };
};