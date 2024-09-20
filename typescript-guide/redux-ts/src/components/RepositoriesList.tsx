import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

export function RepositoriesList() {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const {data, error, loading} = useTypedSelector(state => state.repositories);

  

  const onSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  }

  return (<div>
    <form onSubmit={onSumbit}>
      <input value={term} type="text" onChange={e => setTerm(e.target.value)} />
      <button>Search</button>
    </form>
    {error && <h3>{error}</h3>}
    {loading && <h3>Loading...</h3>}
    {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
  </div>);
}