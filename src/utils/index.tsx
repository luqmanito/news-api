import axios from "axios";
export const baseUrl = process.env.REACT_APP_BASE_URL ?? "test";
export const apiKey = process.env.REACT_APP_API_KEY ?? "test";



export const retrieveNews = () => {
  return axios.get(baseUrl, {
    params: {
      q: "tesla",
      from: "2023-01-01",
      sortBy: "publishedAt",
      apiKey: apiKey,
    },
  });
};
