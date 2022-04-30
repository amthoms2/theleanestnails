// import { useState, useEffect } from 'react';
// import axios from 'axios';
import {
  ListContainer,
  Title,
  EditButton,
  DeleteButton,
  Image,
  Item,
  ItemLink,
} from '../DataTableElements';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { galleryData } from '../../../../data';
import { storage } from '../../../../firebase';
import { ref, deleteObject } from 'firebase/storage';

const GalleryTable = () => {
  // const [images, setImages] = useState([]);

  const deleteButton = (id, img) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure? This item will be permanently deleted.',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              console.log('img to delete', id, img);
              const desertRef = ref(storage, img);
              deleteObject(desertRef)
                .then(() => {
                  // File deleted successfully
                })
                .catch((error) => {
                  console.log(error);
                });
              // window.location.reload();
            } catch (err) {
              console.log(err);
              alert('Something went wrong!');
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
    {
      field: 'img',
      headerName: 'Images',
      width: 250,
      renderCell: (params) => {
        return (
          <Item>
            <Image src={params.row.img} alt="nail photo"></Image>
          </Item>
        );
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/admin/gallery/' + params.row._id}>
              <EditButton>View</EditButton>
            </Link>
            <DeleteButton
              onClick={() => deleteButton(params.row._id, params.row.img)}
            />
          </>
        );
      },
    },
  ];

  // useEffect(() => {
  //   const getSlots = async () => {
  //     try {
  //       const res = await axios.get('/api/availability/all');
  //       setAllSlots(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getSlots();
  //   console.log('rendered again');
  // }, []);

  return (
    <>
      <ListContainer>
        <Title>
          <ItemLink to="/admin/gallery/new">Add New Image</ItemLink>
        </Title>
        <DataGrid
          rows={galleryData}
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

export default GalleryTable;
