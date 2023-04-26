import axios from "axios";
import { createContext, useState, useCallback } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const { data } = await axios.get("http://localhost:3001/books");
    setBooks(data);
  }, []);

  const createBook = async (title) => {
    const { data } = await axios.post("http://localhost:3001/books", {
      title,
    });
    setBooks([...books, data]);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBookById = async (id, title) => {
    const { data } = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const udpatedBook = (newBook) => (oldBook) =>
      oldBook.id === newBook.id ? { ...oldBook, ...newBook } : oldBook;

    setBooks(books.map(udpatedBook(data)));
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        createBook,
        deleteBookById,
        editBookById,
        fetchBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
