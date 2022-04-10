import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalexp = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalexp >= budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining : ${budget - totalexp}</span>
    </div>
  );
};

export default Remaining;
