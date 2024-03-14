import React from 'react';
import { formatDistanceToNow } from 'date-fns';

function TimeAgo({ timestamp }) {
  const distance = formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  
  return (
    <span>{distance}</span>
  );
}

export default TimeAgo;
