import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';
import {
  Top,
  H1,
  Bottom,
  Left,
  Right,
  List,
  Button,
} from '../BookingElements';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const TimeSlot = () => {
  let navigate = useNavigate();
  const [value, setValue] = useState('');
  const [allSlots, setAllSlots] = useState([]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = async () => {
    try {
        const res = await axios.post('/api/availability/newdate', {date: value});
        console.log('res in fe', res)
        navigate("/admin/time-slots", { replace: true });
    } catch (err) {
      console.log(err);
      alert('Something went wrong!')
    }
  };

  useEffect(() => {
    const getSlots = async () => {
      try {
        const res = await axios.get('/api/availability/all');
        setAllSlots(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSlots();
    console.log('rendered again');
  }, []);

  const getCurrentDay = () => {
    let getSelectedDay = moment(value).format('YYYY-MM-DD');
    let currentSlots = allSlots.filter((item) => {
      return moment(item.date).format('YYYY-MM-DD') === getSelectedDay;
    });
    return currentSlots;
  };
  return (
    <>
      <Top>
        <H1>Create Booking Slot</H1>
      </Top>
      <Bottom>
        <Left>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              disablePast
              label="Pick Date & Time"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Left>
        <Button disabled={!value} onClick={handleSubmit}>Create New Slot</Button>
      </Bottom>

      {value && (
        <Top>
          <Right>
            <h3>Current Time Slots on this Day:</h3>
            <>
              <List>
                {getCurrentDay().length > 0 &&
                  getCurrentDay().map((slot) => (
                    <>
                      <li key={slot._id}>
                        {moment(slot.date).format('YYYY-MM-DD, h:mm a')}
                      </li>
                      <p>Still Available? {slot.isAvailable.toString()}</p>
                    </>
                  ))}
              </List>
            </>
          </Right>
        </Top>
      )}
    </>
  );
};

export default TimeSlot;

