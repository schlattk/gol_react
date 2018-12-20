import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Square from '../Square';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('ControlForm', () => {
  let square;
  beforeEach( () => {
    square = shallow(<Square item={'O'} />);
  })
  test('Square changes state after click', () => {
    expect(square.state().alive).toEqual(false);
    square.simulate('Click');
    expect(square.state().alive).toEqual(true);
   });
  test('Square changes class after click', () => {
    expect(square.props().className).toEqual('square--grey');
    square.simulate('Click');
    expect(square.props().className).toEqual('square--green');
   });
});
