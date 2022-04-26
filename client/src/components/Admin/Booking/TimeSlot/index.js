import { useState } from 'react';
import {
  Top,
  Left,
  EditButton,
  Item,
  // Image,
  Details,
  ItemTitle,
  ItemDetail,
  ItemKey,
  ItemValue,
} from '../../Product/ProductElements';
import { Right, Button, Bottom } from '../BookingElements'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import moment from 'moment';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { timeSlots } from '../../../../data';

const ViewTimeSlot = () => {
  let navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');

  const location = useLocation();
  const slotId = location.pathname.split('/')[3];
  // eslint-disable-next-line
  const slot = timeSlots.find((slot) => (slot._id == slotId));
  // const [allSlots, setAllSlots] = useState([]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = async () => {
    //CREATE FUNCTION TO CHECK FOR IS AVAILABLE!!!
    try {
        await axios.put(`/api/availability/${slotId}`, {date: value});
        navigate("/admin/time-slots", { replace: true });
    } catch (err) {
      console.log(err);
      alert('Something went wrong!')
    }
  };

  return (
    <>
      <Top>
        <Left>
          <EditButton onClick={() => setVisible(!visible)}>Edit</EditButton>
          <Item>
            <Details>
              <ItemDetail>
                <ItemKey>Date:</ItemKey>
                <ItemValue>{moment(slot.date).format('YYYY-MM-DD, h:mm a')}</ItemValue>
              </ItemDetail>

              <ItemDetail>
                <ItemKey>Is this still available?</ItemKey>
                <ItemValue>{slot.isAvailable}</ItemValue>
              </ItemDetail>
            </Details>
          </Item>
        </Left>

        <Right>
          <Item>
          <ItemTitle>Bookings?</ItemTitle>
            <Details>
              <ItemDetail>
              <ItemKey>Name:</ItemKey>
              <ItemValue>Name</ItemValue>
              </ItemDetail>

              <ItemDetail>
              <ItemKey>Email:</ItemKey>
              <ItemValue>Email</ItemValue>
              </ItemDetail>

              <ItemDetail>
              <ItemKey>Phone:</ItemKey>
              <ItemValue>Phone</ItemValue>
              </ItemDetail>

              <ItemDetail>
              <ItemKey>Comments:</ItemKey>
              <ItemValue>Comments</ItemValue>
              </ItemDetail>

              <ItemDetail>
              <ItemKey>Services:</ItemKey>
              <ItemValue>Services</ItemValue>
              </ItemDetail>

            </Details>
          </Item>
        </Right>
      </Top>
      {visible === true &&
      <Bottom>
        {/* <Left> */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              disablePast
              label="Pick Date & Time"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        {/* </Left> */}
        <Button style={{}} disabled={!value} onClick={handleSubmit}>Update Slot</Button>
      </Bottom>
      }
    </>
  );
};

export default ViewTimeSlot;
