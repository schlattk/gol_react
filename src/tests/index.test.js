import React from 'react';
import { render } from 'react-dom';
import helper from '../helper.js';
import ControlForm from '../form';
import SquareList from '../SquareList';
import index from '../index';

jest.mock('react-dom');
describe('printer', () => {
  it('calls ReactDom.render', () => {
    index.printer.print(['O', 'X']);
    expect(render).toHaveBeenCalledWith(
      <SquareList oxGrid = {['O', 'X']} />, null
    );
    expect(render).toHaveBeenCalledTimes(1);
  });
});
