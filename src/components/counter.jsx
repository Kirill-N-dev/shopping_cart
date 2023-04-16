import React, { useState } from 'react';

const Counter = (props) => {
  /*   console.log(props); */
  const [value, setValue] = useState(props.value);
  const formatValue = (value) => {
    return value === 0 ? 'empty' : value;
  };
  const getBadgeClasses = (value) => {
    let classes = 'badge m-2 ';
    classes += value === 0 ? 'bg-warning' : 'bg-primary';
    return classes;
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses(props.value)}>
        {formatValue(props.value)}
      </span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onIncrement(props.id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onDecrement(props.id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
