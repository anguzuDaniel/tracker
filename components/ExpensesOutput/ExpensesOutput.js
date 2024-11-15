import { View, FlatList, Text } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View>
            <ExpenseSummary expenses={expenses} periodName={expensesPeriod}  />
            <ExpenseList />
        </View>
    );
}

export default ExpensesOutput;