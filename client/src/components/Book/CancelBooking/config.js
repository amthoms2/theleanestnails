const config = {
  config: {
    messages: {
      success: 'Your appointment has successfully been cancelled',
      error:
        'An error occurred during submittal. Please click "Contact Me" at the bottom of this page',
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
    // {
    //   label: 'Email',
    //   type: 'email',
    //   placeholder: 'xyz@gmail.com',
    //   required: true,
    // },
    {
      label: 'Reason',
      type: 'textarea',
      placeholder: 'Enter reason for cancellation...',
      required: false,
    },
  ],
};

export default config;
