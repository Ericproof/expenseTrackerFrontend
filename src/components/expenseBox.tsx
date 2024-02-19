"use client";
import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

const ExpenseBox = () => {
  const expensesData = [
    { category: "Coffee", amount: 75, comparison: "5% above average" },
    { category: "Food", amount: 240, comparison: "12% below average" },
    { category: "Alcohol", amount: 88, comparison: "5% above average" },
  ];

  return (
    <Box display="flex" justifyContent="center" minHeight="100vh" mt={2}>
      <Box maxWidth="sm" width="100%">
        {expensesData.map((expense) => (
          <Card key={expense.category} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {expense.category}
              </Typography>
              <Typography>${expense.amount} / week</Typography>
              <Typography
                color={
                  expense.comparison.includes("above") ? "error" : "success"
                }
              >
                {expense.comparison}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ExpenseBox;
