import SideBar from "../components/SideBar";

import { render, screen, cleanup } from '@testing-library/react';

test('should render app', () => {
  render(<SideBar />)
  const sideBar = screen.getByTestId('sidebar')
  expect(sideBar).toBeInTheDocument();
})