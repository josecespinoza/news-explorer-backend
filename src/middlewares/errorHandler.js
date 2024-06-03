module.exports = (err, req, res, next) => {
  res.json({ message: err.message });
};
