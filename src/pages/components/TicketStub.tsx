import React from 'react';
import Concert from '@/types/Concert';
import { convertDateToUSFormat } from './helpers';
type TicketStubProps = {
  concert: Concert; 
};
const TicketStub: React.FC<TicketStubProps> = ({ concert }) => {
  
const styles = `
body {
  background-color: #436ea5;
}
.ticket-1 {
  background-image: url("https://images.unsplash.com/photo-1483101974978-cf266fdf1139?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80");
}
.ticket-2 {
  background-image: url("https://images.unsplash.com/photo-1550184658-ff6132a71714?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2180&q=80");
}
`;
  const eventDate = convertDateToUSFormat(concert.eventDate); 
  return (
    <div className="ticket bg-no-repeat bg-top bg-cover bg-gray-900 w-[700px] h-[250px] rounded-[15px] shadow-md mx-auto mt-10 text-white">
      <div className="date m-[15px] shadow-md">
        <span className="day flex flex-col items-start text-[80px]">{new Date(eventDate).getDate()}</span>
        <span className="month-and-time flex flex-col items-start mt-[15px] font-bold">
          {new Date(eventDate).toLocaleString('default', { month: 'short' }).toUpperCase()}
          <br />
          <span className="small text-[16px]">{eventDate}</span>
        </span>
      </div>
      <div className="artist flex flex-row flex-wrap items-center text-[30px] m-[10px_20px_0_20px] font-bold shadow-md">
        <span className="name">{concert.artist.name}</span>
        <br />
        <span className="live small text-[16px]">{concert.tour?.name}</span>
      </div>
      <div className="location flex flex-col items-start ml-[78px] text-[16px] font-bold shadow-md">
        <span>{concert.venue.city.name}</span>
        <br />
        <span className="small text-[16px]">{concert.venue.name}</span>
      </div>
      <div className="rip flex flex-col items-start border-r-2 border-dotted border-gray-400 h-[250px] mr-[120px]"></div>
      <div className="cta">
        <button className="buy flex flex-col items-start absolute top-[135px] right-[15px] block text-[12px] font-bold bg-blue-700 px-5 py-2 rounded-[25px] text-white rotate-[-90deg] shadow-md">
          GRAB A TICKET
        </button>
      </div>
    </div>
  );
}

export default TicketStub;
