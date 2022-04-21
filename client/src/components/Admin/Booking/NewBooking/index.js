import { useState } from 'react';
import { Top, H1, Bottom, Left, Right } from "./BookingElements";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const New = () => {
  const [value, setValue] = useState('');
  const handleChange = (newValue) => {
    setValue(newValue);
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
          label="Pick Date & Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
      </Left>
    </Bottom>
    <Right>
      rendered?
    </Right>
    </>
  )
}

export default New
