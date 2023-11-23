import { render, screen } from '@testing-library/react';
import React from 'react';
import { userEvent } from '@testing-library/user-event';
import Counter from '@components/Counter';

describe('Counter Tests', () => {
  let incrementButton: HTMLElement;
  let decrementButton: HTMLElement;
  let countDisplay: HTMLElement;

  beforeEach(() => {
    const CounterWrapper = () => {
      const [count, setCount] = React.useState(0);
      return (
        <Counter
          count={count}
          onClick={(newCount) => {
            setCount(newCount);
          }}
        />
      );
    };

    render(<CounterWrapper />);
    incrementButton = screen.getByText(/Increment/i);
    decrementButton = screen.getByText(/Decrement/i);
    countDisplay = screen.getByText(/0/i);
  });

  test('Counter must render correctly', () => {
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(countDisplay).toBeInTheDocument();
  });

  test('Counter behavior test', async () => {
    await userEvent.click(incrementButton);
    expect(await screen.findByText(/1/)).toBeInTheDocument();
    await userEvent.click(incrementButton);
    expect(await screen.findByText(/2/)).toBeInTheDocument();
    await userEvent.click(decrementButton);
    expect(await screen.findByText(/1/)).toBeInTheDocument();
    await userEvent.click(decrementButton);
    expect(await screen.findByText(/0/)).toBeInTheDocument();
  });
});
