import { useState, useEffect } from "react";
import "./index.css"

import axios from 'axios';
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  // Input,
  // Button
} from "reactstrap";
// import BookingForm from '../BookingForm'
// import { daysToWeeks } from "date-fns/esm";
// import { dataplex } from "googleapis/build/src/apis/dataplex";

const Practice = (props) => {
  const [totalAppointments, setTotalAppointments] = useState([]);

  // User's selections
  const [selection, setSelection] = useState({
    date: setTotalAppointments[0],
    time: null,
    services: "Select Services",
  });

  // List of services
  const [services] = useState(["Manicure 1", "Manicure 2", "Pedicure 2", "Facial"]);

  const [times] = useState([
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
  ]);
// eslint-disable-next-line
  const getDate = _ => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const date =
      months[selection.date.getMonth()] +
      " " +
      selection.date.getDate() +
      " " +
      selection.date.getFullYear();
    let time = selection.time.slice(0, -2);
    time = selection.time > 12 ? time + 12 + ":00" : time + ":00";
    console.log(time);
    const datetime = new Date(date + " " + time);
    return datetime;
  };

  const getEmptyDates = _ => {
    let availability = totalAppointments.filter(appointment => appointment.isAvailable);
    console.log('availableDates', availability)
    return availability
  };

  //get all dates whether available or not
  useEffect(() => {
    const getDates = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/availability",
        );
        setTotalAppointments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDates();
  }, []);
  // props.setPage(2);

  const getAvailDates = _ => {
    let newDates = [];
    getEmptyDates().forEach(date => {
      newDates.push(
        <DropdownItem
          key={date}
          className="booking-dropdown-item"
          onClick={_ => {
            let newSel = {
              ...selection,
              date: date
            };
            setSelection(newSel);
          }}
        >
          {date}
        </DropdownItem>
      );
    });
    return newDates;
  };

  // Generate services dropdown
  const getServices = _ => {
    let newServices = [];
    services.forEach(service => {
      newServices.push(
        <DropdownItem
          key={service}
          className="booking-dropdown-item"
          onClick={_ => {
            let newSel = {
              ...selection,
              services: service
            };
            setSelection(newSel);
          }}
        >
          {service}
        </DropdownItem>
      );
    });
    return newServices;
  };

  // Generate times dropdown
  const getTimes = _ => {
    let newTimes = [];
    times.forEach(time => {
      newTimes.push(
        <DropdownItem
          key={time}
          className="booking-dropdown-item"
          onClick={_ => {
            let newSel = {
              ...selection,
              time: time
            };
            setSelection(newSel);
          }}
        >
          {time}
        </DropdownItem>
      );
    });
    return newTimes;
  };

  // // Generating tables from available tables state
  // const getDate = _ => {
  //   console.log("Getting dates");
  //   if (getEmptyTables() > 0) {
  //     let tables = [];
  //     totalTables.forEach(table => {
  //       if (table.isAvailable) {
  //         tables.push(
  //           <Table
  //             key={table._id}
  //             id={table._id}
  //             chairs={table.capacity}
  //             name={table.name}
  //             empty
  //             selectTable={selectTable}
  //           />
  //         );
  //       } else {
  //         tables.push(
  //           <Table
  //             key={table._id}
  //             id={table._id}
  //             chairs={table.capacity}
  //             name={table.name}
  //             selectTable={selectTable}
  //           />
  //         );
  //       }
  //     });
  //     return tables;
  //   }
  // };

  return (
    <div>
        <div id="reservation-stuff">
          <Row noGutters className="text-center align-items-center">
            <Col xs="12" sm="3">
              <input
                type="date"
                required="required"
                className="booking-dropdown"
                value={getAvailDates()[0]}
                onChange={e => {
                  if (!isNaN(new Date(new Date(e.target.value)))) {
                    let newSel = {
                      ...selection,
                      date: new Date(e.target.value)
                    };
                    setSelection(newSel);
                  } else {
                    console.log("Invalid date");
                    let newSel = {
                      ...selection,
                      date: setTotalAppointments[0]
                    };
                    setSelection(newSel);
                  }
                }}
              ></input>
            </Col>

            <Col xs="12" sm="3">
              <UncontrolledDropdown>
                <DropdownToggle color="none" caret className="booking-dropdown">
                  {selection.time === null ? "Select a Time" : selection.time}
                </DropdownToggle>
                <DropdownMenu right className="booking-dropdown-menu">
                  {getTimes()}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>

            <Col xs="12" sm="3">
              <UncontrolledDropdown>
                <DropdownToggle color="none" caret className="booking-dropdown">
                  {selection.services}
                </DropdownToggle>
                <DropdownMenu right className="booking-dropdown-menu">
                  {getServices()}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
          </Row>
        </div>
        {/* <BookingForm date={selection.date} servicesList={selection.services}/> */}
    </div>
  );
};

export default Practice





// <div>
// {!selection.date && !selection.time && !selection.services ? (
//   <div id="reservation-stuff">
//     <Row noGutters className="text-center align-items-center">
//       <Col xs="12" sm="3">
//         <input
//           type="date"
//           required="required"
//           className="booking-dropdown"
//           value={getAvailDates()[0].toISOString().split("T")}
//           onChange={e => {
//             if (!isNaN(new Date(new Date(e.target.value)))) {
//               let newSel = {
//                 ...selection,
//                 date: new Date(e.target.value)
//               };
//               setSelection(newSel);
//             } else {
//               console.log("Invalid date");
//               let newSel = {
//                 ...selection,
//                 date: setTotalAppointments[0]
//               };
//               setSelection(newSel);
//             }
//           }}
//         ></input>
//       </Col>

//       <Col xs="12" sm="3">
//         <UncontrolledDropdown>
//           <DropdownToggle color="none" caret className="booking-dropdown">
//             {selection.time === null ? "Select a Time" : selection.time}
//           </DropdownToggle>
//           <DropdownMenu right className="booking-dropdown-menu">
//             {getTimes()}
//           </DropdownMenu>
//         </UncontrolledDropdown>
//       </Col>

//       <Col xs="12" sm="3">
//         <UncontrolledDropdown>
//           <DropdownToggle color="none" caret className="booking-dropdown">
//             {selection.services}
//           </DropdownToggle>
//           <DropdownMenu right className="booking-dropdown-menu">
//             {getServices()}
//           </DropdownMenu>
//         </UncontrolledDropdown>
//       </Col>
//     </Row>
//   </div>
// ) : (
//   <BookingForm date={selection.date} servicesList={selection.services}/>
// )}
// </div>
