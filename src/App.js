import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
<div className="container">
      <h1 className="mt-3">My Budget App</h1>
      {/* // 3 rows below */}
      <div className="row mt-3">
        {/* // budget row */}
        <div className="col-sm">
          <Budget />
        </div>
        {/* // remaing row */}
        <div className="col-sm">
          <Remaining />
        </div>

        {/* // total expense spend */}
        <div className="col-sm">
          <ExpenseTotal />
        </div>
        {/* //  */}
      </div>
      {/* // 3 rows end  */}

      <h3 className="mt-3">Expenses</h3>
      {/* // expenses row and colmn  */}
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      {/* //  Expension Add Form */}
      <h3 className="mt-3">Add Expense</h3>

      <div className="mt-3">
        <div className="col-sm">
          <AddExpense />
        </div>
      </div>
    </div>
    </AppProvider> 
    
  );
};

export default App;
