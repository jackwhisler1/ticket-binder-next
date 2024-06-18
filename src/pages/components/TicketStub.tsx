import React from 'react';
import Concert from '@/types/Concert';
import './styles.css';
import { convertDateToUSFormat } from './helpers';
type TicketStubProps = {
  concert: Concert; 
};
const TicketStub: React.FC<TicketStubProps> = ({ concert }) => {
  const eventDate = convertDateToUSFormat(concert.eventDate); 
  return (
    <div className="ticket">
      <div className="date">
        <span className="day">{new Date(eventDate).getDate()}</span>
        <span className="month-and-time">
          {new Date(eventDate).toLocaleString('default', { month: 'short' }).toUpperCase()}
          <br />
          <span className="small">{eventDate}</span>
        </span>
      </div>
      <div className="artist">
        <span className="name">{concert.artist.name}</span>
        <br />
        <span className="live small">{concert.tour?.name}</span>
      </div>
      <div className="location">
        <span>{concert.venue.city.name}</span>
        <br />
        <span className="small">{concert.venue.name}</span>
      </div>
      <div className="rip"></div>
      <div className="cta">
        <button className="buy">GRAB A TICKET</button>
      </div>
    </div>
  );
};
export default TicketStub;
