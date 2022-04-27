import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  ListContainer,
  Title,
  EditButton,
  DeleteButton,
  ItemLink,} from '../DataTableElements';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
// import { bookingsData } from '../../../../data';

const SlotsTable = () => {
  let navigate = useNavigate();
  const [allSlots, setAllSlots] = useState([]);

  const deleteButton = (id) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure? This item will be permanently deleted.',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              const slot = await axios.get(`/api/availability/find/${id}`);
              console.log('slot in db', slot)

              if(slot.data.isAvailable === true){
                console.log('isAvailable is true!!')
                await axios.delete(`/api/availability/${id}`);
              } else {
                console.log('isAvailable is false!!')
                const booking = await axios.get(`/api/booking/available/${id}`);

                await axios.delete(`/api/booking/${booking.data._id}`);
                await axios.delete(`/api/availability/${id}`);
              }
              navigate("/admin", { replace: true });
          } catch (err) {
            console.log(err);
            alert('Something went wrong!')
          }
          },
        },
        {
          label: 'No',
        },
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 140 },
    { field: 'date', headerName: 'Date', width: 180 },
    { field: 'isAvailable', headerName: 'Still Available?', width: 160 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/admin/time-slots/' + params.row._id}>
              <EditButton>View</EditButton>
            </Link>
            <DeleteButton
              onClick={() => deleteButton(params.row._id)}
            />
          </>
        );
      },
    },
  ];

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

  return (
    <>
      <ListContainer>
        <Title>
          <ItemLink to="/admin/time-slots/new">
            Add New Slot
          </ItemLink>
        </Title>
        <DataGrid
          rows={allSlots}
          getRowId={(row) => row._id}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          disableSelectionOnClick
        />
      </ListContainer>
    </>
  );
};

export default SlotsTable;
