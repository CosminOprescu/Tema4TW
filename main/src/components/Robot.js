import React from 'react';

function Robot({ item }) {
  return (
    <div className='robot'>
      Hello, my name is {item.name || ''}. I am a {item.type || ''} and weigh {item.mass || ''}
    </div>
  );
}

export default Robot;
