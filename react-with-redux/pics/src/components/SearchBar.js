import "./SearchBar.css";
import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(term);
    setTerm("");
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmitForm}>
        <label for={"term-id"}>Enter Search Term</label>
        <input id={"term-id"} value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
