import { useState, useEffect } from 'react';
import './index.css';
import './styles.css';
import { MultiSelect } from 'react-multi-select-component';
import Select from 'react-select';
import axios from 'axios';
import moment from 'moment';
import TextField from '@mui/material/TextField';
import BookingForm from './BookingForm';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { StylesProvider } from '@material-ui/core/styles';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { BookingContainer, Other } from './BookingElements';

const options = [
  { label: 'Manicure 💅🏾', value: 'manicure' },
  { label: 'Pedicure 🦶🏾', value: 'pedicure' },
  { label: 'Strawberry 🍓', value: 'strawberry', disabled: true },
];

const Booking = () => {
  const [availableDates, setAvailableDates] = useState([]);
  const [selected, setSelected] = useState([]);
  const [value, setValue] = useState('');
  const [time, setTime] = useState({});

  const handleDateChange = (date) => {
    const updatedDate = new Date(date);
    setValue(updatedDate);
  };

  useEffect(() => {
    const getDates = async () => {
      try {
        const res = await axios.get('/api/availability');
        setAvailableDates(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDates();
    console.log('rendered again');
  }, []);

  const filterTimes = () => {
    let getValueDay = moment(value).format('YYYY-MM-DD');

    let items = availableDates.filter((item) => {
      return moment(item.date).format('YYYY-MM-DD') === getValueDay;
    });
    return items;
  };

  const slotOptions = () => {
    return filterTimes().map((currentSlot) => {
      let date = new Date(currentSlot.date);
      return {
        label: moment(date).format('LT'),
        value: currentSlot,
      };
    });
  };

  const disableDates = (date) => {
    if (availableDates.length >= 1) {
      return !availableDates
        .map((myDate) => moment(myDate.date).format('YYYY-MM-DD'))
        .includes(moment(date).format('YYYY-MM-DD'));
    } else {
      return date
    }
  };

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
                      shouldDisableDate={disableDates}
                      disablePast
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
                <MultiSelect
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

export default Booking;
