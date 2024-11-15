import { View, StyleSheet } from "react-native";
import ExpenseSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2024-11-14')
    },
    {
        id: 'e2',
        description: 'Food',
        amount: 9.99,
        date: new Date('2023-11-14')
    },
    {
        id: 'e3',
        description: 'Internet',
        amount: 30.2,
        date: new Date('2024-10-28')
    }
]

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpenseSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}  />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1
    }
});