import { db } from "../../auth/firebase";

const expenseListCollection = db.collection("expenseLists");

function addExpenseList(expenseList) {
  expenseListCollection
    .add(expenseList)
    .then(function () {
      console.log("Expense List added!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
}
