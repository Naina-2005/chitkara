module.exports = (err, req, res, next) => {
  res.status(500).json({
    is_success: false,
    message: err.message || "Internal Server Error"
  });
};
