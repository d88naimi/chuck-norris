import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Random from "./Random";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HomeContainer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Box>
              <h1>Chuck Norris Jokes</h1>
              <img src="" alt="" />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item>
            <Random />
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Favorited</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
