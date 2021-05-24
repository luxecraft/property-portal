import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input, TextArea } from '@progress/kendo-react-inputs';
import PostContact from '../SnsCall';
import Swal from 'sweetalert2';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) => (emailRegex.test(value) ? "" : "Please enter a valid email.");
const EmailInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} />
      {
        visited && validationMessage &&
        (<Error>{validationMessage}</Error>)
      }
    </div>
  );
};
const KendoForm = () => {
  const handleSubmit = (dataItem) => {
    if (dataItem != null)
      PostContact(dataItem);

    Swal.fire(
      'Success!',
      'Your message has been sent successfully!',
      'success'
    )
  };
  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement style={{ maxWidth: 650 }}>
          <fieldset className={'k-form-fieldset'}>
            <h2 className="text-center">Contact Form</h2>
            <div className="mb-3">
              <Field name={'name'} component={Input} label={'Name'} />
            </div>

            <div className="mb-4">
              <Field name={"email"} type={"email"} component={EmailInput} label={"Email"} validator={emailValidator} />
            </div>

            <div className="my-3">
              <Field name={"message"} type={"text"} component={TextArea} label={"Message"} placeholder={"Message"} />
            </div>


          </fieldset>
          <div className="submit-btn-wrapper">
            <button
              type={'submit'}
              className="btn btn-success submit-button"
              disabled={!formRenderProps.allowSubmit}
            >
              Submit
              </button>
          </div>
        </FormElement>
      )}
    />
  );
};

export default KendoForm