// import "./App.css";
// import { useEffect, useState } from "react";
// // import CountryCards from "./components/CountryCards";

// function App() {
//   const [data, setData] = useState([]);
//   const [input, setInput] = useState("");
//   const [serachData, setSearchData] = useState([]);

//   // console.log(data)
//   console.log(serachData);

//   useEffect(() => {
//     // console.log('main useEffect running')
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setSearchData(data);
//       })
//       .catch((err) => console.error("Error fetching data: ", err));
//   }, []);

//   useEffect(() => {
//     // console.log('input useEffect ')

//     if (input === "") setSearchData(data);
//     else {
//       let res = data.filter((item) =>
//         item.name.common.toLowerCase().includes(input.toLowerCase())
//       );
//       setSearchData(res);
//     }
//   }, [input]);

//   return (
//     <div className="app">
//       <div className="input-wrapper">
//         <input
//           className="search-input"
//           placeholder="Search for countries..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           type="text"
//         />
//       </div>
//       <div className="flags-wrapper">
//         {serachData.map((item) => {
//           return (
//             <div key={item.name.common} className="card">
//               <img
//                 src={item.flags.png}
//                 alt={`Country flag ${item.flags.alt}`}
//                 height={100}
//                 width={100}
//               />
//               <p>{item.name.common}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import './App.css';

const headerStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  backgroundColor: '#f8f8f8',
  padding: '10px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  zIndex: '1000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const searchStyle = {
  width: '50%',
  padding: '10px',
  fontSize: '16px',
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '80px 20px',
};

const cardStyle = {
  width: '200px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  margin: '10px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const imageStyle = {
  width: '100px',
  height: '100px',
};

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div style={headerStyle}>
        <input
          type="text"
          placeholder="Search for countries..."
          style={searchStyle}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div style={containerStyle}>
        {filteredCountries.map((country) => (
          <div key={country.cca3} style={cardStyle}>
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              style={imageStyle}
            />
            <h2>{country.name.common}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;