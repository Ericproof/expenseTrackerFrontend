import AddExpense from "@/components/addExpense";
import { Box, Container } from "@mui/material";
import AddHeader from "@/components/add-header";
const addPage = () => {
  return (
    <Box>
      <AddHeader />
      <AddExpense />
    </Box>
  );
};
export default addPage;
