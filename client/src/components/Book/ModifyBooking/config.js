const config = {
  config: {
    messages: {
      success: 'Your appointment has successfully been modified',
      error:
        'An error occurred during submittal. Please click "Contact Me" at the bottom of this page and contact Aleana',
    },
    buttonText: 'Send',
    spinner: true,
  },
  fields: [
    {
      label: 'Confirmation #',
      placeholder: 'Enter Confirmation Number',
      required: true,
    },
    {
      label: 'Name',
      placeholder: 'Dana Scully',
      required: true,
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'xyz@gmail.com',
      required: true,
    },
    {
      label: 'Number',
      // type: 'email',
      placeholder: '555-555-5555',
      required: true,
    },
    {
      label: 'Comments',
      type: 'textarea',
      placeholder: 'Enter reason for change...',
      required: false,
    },
  ],
};

export default config;
