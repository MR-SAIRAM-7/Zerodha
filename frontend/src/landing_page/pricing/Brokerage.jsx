import { useState } from "react";

export default function Brokerage() {
  const [activeTab, setActiveTab] = useState("Equity");

  const renderTable = () => {
    switch (activeTab) {
      case "Equity":
        return (
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>Equity delivery</th>
                <th>Equity intraday</th>
                <th>F&O - Futures</th>
                <th>F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Zero Brokerage</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>₹20/executed order</td>
              </tr>
              <tr>
                <td>STT: 0.1% on buy & sell</td>
                <td>STT: 0.025% on sell side</td>
                <td>STT: 0.02% on sell side</td>
                <td>
                  0.125% of intrinsic value (exercised) <br />
                  0.1% on sell side (premium)
                </td>
              </tr>
              <tr>
                <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
                <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
                <td>NSE: 0.00173%</td>
                <td>
                  NSE: 0.03503% (premium) <br /> BSE: 0.0325% (premium)
                </td>
              </tr>
              <tr>
                <td colSpan={4}>GST: 18% on (brokerage + SEBI + transaction)</td>
              </tr>
              <tr>
                <td colSpan={4}>SEBI: ₹10 / crore</td>
              </tr>
              <tr>
                <td>0.015% or ₹1500/crore</td>
                <td>0.003% or ₹300/crore</td>
                <td>0.002% or ₹200/crore</td>
                <td>0.003% or ₹300/crore</td>
              </tr>
            </tbody>
          </table>
        );

      case "Currency":
        return (
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>Currency futures</th>
                <th>Currency options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.03% or ₹20/executed order</td>
                <td>₹20/executed order</td>
              </tr>
              <tr>
                <td>No STT</td>
                <td>No STT</td>
              </tr>
              <tr>
                <td>NSE: 0.00035% <br /> BSE: 0.00045%</td>
                <td>NSE: 0.0311% <br /> BSE: 0.001%</td>
              </tr>
              <tr>
                <td colSpan={2}>GST: 18% on (brokerage + SEBI + transaction)</td>
              </tr>
              <tr>
                <td colSpan={2}>SEBI: ₹10 / crore</td>
              </tr>
              <tr>
                <td>0.0001% or ₹10/crore</td>
                <td>0.0001% or ₹10/crore</td>
              </tr>
            </tbody>
          </table>
        );

      case "Commodity":
        return (
          <table className="table table-bordered text-center text-muted">
            <thead>
              <tr>
                <th>Commodity futures</th>
                <th>Commodity options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.03% or ₹20/executed order</td>
                <td>₹20/executed order</td>
              </tr>
              <tr>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>
              <tr>
                <td>MCX: 0.0021% <br /> NSE: 0.0001%</td>
                <td>MCX: 0.0418% <br /> NSE: 0.001%</td>
              </tr>
              <tr>
                <td colSpan={2}>GST: 18% on (brokerage + SEBI + transaction)</td>
              </tr>
              <tr>
                <td>
                  Agri: ₹1/crore <br />
                  Non-Agri: ₹10/crore
                </td>
                <td>₹10/crore</td>
              </tr>
              <tr>
                <td>0.002% or ₹200/crore</td>
                <td>0.003% or ₹300/crore</td>
              </tr>
            </tbody>
          </table>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-muted">Brokerage Charges</h2>
      <ul className="nav nav-tabs justify-content-center mb-4">
        {["Equity", "Currency", "Commodity"].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
      {renderTable()}
    </div>
  );
}
