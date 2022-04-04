const config = {
  config: {
    messages: {
      success: 'We received your message! Thanks for inquiring.',
      error:
        'An error occurred during submittal. Please contact me at theleanestnails.business@gmail.com',
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
