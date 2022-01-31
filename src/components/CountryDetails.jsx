import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const params = useParams();

  const myCountrie = props.countries.find(
    (count) => count.alpha3Code === params.name
  );

  const myBorder = myCountrie.borders.map((countryCode) => {
    const foundCountry = props.countries.find(
      (count) => count.alpha3Code === countryCode
    );
    return foundCountry.name.common;
  });

  console.log(myCountrie);
  console.log(myBorder);

  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${myCountrie.alpha2Code.toLowerCase()}.png`}
        alt=""
      />
      <h1>{myCountrie.name.common}</h1>
      <p>Capital : {myCountrie.capital}</p>
      <p>Area : {myCountrie.area} km²</p>
      <p>Border </p>
      <ul>
        {myBorder.map((c, i) => {
          return (
            <li key={c}>
              <Link to={`/${myCountrie.borders[i]}`}>{c}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryDetails;
