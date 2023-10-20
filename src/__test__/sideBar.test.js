import App from "../App";

import { render, screen, cleanup } from '@testing-library/react';

test('should render app', () => {
  render(<App />);
  const sideBar = screen.getByTestId('sidebar')
  expect(sideBar).toBeInTheDocument();
})