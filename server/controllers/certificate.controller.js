const generateCertificate = require('../utils/generateCertificate');

const createCertificate = async (req, res) => {
  const { name, field } = req.body;
  const certificate = await generateCertificate({ name, field });
  // res.status(201).json(certificate);
  res.redirect(certificate.image);
};

module.exports = { createCertificate };
