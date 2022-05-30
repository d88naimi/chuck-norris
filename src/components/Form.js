import React, { useState } from "react";
// import Categories from "../Categories/Categories";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputSearch from "./InputSearch";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    bigRadio: {
      "& svg": {
        width: "28px",
        height: "28px",
        color: "#795a59",
      },
    },
    label: {
      fontSize: "18px",
    },
  })
);

const Form = ({ onClick, onCategoryChange, onQueryChange, clearState }) => {
  const classes = useStyles();
  const [value, setValue] = useState("a");
  const handleChange = (event) => {
    setValue(event.target.value);
    clearState();
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="a"
          control={<Radio />}
          label="Random"
          classes={{ label: classes.label }}
          onChange={handleChange}
        />
        <FormControlLabel
          value="b"
          control={<Radio />}
          label="From categories"
          classes={{ label: classes.label }}
          onChange={handleChange}
        />
        {/* {value === "b" && <Categories onSelect={onCategoryChange} />} */}
        <FormControlLabel
          value="c"
          control={<Radio />}
          label="Search"
          classes={{ label: classes.label }}
          onChange={handleChange}
        />
        {value === "c" && <InputSearch onQuery={onQueryChange} />}
      </RadioGroup>
      <Button
        variant="contained"
        type="submit"
        onClick={onClick}
        sx={{ mt: 1 }}
      >
        Get a joke
      </Button>
    </form>
  );
};

export default Form;
