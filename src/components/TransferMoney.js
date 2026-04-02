import React, { useState } from "react";
import bank from "../services/Bank";

export default function TransferMoney({ setResult }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="card full">
      <h2>Transfer Money</h2>

      <input placeholder="From Account" onChange={(e) => setFrom(e.target.value)} />
      <input placeholder="To Account" onChange={(e) => setTo(e.target.value)} />
      <input
        placeholder="Amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button
        className="purple"
        onClick={() => setResult(bank.transfer(from, to, amount))}
      >
        Transfer
      </button>
    </div>
  );
}