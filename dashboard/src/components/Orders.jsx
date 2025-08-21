import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders">
      <h2>Orders Page</h2>
      <p>You haven't placed any orders today.</p>

      <Link to="/dashboard" className="btn">
        Back to Summary
      </Link>
    </div>
  );
};

export default Orders;
