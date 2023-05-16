import React from 'react'
import Timeline from './TimeLine';

const EventData = () => {
    const events = [
        {
          date: 'September 2022',
          title: 'MERN Stack Full Web Development',
          description: 'I learn Full-Stack developer to improve my web development skills from PrepBytes.',
        },
        {
          date: 'January 2021',
          title: 'Bachelor of Engineering',
          description: 'I complete B.E with 7.8 CGPA.',
        },
        {
          date: 'August 2017',
          title: 'Diploma in Engineering',
          description: 'I complete my diploma with 82%.',
        },
        {
            date: 'May 2014',
            title: 'Completed my 10TH',
            description: 'I complete my 10 with 7.8 cgpa.',
          },
      ];
  return (
    <div>
      <Timeline events={events} />
    </div>
  )
}

export default EventData
