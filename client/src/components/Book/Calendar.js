import { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

import { MainContainer, ServiceNames, NextButton } from './BookingElements';
import { services } from '../../data';
import BookingForm from './BookingForm';
import { StylesProvider } from '@material-ui/core/styles';
import './styles.css';


const Calendar = ({ selections, handleClick }) => {
    const myDates = ['Mon Apr 11 2022', 'Tues Apr 12 2022', 'Sun Apr 10 2022'];

  const [value, setValue] = useState(myDates[0]);
  const [formPageView, setFormPageView] = useState(false);

 const disableDates = (date) => {
  return !myDates
    .map((myDate) => new Date(myDate).getTime())
    .includes(date.getTime());
};

  const selectedServices = services.filter((service) => {
    return selections.includes(service.id);
  });

  const serviceName = selectedServices.map((service) => {
    return ' ' + service.name;
  });

  const handleForm = () => {
    setFormPageView(!formPageView);
  };

  return (
    <>
      <MainContainer>
        {formPageView ? (
          <BookingForm
            handleClick={handleClick}
            date={value}
            servicesList={serviceName}
          />
        ) : (
          <>
            <NextButton onClick={handleClick}>Go back</NextButton>
            <StylesProvider injectFirst>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                {/* <button onClick={handleClick}>Go back</button> */}
                <MobileDatePicker
                  shouldDisableDate={disableDates}
                  disableHighlightToday={true}
                  label="Select Date"
                  value={value || null}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </StylesProvider>
            {/* <button onClick={handleForm}>Next</button>
          <div>{serviceName}</div> */}
            <NextButton onClick={handleForm}>Next</NextButton>
          </>
        )}
        <ServiceNames>Services: {serviceName + ' '}</ServiceNames>
      </MainContainer>
    </>
  );
};

export default Calendar;


// const disableDates = (date) => {
//   return !myDates
//     .map((myDate) => new Date(myDate).getTime())
//     .includes(date.getTime());
// };
