import Header from "./components/Header";

function App({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default App;
