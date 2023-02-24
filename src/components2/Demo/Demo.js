import React from "react";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import { useFetch } from "../../hooks/useFetch";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Demo = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10"
  );
  const [filter, setFilter] = React.useState("");

  const [currentSeleted, setCurrentSeleted] = React.useState(null);

  return (
    <section className="demo">
      <div className="demo__selected-item">
        {currentSeleted !== null ? (
          <Card title={currentSeleted.title} imgUrl={currentSeleted.url} />
        ) : (
          <h1>No Select</h1>
        )}
      </div>
      <div className="demo__search">
        <SearchBar
          onChange={(query) => {
            setFilter(query);
          }}
        />
      </div>
      <div className="demo__item-grid">
        {loading ? (
          <h5>loading</h5>
        ) : (
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            `}
          >
            {data
              ?.filter((item) => {
                return item.title.includes(filter);
              })
              .map((item) => {
                return (
                  <Card
                    key={item.id}
                    title={item.title}
                    imgUrl={item.thumbnailUrl}
                    onClick={() => {
                      setCurrentSeleted(item);
                    }}
                    style={
                      currentSeleted === item ? { border: "1px solid red" } : {}
                    }
                  />
                );
              })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Demo;
