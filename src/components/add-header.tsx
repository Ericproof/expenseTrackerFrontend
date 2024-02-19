import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const AddHeader = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          How much I spend today?
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default AddHeader;
