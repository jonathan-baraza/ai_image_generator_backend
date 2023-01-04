const errorHandler = (err, req, res, next) => {
  if (err) {
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || "Something went wrong";

    res.status(200).json({ success: false, errorMessage });
  }
};

module.exports = errorHandler;
