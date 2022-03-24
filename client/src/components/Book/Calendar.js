import { useState } from 'react';
// import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { MainContainer, ServiceNames, NextButton } from './BookingElements';
import { services } from '../../data';
import BookingForm from './BookingForm';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/styles';

//FIX ISSUE FOR DISABLED DAYS!!

const Calendar = ({ selections, handleClick }) => {
  const [value, setValue] = useState(new Date());
  const [formPageView, setFormPageView] = useState(false);

  const myDates = ['Wed Mar 24 2022', 'Wed Mar 25 2022', 'Wed Mar 26 2022', 'Wed Mar 247 2022'];

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

  // const NextButton = styled(Button)({
  //   color: '#43e4db',
  // });

  // const ServiceNames = styled('div')({
  //   color: '#43e4db',
  // });

  return (
    <>
      <MainContainer>
        {/* <NextButton onClick={handleClick}>Go back</NextButton> */}
        {formPageView ? (
          <BookingForm
            handleClick={handleClick}
            date={value}
            servicesList={serviceName}
          />
        ) : (
          <>
            {/* <MainContainer> */}
            <NextButton onClick={handleClick}>Go back</NextButton>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              {/* <button onClick={handleClick}>Go back</button> */}
              <StaticDatePicker
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
                sx={{
                  '& .PrivateDatePickerToolbar-penIcon': { display: 'none' },
                }}
                // components={{
                //   Footer: CustomFooterStatusComponent,
                // }}
              />
              {/* </MainContainer> */}
            </LocalizationProvider>

            {/* <button onClick={handleForm}>Next</button>
          <div>{serviceName}</div> */}
            <NextButton onClick={handleForm}>Next</NextButton>
            {/* </MainContainer> */}
          </>
        )}
        <ServiceNames>Services: {serviceName + ' '}</ServiceNames>
      </MainContainer>
    </>
  );
};

export default Calendar;
