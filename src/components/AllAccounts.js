import React, { useEffect, useState } from "react";
import bank from "../services/Bank";

export default function AllAccounts() {
  const [accounts, setAccounts] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setAccounts({ ...bank.getAllAccounts() });
    }, 500); // refresh every 0.5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <h2>📊 All Accounts</h2>

      {Object.keys(accounts).length === 0 ? (
        <p>No accounts available</p>
      ) : (
        Object.entries(accounts).map(([acc, bal]) => (
          <div
            key={acc}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px",
              borderBottom: "1px solid #eee"
            }}
          >
            <span>{acc}</span>
            <span>₹ {bal}</span>
          </div>
        ))
      )}
    </div>
  );
}