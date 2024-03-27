import axios from "axios";
import { API__KEY } from "../utils/constans";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export async function getTrendMovies() {
  try {
    const {
      data: { results },
    } = await axios.get(`/trending/all/week?api_key=${API__KEY}`);

    return results;
  } catch (error) {
    return error.message;
  }
}

export async function getMoviesByQuery(query) {
  try {
    const {
      data: { results },
    } = await axios.get(`/search/movie?api_key=${API__KEY}&query=${query}`);

    return results;
  } catch (error) {
    return error.message;
  }
}

export async function getMoviesDetails(id) {
  try {
    const results = await axios.get(`/movie/${id}?api_key=${API__KEY}`);

    return results.data;
  } catch (error) {
    return error.message;
  }
}

export async function getCast(id) {
  try {
    const cast = await axios.get(`/movie/${id}/credits?api_key=${API__KEY}`);

    return cast.data.cast;
  } catch (error) {
    return error.message;
  }
}

export async function getReviews(id) {
  try {
    const reviews = await axios.get(`/movie/${id}/reviews?api_key=${API__KEY}`);

    return reviews.data.results;
  } catch (error) {
    return error.message;
  }
}
