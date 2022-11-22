import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GeolocationButton from "../Home/GeolocationButton";

describe("Test Home Page", () => {
  test("push Geolocation Button", async () => {
    const mockFunction = jest.fn(); // propsで渡す関数のモック化

    render(<GeolocationButton getCurrentPosition={mockFunction} />);
    const geolocationButton = screen.getByTestId("GeolocationButton");
    expect(geolocationButton).toBeInTheDocument();

    fireEvent.click(geolocationButton);
    const Loading = await screen.findByTestId("Loading");
    expect(Loading).toBeInTheDocument();
  });
});
