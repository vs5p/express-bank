import React, { useState } from "react";
import "./styles.css";
import CreateAccount from "./components/CreateAccount";
import CheckBalance from "./components/CheckBalance";
import TransferMoney from "./components/TransferMoney";
import AllAccounts from "./components/AllAccounts";

export default function App() {
  const [result, setResult] = useState("");

  return (
    <div className="container">
      <h1 className="title">🏦 Express Banking System</h1>

      <div className="layout">
        <div className="left">
          <CreateAccount setResult={setResult} />
          <CheckBalance setResult={setResult} />
          <TransferMoney setResult={setResult} />
        </div>

        <div className="right">
          <AllAccounts />
          <div className="result" style={{ marginTop: "20px" }}>
    Result: {result}
  </div>
        </div>
      </div>

    </div>
  );
} 