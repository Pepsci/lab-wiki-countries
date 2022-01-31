import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        console.log(response);
        setCountries(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          {countries.length === 0 ? (
            <div className="loading">Loading...</div>
          ) : (
            <>
              <Routes>
                <Route
                  path="/"
                  element={<CountriesList countries={countries} />}
                >
                  <Route
                    path=":name"
                    element={<CountryDetails countries={countries} />}
                  />
                </Route>
              </Routes>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
