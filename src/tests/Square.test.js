import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Square from '../Square';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Square changes state by click', () => {
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
describe('Square changes its own state by receiving new prop', () => {
  test('props change state', () => {
    let square = shallow(<Square item={'O'} />)
    expect(square.state().alive).toEqual(false);
    square.setProps({ item: 'X' });
    expect(square.state().alive).toEqual(true);
    square.setProps({ item: 'O' });
    expect(square.state().alive).toEqual(false);
    });
});
describe('componentWillReceiveProps', () => {
  test('it get\'s called when changing props', () => {
    const spy = jest.spyOn(Square.prototype, 'componentWillReceiveProps');
    let square = shallow(<Square item = {'O'} />);
    expect(spy).toHaveBeenCalledTimes(0);
    square.setProps({ item: 'X' });
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
