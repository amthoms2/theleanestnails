const config = {
  config: {
    messages: {
      success: 'Your appointment has been booked. Please check your email.',
      error:
        'An error occurred during submittal. Please contact us at support@xyz.com',
    },
    buttonText: 'Send',
    spinner: true,
  },
  fields: [
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
      placeholder: 'Enter your message...',
      required: false,
    },
  ],
};

export default config;