"use client"; // Add this at the top

import { useEffect, useState } from 'react';

export default function Home() {
  const [setlist, setSetlist] = useState(null);

  useEffect(() => {
    const fetchSetlist = async () => {
      try {
        const response = await fetch('/api/setlist?artistName=radiohead');
        const result = await response.json();
        setSetlist(result);
      } catch (error) {
        console.error('Error fetching setlist:', error);
      }
    };

    fetchSetlist();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Setlist Sandbox</h1>
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        {setlist ? (
          <pre className="text-sm text-gray-700">{JSON.stringify(setlist, null, 2)}</pre>
        ) : (
          <p className="text-lg text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
}
