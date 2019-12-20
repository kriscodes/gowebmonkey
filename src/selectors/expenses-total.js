export default (expenses) => {
    let sum = 0;

    if(Array.isArray(expenses)) {
        expenses.map((expense) => {
            sum += expense.amount;
        });
        return sum;
    }
    else
        return expenses.amount;
};