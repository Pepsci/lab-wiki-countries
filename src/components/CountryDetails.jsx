import React from 'react';
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const params = useParams();

  const myCountrie = props.countries.find(
    (count) => count.alpha3Code === params.name
  );

  console.log(params);
  console.log(myCountrie);

  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${myCountrie.alpha2Code.toLowerCase()}.png`}
        alt=""
      />
      <h1>{myCountrie.name.common}</h1>
      <p>Capital : {myCountrie.capital}</p>
      <p>Area : {myCountrie.area} km²</p>
    </div>
  );
};

export default CountryDetails;
