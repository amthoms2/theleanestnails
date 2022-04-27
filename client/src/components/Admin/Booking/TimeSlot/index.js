import { useState, useEffect } from 'react';
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
import { Right, Button, Bottom } from '../BookingElements';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { timeSlots } from '../../../../data';

const ViewTimeSlot = () => {
  let navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const [singleSlot, setSingleSlot] = useState({});
  const [allBookings, setAllBookings] = useState([]);

  const location = useLocation();
  const slotId = location.pathname.split('/')[3];
  const booking = allBookings.find((booking) => booking.availability === slotId);

  const handleChange = (newValue) => {
    console.log(moment(value).format('LT'));
    setValue(newValue);
  };

  const handleSubmit = async () => {
    //CREATE FUNCTION TO CHECK FOR IS AVAILABLE!!!
    try {
      if(booking !== undefined){
        let time = moment(value).format('LT');
        await axios.put(`/api/availability/${slotId}`, { date: value });
        await axios.put(`/api/booking/update/${booking._id}`, { date: value, time: time })
      } else {
        await axios.put(`/api/availability/${slotId}`, { date: value });
      }
      navigate('/admin/time-slots', { replace: true });
    } catch (err) {
      console.log(err);
      alert('Something went wrong!');
    }
  };

  useEffect(() => {
    const getSlot = async () => {
      try {
        const res = await axios.get(`/api/availability/find/${slotId}`);
        setSingleSlot(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSlot();
    console.log('rendered again');
  }, [slotId]);

  useEffect(() => {
    const getBooking = async () => {
      try {
        const res = await axios.get(`/api/booking`);
        setAllBookings(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBooking();
    console.log('rendered again');
  }, []);

  return (
    <>
      <Top>
        <Left>
          <EditButton onClick={() => setVisible(!visible)}>Edit</EditButton>
          <Item>
            <Details>
              <ItemDetail>
                <ItemKey>Date:</ItemKey>
                <ItemValue>
                  {moment(singleSlot.date).format('YYYY-MM-DD, h:mm a')}
                </ItemValue>
              </ItemDetail>

              <ItemDetail>
                <ItemKey>Is this still available?</ItemKey>
                <ItemValue>{singleSlot.isAvailable}</ItemValue>
              </ItemDetail>
            </Details>
          </Item>
        </Left>

        {booking !== undefined && (
          <Right>
            <Item key={booking._id}>
              <ItemTitle>Booking:</ItemTitle>
              <Details>
                <ItemDetail>
                  <ItemKey>Name:</ItemKey>
                  <ItemValue>{booking.name}</ItemValue>
                </ItemDetail>

                <ItemDetail>
                  <ItemKey>Email:</ItemKey>
                  <ItemValue>{booking.email}</ItemValue>
                </ItemDetail>

                <ItemDetail>
                  <ItemKey>Phone:</ItemKey>
                  <ItemValue>{booking.number}</ItemValue>
                </ItemDetail>

                <ItemDetail>
                  <ItemKey>Comments:</ItemKey>
                  <ItemValue>{booking.comments}</ItemValue>
                </ItemDetail>

                <ItemDetail>
                  <ItemKey>Services:</ItemKey>
                  <ItemValue>
                    Services
                    {/* <ul>
                    {booking.services.forEach(service => <li>{service}</li> )}
                    </ul> */}

                    </ItemValue>
                </ItemDetail>
              </Details>
            </Item>
          </Right>
        )}
      </Top>

      {visible === true && (
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
          <Button style={{}} disabled={!value} onClick={handleSubmit}>
            Update Slot
          </Button>
        </Bottom>
      )}
    </>
  );
};

export default ViewTimeSlot;
