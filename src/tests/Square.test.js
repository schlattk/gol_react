import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import index from '../index';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Square changes state after click', () => {
  const square = shallow(<index.Square item={'O'} />);
  expect(square.state().alive).toEqual(false);
  square.simulate('Click');
  expect(square.state().alive).toEqual(true);
});

test('Square changes class after click', () => {
    const square = shallow(<index.Square item={'X'} />);
    expect(square.props().className).toEqual('square--green');
    square.simulate('Click');
    expect(square.props().className).toEqual('square--grey');
});