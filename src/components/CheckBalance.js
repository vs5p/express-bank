import React, { useState } from "react";
import bank from "../services/Bank";

export default function CheckBalance({ setResult }) {
  const [accNo, setAccNo] = useState("");

  return (
    <div className="card">
      <h2>Check Balance</h2>

      <input
        placeholder="Account Number"
        onChange={(e) => setAccNo(e.target.value)}
      />

      <button
        className="green"
        onClick={() => setResult(bank.getBalance(accNo))}
      >
        Check
      </button>
    </div>
  );
}