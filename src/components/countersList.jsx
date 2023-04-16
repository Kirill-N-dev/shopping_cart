import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
  const initialState = [
    { id: 0, value: 5, name: 'Ненужная вещь', price: '200' },
    { id: 1, value: 0, name: 'Ложка' },
    { id: 2, value: 0, name: 'Вилка' },
    { id: 3, value: 0, name: 'Тарелка' },
    { id: 4, value: 0, name: 'Набор минималиста' },
  ];

  let [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters_1 = counters.filter((i) => i.id !== id);
    setCounters(newCounters_1);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    const newCounters_2 = counters.map((i) => ({
      ...i,
      value: i.id === id ? i.value + 1 : i.value,
    }));
    setCounters(newCounters_2);
  };

  const handleDecrement = (id) => {
    const newCounters_3 = counters.map((i) => ({
      ...i,
      value: i.id === id ? (i.value !== 0 ? i.value - 1 : i.value) : i.value,
    }));
    setCounters(newCounters_3);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};
export default CountersList;
