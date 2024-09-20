import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';


const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' Component={Landing} />
          <Route path='/surveys' Component={Dashboard} />
          <Route path='/surveys/new' Component={SurveyNew} />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
