import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../redux/counter/counterSlice';

const Counter = () => {
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{countValue}</h2>
      <button className='decrement-btn' onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button className='reset-btn' onClick={() => dispatch(reset())}>
        Reset
      </button>
      <button className='increment-btn' onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
