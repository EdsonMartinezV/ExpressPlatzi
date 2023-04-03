let logErrors =  (err, req, res, next) => {
  console.log('logErrors')
  console.error(err)
  next(err)
}

let errorHandler = (err, req, res, next) => {
  console.log('errorHandler')
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

let boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output: { statusCode, payload } } = err
    res.status(statusCode).json(payload)
  } else{
    next(err)
  }
}
  

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler
}
