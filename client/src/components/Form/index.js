import { useState, useEffect, memo, useCallback, useRef } from 'react';
import {
  // FormContainer,
  MainContainer,
  Forms,
  Input,
  TextArea,
  MessageContainer,
  SpinnerImg,
  FormBottom,
  Button,
  // FormButton,
} from './FormElements';

const Spinner = ({ loading }) => {
  return loading ? (
    <SpinnerImg alt="spinner gif" src="https://i.imgur.com/01yMDgZ.gif" />
  ) : null;
};

const Message = ({ status, text }) => {
  return status && status !== 'loading' ? (
    <MessageContainer status={status}>{text}</MessageContainer>
  ) : null;
};

const Field = ({ field, onChange }) => {
  const { label, ...attributes } = field;

  //attributes takes in remaining object props and vals
  return (
    <>
      <label>{label}</label>
      {(() => {
        switch (attributes.type) {
          case 'textarea':
            return (
              <TextArea name={label} onChange={onChange} {...attributes} />
            );
          default:
            return <Input name={label} onChange={onChange} {...attributes} borderRadius={"borderRadius"}/>;
        }
      })()}
    </>
  );
};

// Makes sure props and everything get passed down correctly; works with useCallback
// It won't rerender if the props passed down haven't changed
const MemoField = memo(Field);

const Form = ({ form, onSubmit, status }) => {
  const refField = useRef();

  const [fields, setFields] = useState(
    form.fields.map((field) => ({
      ...field,
      name: field.name || field.label,
      value: '',
    }))
  );

  //maps over every field in state; if field's name is same name that was passed to func, update the field with the new value or just return the field as was
  const updateFields = (name, value) => {
    const newFields = fields.map((field) => {
      return field.name === name ? { ...field, value } : field;
    });
    setFields(newFields);
  };

  useEffect(() => {
    refField.current = updateFields;
  });

  useEffect(() => {
    if (status === 'success') {
      setFields(fields.map((field) => ({ ...field, value: '' })));
    }
    // eslint-disable-next-line
  }, [status]);

  // adding useCallback allows for this to re-render ONLY if the dependency changes
  const handleChange = useCallback((evt) => {
    const name = evt.target.getAttribute('name');
    const value = evt.target.value;
    const update = () => {
      refField.current(name, value);
    };
    update();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = fields.reduce((fields, field) => {
      return { ...fields, [field.name]: field.value };
    }, {});
    onSubmit(formData);
  };

  return (
    <>
      {/* <FormContainer> */}
        <MainContainer>
          <Forms onSubmit={handleSubmit}>
            {form.fields.map((field) => {
              return (
                <MemoField
                  key={field.name}
                  field={field}
                  onChange={handleChange}
                />
              );
            })}

            <FormBottom>
              {/* <FormButton type="submit">
            {form.config.buttonText || 'Submit'}
          </FormButton> */}
              <Button
                disabled={status === 'success'}
                type="submit"
                primary="true"
                dark="true"
                hover="false"
              >
                {form.config.buttonText || 'Submit'}
              </Button>
              <Spinner loading={status === 'loading' && form.config.spinner} />
            </FormBottom>
            <Message status={status} text={form.config.messages[status]} />
          </Forms>
        </MainContainer>
      {/* </FormContainer> */}
    </>
  );
};

export default Form;
