import React from 'react';
import Enzyme from 'enzyme';
import {mount} from 'enzyme';
import { shallow } from 'enzyme';
import index from '../index';
import Adapter from 'enzyme-adapter-react-16';
import ControlForm from '../form'
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
    button = form.find('.make');
    button.simulate('click');
    expect(form.state().action).toEqual('make'); 
  });
  test('form state changes after click - random', () => { 
    button = form.find('.random');
    button.simulate('click');
    expect(form.state().action).toEqual('random'); 
  });
  test('form state changes after click - stop', () => { 
    button = form.find('.stop');
    button.simulate('click');
    expect(form.state().action).toEqual('stop'); 
  });
  test('form state changes after click - run', () => { 
    button = form.find('.run');
    button.simulate('click');
    expect(form.state().action).toEqual('run'); 
  });
});
