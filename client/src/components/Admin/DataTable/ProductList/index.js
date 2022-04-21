import {
  ListContainer,
  Item,
  Title,
  // ProductButton,
  EditButton,
  Image,
  DeleteButton,
  ItemLink,
} from '../DataTableElements';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { productsRowsData } from '../../../../data';
// import { useState } from "react";

const ProductsTable = () => {
  // const [data, setData] = useState(userRows);

  const deleteButton = (id, img) => {
    // deleteProducts(id, dispatch)
    console.log('delete', id, img);
    // const filteredRow = data.filter((row) => row.id !== id);
    // setData(filteredRow);

    // const confirmed = window.confirm("Are you sure?");
    // if(confirmed) {
    //   deleteProducts(id, dispatch)
    // }
    confirmAlert({
      title: 'Confirm to submit',
      message:
        'Are you sure? This item will be permanently deleted.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            console.log('woild have been deleted');
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
    {
      field: 'title',
      headerName: 'Products',
      width: 250,
      renderCell: (params) => {
        return (
          <Item>
            <Image src={params.row.img} alt="nail product"></Image>
            {params.row.title}
          </Item>
        );
      },
    },
    { field: 'inStock', headerName: 'Stock', width: 160 },
    { field: 'quantity', headerName: 'Qty', width: 160 },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/admin/products/' + params.row.id}>
              <EditButton>View</EditButton>
            </Link>
            <DeleteButton
              onClick={() => deleteButton(params.row.id, params.row.img)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <ListContainer>
        <Title>
          <ItemLink to="/admin/products/new">
            Add New Product
          </ItemLink>
        </Title>
        <DataGrid
          rows={productsRowsData}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          disableSelectionOnClick
        />
      </ListContainer>
    </>
  );
};

export default ProductsTable;
