import React, { useState, useEffect } from "react";
import SelectedBanner from "./components/SelectedBanner";
import Episodes from "./components/Episodes";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState();
  const [filter, setFilter] = useState([]);
  console.log(filter);
  async function getEpsiodes() {
    try {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10"
      );
      let data = await response.json();

      if (data) setData(data);

      setFilter(data);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getEpsiodes();
  }, []);

  function handleClick(data) {
    setSelected(data);
  }

  function handleFilter(input) {
    console.log(input);
    setFilter(data?.filter((episode) => episode.title.includes(input)));
  }

  return (
    <div className="App">
      {selected ? <SelectedBanner selectedEpsiode={selected} /> : null}

      <div className="filter-episodes">
        <input
          onChange={(e) => handleFilter(e.target.value)}
          placeholder="Search 🔍"
        />
      </div>

      <div className="episodes-component">
        {filter.map((episode) => {
          return (
            <Episodes key={episode?.id} data={episode} click={handleClick} />
          );
        })}
      </div>
    </div>
  );
}
