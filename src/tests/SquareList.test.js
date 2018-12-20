import React from 'react';
import ReactDOM from 'react-dom';
import SquareList from '../SquareList';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SquareList oxGrid ={['O','X']}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('SquareList has not changed appearance', () => {
  const component = renderer.create(
    <SquareList oxGrid ={['O','X']}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree[0].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
