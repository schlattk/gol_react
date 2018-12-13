import React from 'react';
import ReactDOM from 'react-dom';
import index from '../index';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<index.SquareList oxGrid ={['O','X']}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('SquareList has not changed appearance', () => {
  const component = renderer.create(
    <index.SquareList oxGrid ={['O','X']}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree[0].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

