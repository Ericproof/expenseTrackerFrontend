import AddExpense from "@/components/addExpense";
import { Box } from "@mui/material";
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
