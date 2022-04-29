import {
  ListContainer,
  // Item,
  Title,
  // ProductButton,
  EditButton,
  // Image,
  DeleteButton,
  ItemLink,} from '../DataTableElements';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { bookingsData } from '../../../../data';

const BookingsTable = () => {
  const deleteButton = (id) => {
    // deleteProducts(id, dispatch)
    console.log('delete', id);
    // const filteredRow = data.filter((row) => row.id !== id);
    // setData(filteredRow);

    // const confirmed = window.confirm("Are you sure?");
    // if(confirmed) {
    //   deleteProducts(id, dispatch)
    // }
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure? This item will be permanently deleted.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            // deleteProducts(id, dispatch);
            // Delete the img file with product!

            // const storage = getStorage(app);
            // const desertRef = ref(storage, img);
            // deleteObject(desertRef)
            //   .then(() => {
            //     // File deleted successfully
            //   })
            //   .catch((error) => {
            //     console.log(error);
            //   });
          },
        },
        {
          label: 'No',
          // onClick: () => console.log("row Id", id),
        },
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  const columns = [

    { field: 'name', headerName: 'Name', width: 160 },
    { field: 'email', headerName: 'Email', width: 160 },
    { field: 'number', headerName: 'Number', width: 160},
    { field: 'date', headerName: 'Date', width: 160},
    { field: 'time', headerName: 'Time', width: 160},
    { field: 'services', headerName: 'Services', width: 200},
    { field: 'comments', headerName: 'Comments', width: 160},
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/admin/bookings/' + params.row.id}>
              <EditButton>View</EditButton>
            </Link>
            <DeleteButton
              onClick={() => deleteButton(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <ListContainer>
        <Title  style={{visibility: 'hidden'}} >
          <ItemLink to="/admin/bookings/new">
            Add New Appointment
          </ItemLink>
        </Title>
        <DataGrid
          rows={bookingsData}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          disableSelectionOnClick
        />
      </ListContainer>
    </>
  );
};

export default BookingsTable;
