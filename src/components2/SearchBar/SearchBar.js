import React from "react";

const SearchBar = ({ onChange }) => {
  const [query, setQuery] = React.useState("");

  const hanldeOnChange = (e) => {
    setQuery(e.target.value);
  };
  React.useEffect(() => {
    onChange(query);
  }, [query]);

  return <input value={query} onChange={hanldeOnChange} />;
};

export default SearchBar;
