import App from "../App";

import { render, screen, cleanup } from '@testing-library/react';

test('should render header', () => {
  render(<App />);
  const sideBar = screen.getByTestId('header')
  expect(sideBar).toBeInTheDocument();
})