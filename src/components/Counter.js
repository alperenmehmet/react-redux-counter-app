import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../redux/counter/counterSlice';

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{countValue}</h2>
      <div>
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button
        className='decrement-btn'
        onClick={() => dispatch(decrement(amount))}
      >
        Decrement
      </button>
      <button className='reset-btn' onClick={() => dispatch(reset(amount))}>
        Reset
      </button>
      <button
        className='increment-btn'
        onClick={() => dispatch(increment(amount))}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
