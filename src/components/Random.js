import React, { useEffect, useState } from "react";
import getJokes from "../api/getJokes";
import getQueryJoke from "../api/getQueryJoke";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Form from "./Form";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Random() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [randomJoke, setRandomJoke] = useState([]);
  const [searchJoke, setSearchJoke] = useState([]);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    let randomJoke = getJokes();
    randomJoke.then((joke) => {
      return setRandomJoke(joke);
    });
  }, []);

  const handleSearchJoke = async (evt) => {
    getQueryJoke();
  };

  useEffect(() => {
    let getSearchJoke = getQueryJoke(query);

    getSearchJoke.then((joke) => {
      return setSearchJoke(joke);
    });
  }, [query]);

  const clearState = () => {
    setSelectedCategory("");
    setQuery("");
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleQueryChange = (query) => {
    setSelectedCategory("");
    setQuery(query);
  };

  console.log(randomJoke);
  console.log(searchJoke);
  return (
    <div>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Random Joke of the Day
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {randomJoke.value}
          </Typography>
          <Form
            clearState={clearState}
            onClick={handleSearchJoke}
            onCategoryChange={handleCategoryChange}
            onQueryChange={handleQueryChange}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default Random;
