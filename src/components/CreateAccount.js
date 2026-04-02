import React, { useState } from "react";
import bank from "../services/Bank";

export default function CreateAccount({ setResult }) {
  const [accNo, setAccNo] = useState("");
  const [balance, setBalance] = useState("");

  return (
    <div className="card">
      <h2>Create Account</h2>

      <input
        placeholder="Account Number"
        onChange={(e) => setAccNo(e.target.value)}
      />

      <input
        placeholder="Initial Balance"
        onChange={(e) => setBalance(Number(e.target.value))}
      />

      <button
        className="blue"
        onClick={() => setResult(bank.createAccount(accNo, balance))}
      >
        Create
      </button>
    </div>
  );
}