import React, { useState } from "react";
import { mockData } from "../mockData";
import ReactCountryFlag from "react-country-flag";
import "./table.css";

function Table() {
  const [drivers, setDrivers] = useState(mockData);

  const addPoints = (number) => {
    // for(let driver of drivers){
    //   if (driver.number === number){
    //     driver.points +=5
    //     // console.log(driver.points)
    //   }
    // }
    // console.log('object drivers:' , drivers)
    // setDrivers(drivers)

    
    // const newDrivers = drivers;
    const newDriver = drivers.find((driver) => driver.number === number);

    // let index = newDrivers.findIndex((element) => {
    //   if (element.number === number) {
    //     return true;
    //   }
    // });

    newDriver.points += 5;
    console.log('driver:', newDriver)
    setDrivers(drivers)
  
    // newDrivers[index] = newDriver;
    //setDrivers(drivers);
  };

  const substractPoints = (number) => {
    // const newDrivers = drivers;
    const newDriver = drivers.find((driver) => driver.number === number);
    // let index = newDrivers.findIndex((element) => {
    //   if (element.number === number) {
    //     return true;
    //   }
    // });

    if (newDriver.points > 5) {
      newDriver.points -= 5;
    } else {
      newDriver.points = 0;
    }
    // newDrivers[index] = newDriver;
    // console.log(newDriver.points);
    console.log('driver:', newDriver)
    setDrivers(drivers);
  };

  console.log(drivers)

  return (
    <div>
      <table className="drivers">
        <thead>
          <tr>
            <th></th>
            <th>Driver</th>
            <th>Team</th>
            <th id="points-table">Points</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver, index) => (
            <tr key={driver.number}>
              <td className="id">{index + 1}</td>
              <td className="driver">
                <ReactCountryFlag countryCode={driver.country} svg />{" "}
                {driver.firstName} {driver.lastName}
              </td>
              <td className="team">{driver.team}</td>
              <td className="points">{driver.points}</td>
              <td>
                <button
                  className="add"
                  onClick={() => addPoints(driver.number)}
                >
                  + 5 points
                </button>{" "}
                <button className="substract" onClick={() => substractPoints(driver.number)}>
                  - 5 points
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
