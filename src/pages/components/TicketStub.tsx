import React from 'react';
import Concert from '@/types/Concert';
type TicketStubProps = {
  concert: Concert; 
};
const TicketStub: React.FC<TicketStubProps> = ({ concert }) => {
  const { eventDate, artist, venue, tour, sets, info } = concert;
  console.log(concert);
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mb-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-bold">{artist?.name && artist.name}</div>
        <div className="text-sm font-semibold">{eventDate}</div>
      </div>

      {/* Venue and Tour */}
      <div className="mb-4">
        <div className="text-gray-600">{venue?.city.name}, {venue?.city.state}</div>
        <div className="text-gray-600">{venue?.name}</div>
        <div className="mt-2 text-sm font-semibold">Tour: {tour?.name}</div>
      </div>

      {/* Sets */}
      <div className="mb-4">
        {sets?.set.map((set, index) => (
          <div key={index} className="mb-2">
            {set.encore && <div className="text-sm text-gray-600">Encore</div>}
            <ul className="list-disc pl-4">
              {set.song.map((song, idx) => (
                <li key={idx}>{song.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="text-sm text-gray-600">{info}</div>
    </div>
  );
};

export default TicketStub;
