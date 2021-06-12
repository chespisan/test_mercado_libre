
export const requestResponse = (res, statusCode, data, message) => {
  res.status(statusCode).json({
    data,
    message
  })
}