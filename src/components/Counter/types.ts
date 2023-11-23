/**
 * Represents the props that are passed to the Counter component
 */
export interface CounterProps {
  /**
     This is the event handler function that will be called when the counter's add
     or decrement button is clicked. You will receive the updated count as an argument
   */
  onClick: (count: number) => void;

  /**
    Represents the current value of the counter
   */
  count: number;
}
