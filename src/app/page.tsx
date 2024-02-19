import Image from "next/image";
import styles from "./page.module.css";
import ExpenseBox from "@/components/expenseBox";
import HomeHeader from "@/components/home-header";
import { ExpenseProvider } from "@/context/expenseContext";

export default function Home() {
  return (
    <main className={styles.main}>
      <ExpenseProvider>
        <HomeHeader />
        <ExpenseBox />
      </ExpenseProvider>
    </main>
  );
}
