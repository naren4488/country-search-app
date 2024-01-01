import "./App.css";
import { useEffect, useState } from "react";
// import CountryCards from "./components/CountryCards";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [serachData, setSearchData] = useState([]);

  // console.log(data)
  console.log(serachData);

  useEffect(() => {
    // console.log('main useEffect running')
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setSearchData(data);
      })
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);

  useEffect(() => {
    // console.log('input useEffect ')

    if (input === "") setSearchData(data);
    else {
      let res = data.filter((item) =>
        item.name.common.toLowerCase().includes(input.toLowerCase())
      );
      setSearchData(res);
    }
  }, [input]);

  return (
    <div className="app">
      <div className="input-wrapper">
        <input
          className="search-input"
          placeholder="Search for countries..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
      </div>
      <div className="flags-wrapper">
        {serachData.map((item) => {
          return (
            <div key={item.name.common} className="card">
              <img
                src={item.flags.png}
                alt={`Country flag ${item.flags.alt}`}
                height={100}
                width={100}
              />
              <p>{item.name.common}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
