import React from 'react';
import { formatDistanceToNow } from 'date-fns';

function TimeAgo({ timestamp ,className }) {
  const distance = formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  
  return (
    <span className={className}>{distance}</span>
  );
}

export default TimeAgo;
