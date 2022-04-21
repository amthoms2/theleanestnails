import { useState } from 'react';
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
  TextArea,
  Select,
} from './NewProductElements';

const NewProduct = () => {
  const [file, setFile] = useState('');
  const [inputs, setInputs] = useState({});

  const handleChange = (evt) => {
    setInputs((prev) => {
      return { ...prev, [evt.target.name]: evt.target.value };
    });
  };

  return (
    <>
      <Top>
        <H1>Add New Product</H1>
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

            <Item>
              <Label>Title</Label>
              <Input
                name="title"
                type="text"
                placeholder="Product Name"
                onChange={handleChange}
              />
            </Item>

            <Item>
              <Label>Description</Label>
              <TextArea
                name="description"
                placeholder="Description"
                onChange={handleChange}
              ></TextArea>
            </Item>

            <Item>
              <Label>Price</Label>
              <Input
                name="price"
                type="number"
                min="0"
                placeholder="Amount"
                onChange={handleChange}
              />
            </Item>

            <Item>
              <Label>Qty</Label>
              <Input
                name="quantity"
                type="number"
                min="0"
                placeholder="Qty"
                onChange={handleChange}
              />
            </Item>

            <Item>
              <Label>Nail Shape</Label>
              <Select name="shape" onChange={handleChange}>
                <option disabled selected></option>
                <option value="Short Oval">Short Oval</option>
                <option value="Long Stiletto">Long Stiletto</option>
                <option value="Short Square">Short Square</option>
                <option value="other">Other</option>
              </Select>
            </Item>

            <Item>
              <Label>Stock</Label>
              <Select name="inStock" onChange={handleChange}>
                <option disabled selected></option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Select>
            </Item>
            <Button
              disabled={
                !inputs.title ||
                !file ||
                !inputs.description ||
                !inputs.price ||
                !inputs.inStock ||
                !inputs.shape
              }
            >
              Send
            </Button>
          </Form>
        </Right>
      </Bottom>
    </>
  );
};

export default NewProduct;
