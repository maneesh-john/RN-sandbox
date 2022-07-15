/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import {fireEvent, render} from "@testing-library/react-native"

jest.mock("@react-navigation/native", ()=>{
  return {
    useNavigation: ()=> jest.fn()
  }
})

it('renders correctly', async() => {
  jest.setTimeout(7000);
  const screen = render (<App />);
  const input = screen.getByPlaceholderText("Enter something")
  fireEvent.changeText(input, "asdf")
  // const btn = screen.getByRole("button");
  await new Promise((r)=> setTimeout(r,5000))
  const btn = screen.getByTestId("txt-2")
  fireEvent.press(btn);
});
