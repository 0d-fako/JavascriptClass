import React from "react";
import { test, expect, describe } from "vitest";
import { Provider } from "react-redux";
// import store from "../store/store";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { movieAPI } from "../service/movieAPI";
import MovieCard from "../reuseable/MovieCard";

test("add two numbers", () => {
  expect(1 + 1).toBe(2);
});

const mockStore = configureStore({
  reducer: { [movieAPI.reducerPath]: movieAPI.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieAPI.middleware),
});

const renderWithProvider = (ui, store = mockStore) =>
  render(<Provider store={store}>{ui}</Provider>);

describe("MovieCard", () => {
  test("renders movie card correctly", () => {
    const movie = {
      poster_path: "/sample.jpg",
      title: "Sample Movie",
      overview: "This is a sample overview.",
      vote_average: 8.5,
    };
    const { getByText } = renderWithProvider(<MovieCard movie={movie} />);
    expect(getByText("Sample Movie")).to.exist;
  });
});
