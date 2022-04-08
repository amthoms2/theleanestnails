import { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/StaticDatePicker';
import { MainContainer } from './BookingElements';
// import { createTheme } from '@material-ui/core/styles'
// import { MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from "@material-ui/core/styles";
import "./styles.css";

// const theme = createTheme({
//   // "root": {
//   //   "&$selected": {
//   //     "backgroundColor": "none",
//   //     "color": "red"
//   //   }
//   // }

//   overrides: {
//       // using this instead will fix the warning:
//       // day: { // <- this is the root class
//       //   '&$selected': {
//       //     color: "red"
//       //   }
//       // },
//       "MuiPickersDay": {
//         "root": {
//           "& .Mui-selected": {
//                 "backgroundColor": "none",
//                 "color": "red"
//               }
//             }
//       }
//   },
// });

const Practice = () => {
  const [value, setValue] = useState(new Date());

  return (
    <>
      <MainContainer>
        {/* <MuiThemeProvider theme={theme}> */}
        <StylesProvider injectFirst>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              disableHighlightToday={true}
              orientation="landscape"
              openTo="day"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          </StylesProvider>
        {/* </MuiThemeProvider> */}
      </MainContainer>
    </>
  );
};

export default Practice;
