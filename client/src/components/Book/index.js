import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { services } from '../../data';
import { MainContainer, DataGridWrapper, NextButton } from './BookingElements';
import Calendar from './Calendar';
import { styled } from '@mui/styles';
import Navbar from '../Navbar';

const Book = () => {
  const [selectionModel, setSelectionModel] = useState([]);
  const [bookingPageView, setBookingPageView] = useState(true);
  // const [disable, setDisable] = useState(true)

  const columns = [
    {
      field: 'services',
      headerName: 'Select Services',
      width: 230,
      renderCell: (params) => {
        return <>{params.row.name}</>;
      },
    },
  ];

  const Next = styled(Button)({
    color: '#43e4db',
  });

  const CustomFooterStatusComponent = () => {
    return (
      <Box sx={{ padding: '10px', display: 'flex' }}>
        <Next variant="contained" onClick={handleClick}>
          Next
        </Next>
      </Box>
    );
  };

  const handleClick = () => {
    setBookingPageView(!bookingPageView);
    console.log(selectionModel);
  };

  return (
    <>
      <Navbar displayNavMenu={false} />
      {bookingPageView ? (
        <MainContainer>
          <DataGridWrapper>
            <DataGrid
              sx={{
                boxShadow: 1,
                border: 1,
                color: '#FFFFFF',
                borderColor: 'primary.light',
                '& .MuiDataGrid-cell:hover': {
                  color: 'primary.main',
                },
              }}
              rows={services}
              columns={columns}
              getRowId={(row) => row.id}
              rowsPerPageOptions={[10]}
              checkboxSelection
              hideFooterPagination
              disableSelectionOnClick
              onSelectionModelChange={(newSelectionModel) => {
                setSelectionModel(newSelectionModel);
              }}
              selectionModel={selectionModel}
              components={{
                Footer: CustomFooterStatusComponent,
              }}
            />
          </DataGridWrapper>
          <NextButton style={{ position: 'absolute', bottom: 0 }}>Cancel or Modify an Appointment</NextButton>
        </MainContainer>
      ) : (
        <Calendar selections={selectionModel} handleClick={handleClick} />
      )}
    </>
  );
};

export default Book;
