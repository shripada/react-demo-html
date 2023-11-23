import './Counter.css';
import { CounterProps } from './types';

/**
  Counter component can be used to increment and decrement a count value 
  with the help of two buttons. 
 */
const Counter = ({ onClick, count }: CounterProps) => {
  return (
    <div className="counter">
      <h1 id="counter-h1">{count}</h1>
      <button onClick={() => onClick(count + 1)}>Increment</button>
      <button onClick={() => onClick(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
