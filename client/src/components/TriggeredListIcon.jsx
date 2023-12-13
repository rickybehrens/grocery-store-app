import React from 'react';
import { Link } from 'react-router-dom';

const TriggeredListIcon = ({ item, triggerWords }) => {
  const hasTriggerWord = triggerWords.some((word) =>
    item.toLowerCase().includes(word.toLowerCase())
  );

  return (
    <>
      {hasTriggerWord && (
        <Link to="/sustainability" style={{ display: 'inline' }}>
          <img src="/leaf.png" alt="Leaf" style={{ height: '1.5em' }} />
        </Link>
      )}
    </>
  );
};

export default TriggeredListIcon;
