import axios from "axios";

export default async function searchImages(term) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID owAgxl2dNdmNzULYlbTvJvkiFO1A0KGFJolO-Q_VOtU",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
}
