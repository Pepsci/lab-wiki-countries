import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />}>
          <Route
            path=":name"
            element={<CountryDetails countries={countries} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
