function logger(req, res, next) {
  console.log(
    `Recieved method ${req.method} for url: ${req.url} at ${new Date()}`
  );
  next();
}

module.exports = logger;
