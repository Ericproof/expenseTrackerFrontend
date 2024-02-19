"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

type ExpenseContextType = {
  isAdd: boolean;
  setIsAdd: React.Dispatch<React.SetStateAction<boolean>>;
};
type ExpenseProviderProps = {
  children: ReactNode;
};
const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

// create a Provider
export function ExpenseProvider({ children }: ExpenseProviderProps) {
  const [isAdd, setIsAdd] = useState(true);
  return (
    <ExpenseContext.Provider value={{ isAdd, setIsAdd }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpenseContxt() {
  const context = useContext(ExpenseContext);
  if (context === undefined) {
    throw new Error("useExpense must be used within an ExpenseProvider");
  }
  return context;
}
