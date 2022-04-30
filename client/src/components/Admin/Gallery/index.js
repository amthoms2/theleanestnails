import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  Top,
  H1,
  Bottom,
  Right,
  Left,
  Image,
  Form,
  Item,
  Label,
  FolderIcon,
  Input,
  Button,
} from '../Product/NewProduct/NewProductElements.js';
import { storage } from "../../../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const NewImage = () => {
  let navigate = useNavigate();
  const [file, setFile] = useState('');

  // const handleChange = (evt) => {
  //   console.log('in change');
  // };
  const handleClick = (evt) => {
    evt.preventDefault();

    if(file){
      const fileName = new Date().getTime() + file.name;
      console.log('filename', fileName)
      // const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
    //upload process begins here
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {

        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            console.log(error)
        }
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
    navigate("/admin/gallery", { replace: true });
    } else {
      alert('Something went wrong!')
    }
  }

  return (
    <>
      <Top>
        <H1>Add New Image</H1>
      </Top>
      <Bottom>
        <Left>
          <Image
            src={
              file
                ? URL.createObjectURL(file)
                : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
            }
            alt="image of added product"
          />
        </Left>
        <Right>
          <Form>
            <Item>
              <Label htmlFor="file">
                Image: <FolderIcon />
              </Label>
              <Input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                // style={{ display: 'none' }}
              />
            </Item>

            <Button disabled={!file} onClick={handleClick}>Submit</Button>
          </Form>
        </Right>
      </Bottom>
    </>
  );
};

export default NewImage;


