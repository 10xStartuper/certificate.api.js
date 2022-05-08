const {
  createCertificate,
} = require('../../controllers/certificate.controller');

const router = require('express').Router();

router.post('/', createCertificate);

module.exports = router;
