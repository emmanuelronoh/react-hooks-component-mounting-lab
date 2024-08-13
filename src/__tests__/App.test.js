// src/__tests__/App.test.js
import React from 'react';
import { configure, shallow } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../App'; // Adjust the import path if necessary

test("<App /> calls componentDidMount and adds a Timer", () => {
  // Spy on componentDidMount lifecycle method
  spy(App.prototype, 'componentDidMount');

  // Shallow render the App component
  let appWrapper = shallow(<App />);

  // Verify that componentDidMount is called
  expect(App.prototype.componentDidMount.calledOnce).toBe(true);

  // Check if TimerGrid is rendered
  expect(appWrapper.find('TimerGrid').length).toBe(1);

  // Check the state of timerIDs
  expect(appWrapper.state().timerIDs.length).toBe(1);

  // Unmount the component to clean up
  appWrapper.unmount();
});
