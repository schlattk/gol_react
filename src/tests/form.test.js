import React from 'react';
import Enzyme from 'enzyme';
import {mount, shallow} from 'enzyme';
import index from '../index';
import Adapter from 'enzyme-adapter-react-16';
import ControlForm from '../form'
import startstop from '../startstop';
import initializer from '../initializer';
Enzyme.configure({ adapter: new Adapter() });

describe('ControlForm', () => {
  let form;
  let button;
  beforeEach( () => {
    spyOn(index.printer, 'print');
    form = mount(<ControlForm />);
    })
  test('initial form state', () => {
    expect(form.state().action).toEqual('');
  });
  test('form state changes after click - make', () => {
    const make = jest.spyOn(initializer, 'blank');
    button = form.find('.make');
    button.simulate('click');
    expect(form.state().action).toEqual('make');
    expect(make).toHaveBeenCalledTimes(1);
  });
  test('form state changes after click - random', () => {
    const random = jest.spyOn(initializer, 'init');
    button = form.find('.random');
    button.simulate('click');
    expect(form.state().action).toEqual('random');
    expect(random).toHaveBeenCalledTimes(1);
  });
  test('form state changes after click - stop', () => {
    const stop = jest.spyOn(startstop, 'stop');
    button = form.find('.stop');
    button.simulate('click');
    expect(form.state().action).toEqual('stop');
    expect(stop).toHaveBeenCalledTimes(1);
  });
  test('form state changes after click - run', () => {
    const run = jest.spyOn(startstop, 'run');
    button = form.find('.run');
    button.simulate('click');
    expect(form.state().action).toEqual('run');
    expect(run).toHaveBeenCalledTimes(1);
  });
});
