import React from 'react';
import './TimeLine.css';

const Timeline = ({ events }) => (
  <div className="timeline">
    {events.map((event, index) => (
      <TimelineEvent
        key={index}
        date={event.date}
        title={event.title}
        description={event.description}
        alternate={index % 2 === 1}
      />
    ))}
  </div>
);

const TimelineEvent = ({ date, title, description, alternate }) => (
  <div className={`timeline-event ${alternate ? 'alternate' : ''}`}>
    <div className="dot"></div>
    <div className="content">
      <h3>{date}</h3>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div className="dot"></div>
  </div>
);

export default Timeline;



