'use client';
import { useEffect, useState } from 'react';
import { fetchUser } from '../services/setlistService';
import TicketStub from '@/pages/components/TicketStub';
import Concert from '@/types/Concert';

export default function Home() {
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const userName = 'jwhisler'; // sets default user to me

  useEffect(() => {
    const fetchConcertData = async () => {
      try {
        const data = await fetchUser(userName);
        setConcerts(data?.setlist);
      } catch (error) {
        console.error('Error fetching setlist:', error);
      }
    };

    fetchConcertData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Ticket Stubs</h1>
      <div className="w-full max-w-md">
      {concerts.length > 0 ? (
          concerts.map(concert => (
            <TicketStub key={concert.id} concert={concert} />
          ))

        ) : (
          <p className="text-lg text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
}
