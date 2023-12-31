import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import BtnBarTwo from '.';

describe('<BtnBarTwo />', () => {
  const btns = [
    { text: 'home', value: '' },
    { text: 'about' },
    { text: 'contact', value: 'givenValue' },
  ];

  it('should render without crashing', () => {
    render(<BtnBarTwo btns={btns} setState={() => {}} />);
  });

  it('should render buttons', () => {
    const { getByText } = render(<BtnBarTwo btns={btns} setState={() => {}} />);
    getByText('home');
    getByText('about');
    getByText('contact');
  });

  it('should call setState on button click', () => {
    const fn = jest.fn();
    const { getByText } = render(<BtnBarTwo btns={btns} setState={fn} />);
    const btn = getByText('about');
    fireEvent.click(btn);
    expect(fn).toBeCalled();
  });

  it('should use "text" property to update state when there is no "value" property ', () => {
    let state;
    const { getByText } = render(
      <BtnBarTwo btns={btns} setState={(val) => (state = val)} />
    );
    const btn = getByText('about');
    fireEvent.click(btn);
    expect(state).toBe('about');
  });

  it('should use "value" property to update state', () => {
    let state;
    const { getByText } = render(
      <BtnBarTwo btns={btns} setState={(val) => (state = val)} />
    );
    const btn = getByText('contact');
    fireEvent.click(btn);
    expect(state).toBe('givenValue');
  });

  it('should disable first button on mount', () => {
    const fn = jest.fn();
    const { getByText } = render(<BtnBarTwo btns={btns} setState={fn} />);
    const btn = getByText('home').closest('button')!;
    expect(btn.disabled).toBe(true);
  });

  it('should disable clicked button', () => {
    const fn = jest.fn();
    const { getByText } = render(<BtnBarTwo btns={btns} setState={fn} />);
    const btn = getByText('about').closest('button')!;
    fireEvent.click(btn);
    expect(btn.disabled).toBe(true);
  });

  it('should enable all buttons except the one that was clicked last', () => {
    const fn = jest.fn();
    const { getByText } = render(<BtnBarTwo btns={btns} setState={fn} />);
    const btn1 = getByText('home').closest('button')!;
    const btn2 = getByText('about').closest('button')!;
    const btn3 = getByText('contact').closest('button')!;
    fireEvent.click(btn2);
    fireEvent.click(btn3);
    expect(btn1.disabled && btn2.disabled && !btn3.disabled).toBe(false);
  });
});
