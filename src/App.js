import React from "react";
//import { mockData } from '../components/Table';
import Table from "./components/Table";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <div className="container">
      <h1 className="title">Formula 1 Standings</h1>
      <div className="container">
        <div className="table">
          <Table />
        </div>
        <div className="leaderboard">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}

export default App;
