// @flow
/* eslint-env jest */
import React from 'react'
import App from '../src/App'

import renderer from 'react-test-renderer'

declare var it: Function;
declare var expect: Function;

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON()
  expect(rendered).toBeTruthy()
})
