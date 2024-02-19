"use client";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import { useExpenseContxt } from "@/context/expenseContext";
import { useState } from "react";
const HomeHeader = () => {
  // const { isAdd, setIsAdd } = useExpenseContxt();
  const { isAdd, setIsAdd } = useExpenseContxt();
  const onChangeHandle = () => {
    setIsAdd(!isAdd);
  };

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Am I spending too much?
        </Typography>
        <Box sx={{ flexGrow: 0 }}>
          {isAdd ? (
            <Link href="/edit-expense" passHref>
              <Button variant="outlined" color="primary">
                Edit expenses
              </Button>
            </Link>
          ) : (
            <Link href="/add-expense" passHref>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                Add expenses
              </Button>
            </Link>
          )}
          <button onClick={onChangeHandle}>IsAdd</button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HomeHeader;
