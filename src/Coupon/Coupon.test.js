import React from 'react';
import ReactDOM from 'react-dom';
import Coupon from './Coupon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Coupon />, div);
});
