import React from 'react';
import { render } from '@testing-library/react';
import Heading from '.';

it('renders heading', () => {
  const { getByText } = render(<Heading text='Heading' />);
  getByText('Heading');
});
