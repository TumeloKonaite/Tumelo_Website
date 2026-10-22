import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("react-tsparticles", () => () => <div data-testid="particles" />);
jest.mock("typewriter-effect", () => () => <div>Backend &amp; API Engineering</div>);
jest.mock("react-parallax-tilt", () => ({ children }) => <div>{children}</div>);
jest.mock("react-markdown", () => ({ children }) => <div>{children}</div>);
jest.mock("remark-gfm", () => () => null);
jest.mock("@vercel/analytics/react", () => ({
  Analytics: () => null,
}), { virtual: true });
jest.mock("@vercel/speed-insights/react", () => ({
  SpeedInsights: () => null,
}), { virtual: true });

test("renders the portfolio home view", () => {
  window.scrollTo = jest.fn();
  render(<App />);

  expect(screen.getAllByText(/Tumelo Konaite/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Software Engineer/i).length).toBeGreaterThan(0);
  expect(screen.getByRole("link", { name: /System Profile/i })).toBeInTheDocument();
});
