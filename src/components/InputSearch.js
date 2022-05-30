import React, { useEffect, useRef } from "react";

const InputSearch = ({ onQuery }) => {
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const onChange = (event) => {
    onQuery(event);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(event) => onChange(event.target.value)}
        ref={inputEl}
        placeholder="Search"
      />
    </div>
  );
};

export default InputSearch;
