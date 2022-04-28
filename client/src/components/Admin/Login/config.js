const config = {
  config: {
    messages: {
      success: 'Success!',
      error:
        'An error occurred. Please contact amthoms2.business@gmail.com',
    },
    buttonText: 'Send',
    spinner: true,
  },
  fields: [
    {
      label: 'username',
      required: true,
    },
    {
      label: 'password',
      type: 'password',
      required: true,
    },
  ],
};

export default config;
