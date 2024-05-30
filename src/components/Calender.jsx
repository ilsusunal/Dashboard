import React from 'react';

export function Calendar({ events }){
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="calendar">
      {events.map((event, index) => (
        <div key={index} className="calendar-event">
          <div className="calendar-event-title">{event.title}</div>
          <div className="calendar-event-description">{event.description}</div>
          <div className="calendar-event-date">{formatDate(event.due_date)}</div>
          <div className="calendar-event-assigned-to">{event.assigned_to}</div>
        </div>
      ))}
    </div>
  );
};

