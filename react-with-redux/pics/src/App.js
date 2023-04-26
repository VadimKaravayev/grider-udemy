import { useState } from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";

export default function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const results = await searchImages(term);
    setImages(resultsToImages(results));

    console.log(results);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

function resultsToImages(results) {
  return results.map(({ id, urls, alt_description }) => ({
    id,
    url: urls.small,
    alt: alt_description,
  }));
}
