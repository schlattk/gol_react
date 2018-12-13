import React from 'react';
import Enzyme from 'enzyme';
import {mount} from 'enzyme';
import { shallow } from 'enzyme';
import index from '../index';
import Adapter from 'enzyme-adapter-react-16';
import ControlForm from '../form'
Enzyme.configure({ adapter: new Adapter() });

test('form state changes after click', () => {  
  spyOn(index.printer, 'print');  
  const form = mount(<ControlForm />);
  expect(form.state().action).toEqual('');
  let button = form.find('.make');
  button.simulate('click');
  expect(form.state().action).toEqual('make');
  button = form.find('.random');
  button.simulate('click');
  expect(form.state().action).toEqual('random');  
  button = form.find('.stop');
  button.simulate('click');
  expect(form.state().action).toEqual('stop');   
  button = form.find('.run');
  button.simulate('click');
  expect(form.state().action).toEqual('run');  
});

