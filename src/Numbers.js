import React from 'react';

const Numbers = ({ persons }) => {
  return (
    <div>
      {persons.map((x, index) => (
        <div key={index}>
          {x.name} {x.number}
        </div>
      ))}
    </div>
  );
};

export default Numbers;
