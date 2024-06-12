// src/components/Timeline.js
import React from 'react';
import TimelineItem from './FDItem.jsx';
import './Timeline.css';

const Timeline = ({ plans }) => {
  return (
    <div className="timeline">
      {plans.map(plan => (
        <TimelineItem key={plan.name} plan={plan} />
      ))}
    </div>
  );
};

export default Timeline;
