import React from 'react';
import ReactDOM from 'react-dom';
import Coupons from './Coupons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Coupons />, div);
});
