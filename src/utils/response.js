exports.successResponse = (data, message = 'Success') => ({
  success: true,
  message,
  data,
});

exports.errorResponse = (message = 'Error', code = 500) => ({
  success: false,
  message,
  code,
});
