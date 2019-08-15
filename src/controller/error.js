exports.get404 = (req, res) => {
  res.status(404).render('404');
};

exports.get500 = (err, req, res, next) => {
  res.status(500).render('500');
};
