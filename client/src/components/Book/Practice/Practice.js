import { useState, useEffect } from 'react';
// import * as React from "react";
import './index.css';
import '../styles.css';
import { MultiSelect } from 'react-multi-select-component';
import Select from 'react-select';
import axios from 'axios';
import moment from 'moment';
import TextField from '@mui/material/TextField';
import BookingForm from '../BookingForm';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { StylesProvider } from '@material-ui/core/styles';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { BookingContainer, Other } from '../BookingElements';

// import { daysToWeeks } from "date-fns/esm";
// import { dataplex } from "googleapis/build/src/apis/dataplex";
const options = [
  { label: 'Manicure 💅🏾', value: 'manicure' },
  { label: 'Pedicure 🦶🏾', value: 'pedicure' },
  { label: 'Strawberry 🍓', value: 'strawberry', disabled: true },
];

const Practice = (props) => {
  const [availableDates, setAvailableDates] = useState([]);
  const [selected, setSelected] = useState([]);
  const [value, setValue] = useState('');
  const [time, setTime] = useState({})
  // const [currentSlots, setCurrentSlots] = useState([{}] -> (availability obj));

  /*
  get all appointments (useeffect1 - total appts)
  trigger when value changes (useeffect2 - value)
  useeffect2, take the appts and filter them to only total available time slots
     ^currentslots - map
  use id to create and find availability

  */

  const handleDateChange = (date) => {
    const updatedDate = new Date(date);
    setValue(updatedDate);
  };

  useEffect(() => {
    const getDates = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/availability');
        setAvailableDates(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDates();
    console.log('rendered again')
  }, []);

  console.log('availabledates',availableDates)

  // useEffect(() => {
  //   effect
  //   return () => {

  //   }
  // }, [value])
  const filterTimes = () => {
    let getValueDay = moment(value).format('YYYY-MM-DD');
    // let getTimeDay = moment(time).format('YYYY-MM-DD');

    let items = availableDates.filter(item => {
        return moment(item.date).format('YYYY-MM-DD') === getValueDay
    })
    return items
  }
  console.log('filter',filterTimes())


  const slotOptions = () => {
    return filterTimes().map((currentSlot) => {
      let date = new Date(currentSlot.date);
      return {
        label: moment(date).format('LT'),
        value: currentSlot,
        // key: currentSlot._id
      };
    });
  };

  console.log('time', time)
  return (
    <BookingContainer>
      <Other>
        <div class="content">
          <h2 class="text-center">Select a Date</h2>
          <div class="container text-left">
            <div class="row justify-content-center">
              <div class="col-7 text-center">
                <p>Choose from</p>
                <StylesProvider injectFirst>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      // shouldDisableDate={disableDates}
                      disableHighlightToday={true}
                      label={'MM/DD/YYYY'}
                      value={value || null}
                      onChange={handleDateChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </StylesProvider>
              </div>
            </div>
          </div>
        </div>

        <div class="content">
          <h2 class="text-center">Select Time</h2>
          <div class="container text-left">
            <div class="row justify-content-center">
              <div class="col-7 text-center">
                <p>Choose from</p>
                {/* <pre>{JSON.stringify(selected)}</pre> */}
                <Select
                  options={slotOptions()}
                  value={time}
                  onChange={(newValue) => {
                    setTime(newValue);
                  }}
                  labelledBy="Select"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="content">
          <h2 class="text-center">Select Services</h2>
          <div class="container text-left">
            <div class="row justify-content-center">
              <div class="col-7 text-center">
                <p>Multiple services can be selected</p>
                {/* <pre>{JSON.stringify(selected)}</pre> */}
                <MultiSelect
                  // className="multi"
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                />
              </div>
            </div>
          </div>
        </div>
      </Other>
      <BookingForm date={value} servicesList={selected} time={time} />
    </BookingContainer>
  );
};

export default Practice;
