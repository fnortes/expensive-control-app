const notFound = (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) {
    res.status(404).json({
      error: 'Not found'
    })
  } else {
    next()
  }
}

module.exports = notFound
