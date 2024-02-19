"use client";
import React from "react";
import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Link from "next/link";
const AddExpense = () => {
  const [expenses, setExpenses] = useState({
    coffee: "",
    food: "",
    alcohol: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [name]: value,
    }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your submit logic here, such as sending data to an API
    console.log(expenses);
  };
  return (
    <Box display="flex" justifyContent="center" minHeight="100vh" mt={2}>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={3}>
              <Typography>Coffee</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                name="coffee"
                value={expenses.coffee}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                sx={{
                  width: "75%",
                }}
              />
            </Grid>

            <Grid item xs={3}>
              <Typography>Food</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                name="food"
                value={expenses.food}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                sx={{
                  width: "75%",
                }}
              />
            </Grid>

            <Grid item xs={3}>
              <Typography>Alcohol</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                name="alcohol"
                value={expenses.alcohol}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                sx={{
                  width: "75%",
                }}
              />
            </Grid>
          </Grid>
          <Box mt={2}>
            <Link href="/">
              <Button variant="outlined" sx={{ mr: 2 }}>
                Back
              </Button>
            </Link>
            <Button type="submit" variant="contained" color="primary">
              Add expenses
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};
export default AddExpense;
