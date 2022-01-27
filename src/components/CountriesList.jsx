import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="container">
      <div className="countryList">
        {countries.map((countrie) => {
          return (
            <Link to={countrie.alpha3Code}>
              <div
                className="card"
                style={{ width: '18rem' }}
                key={countrie.alpha3Code}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${countrie.alpha2Code.toLowerCase()}.png`}
                  alt={countrie.name.common}
                />
                <div class="card-body">
                  <h4 class="card-title">{countrie.name.common}</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="countryInfo">
        <Outlet />
      </div>
    </div>
  );
};

export default CountriesList;
