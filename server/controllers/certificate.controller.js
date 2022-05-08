const generateCertificate = require('../utils/generateCertificate');

const createCertificate = async (req, res) => {
  const { name, field } = req.body;
  const certificate = await generateCertificate({ name, field });
  res.status(201).json(certificate);
};

module.exports = { createCertificate };
