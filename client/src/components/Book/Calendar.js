import { useState } from 'react';
// import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/StaticDatePicker';
import { MainContainer, ServiceNames, NextButton } from './BookingElements';
import { services } from '../../data';
import BookingForm from './BookingForm';
import { StylesProvider } from "@material-ui/core/styles";
import "./styles.css";

//FIX ISSUE FOR DISABLED DAYS!!

const Calendar = ({ selections, handleClick }) => {
  const [value, setValue] = useState(new Date());
  const [formPageView, setFormPageView] = useState(false);

  const myDates = ['Mon Apr 11 2022', 'Tues Apr 12 2022'];

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
              <DatePicker
                shouldDisableDate={disableDates}
                disableHighlightToday={true}
                orientation="landscape"
                openTo="day"
                value={value}
                disablePast
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
