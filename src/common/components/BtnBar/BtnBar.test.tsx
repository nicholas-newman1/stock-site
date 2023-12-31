import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import BtnBar from '.';

describe('<BtnBar />', () => {
  const renderProp = (
    handleClick: (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      value: string
    ) => void
  ) => (
    <ul>
      <li>
        <button onClick={(e) => handleClick(e, '1')}>1</button>
      </li>
      <li>
        <button onClick={(e) => handleClick(e, '2')}>2</button>
      </li>
      <li>
        <button onClick={(e) => handleClick(e, '3')}>3</button>
      </li>
    </ul>
  );

  it('should render without crashing', () => {
    render(<BtnBar render={renderProp} setState={() => {}} />);
  });

  it('should render buttons', () => {
    const { getByText } = render(
      <BtnBar render={renderProp} setState={() => {}} />
    );
    getByText('1');
    getByText('2');
    getByText('3');
  });

  it('should call setState on button click', () => {
    const fn = jest.fn();
    const { getByText } = render(<BtnBar render={renderProp} setState={fn} />);
    const btn = getByText('2');
    fireEvent.click(btn);
    expect(fn).toBeCalled();
  });

  it('should correctly update state', () => {
    let state;
    const { getByText } = render(
      <BtnBar render={renderProp} setState={(val) => (state = val)} />
    );
    const btn = getByText('2');
    fireEvent.click(btn);
    expect(state).toBe('2');
  });

  it('should disable first button on mount', () => {
    const fn = jest.fn();
    const { getByText } = render(<BtnBar render={renderProp} setState={fn} />);
    const btn = getByText('1').closest('button')!;
    expect(btn.disabled).toBe(true);
  });

  it('should disable clicked button', () => {
    const fn = jest.fn();
    const { getByText } = render(<BtnBar render={renderProp} setState={fn} />);
    const btn = getByText('2').closest('button')!;
    fireEvent.click(btn);
    expect(btn.disabled).toBe(true);
  });

  it('should enable all buttons except the one that was clicked last', () => {
    const fn = jest.fn();
    const { getByText } = render(<BtnBar render={renderProp} setState={fn} />);
    const btn1 = getByText('1').closest('button')!;
    const btn2 = getByText('2').closest('button')!;
    const btn3 = getByText('3').closest('button')!;
    fireEvent.click(btn2);
    fireEvent.click(btn3);
    expect(btn1.disabled && btn2.disabled && !btn3.disabled).toBe(false);
  });
});
