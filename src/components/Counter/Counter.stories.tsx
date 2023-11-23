import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import './Counter.css';
import Counter from './Counter';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Demo/Counter',
  component: Counter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    count: 100,
  },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CounterDefault: Story = {
  
    // This args is needed, otherwise, the arg controls wont appear in the storybook for the story
  render: function Render(args) {
    // const [count, setCount] = React.useState(args.count);
    const [countArg, setCountArg] = useArgs();
    return (
      <Counter
        count={countArg.count}
        onClick={(newCount) => setCountArg({ count: newCount })}
      />
    );
  },
};
