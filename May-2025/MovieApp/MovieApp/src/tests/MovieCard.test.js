import { store } from "../store/store";
import { Provider } from "react-redux";
import { screen, render } from "@testing-library/react";
import MovieCard from "../reuseable/MovieCard";

const renderWithProvider = (ui) =>
  render(<Provider store={store}>{ui}</Provider>);

describe("MovieCard Loads", () => {
  test("Showd Loading", () => {
    renderWithProvider(<MovieCard />);
    let result = screen.findByText(/loading.../i);
    expect(result).toBeInTheDocument();
  });
});

describe("MovieCard", () => {
  const movieData = {
    poster_path: "path/to/poster.jpg",
    title: "Movie Title",
    overview: "Movie overview",
    release_date: "2023-01-01",
    vote_average: 8.5,
  };

  test("renders movie card with correct data", () => {
    renderWithProvider(<MovieCard data={movieData} />);

    expect(screen.getByText(/movie title/i)).toBeInTheDocument();
    expect(screen.getByText(/movie overview/i)).toBeInTheDocument();
    expect(screen.getByText(/release date:/i)).toBeInTheDocument();
    expect(screen.getByText(/rating:/i)).toBeInTheDocument();
  });
});
