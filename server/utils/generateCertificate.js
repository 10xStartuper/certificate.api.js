const sharp = require('sharp');
const fs = require('fs');
const Certificate = require('../models/Certificate.model');

const generateCertificate = async ({ name, field }) => {
  try {
    const width = 2000;
    const height = 1414;
    const svgImage = `
        <svg width="${width}" height="${height}">
          <style>
          .title { fill: #001; font-size: 18px; font-weight: 600;}
          </style>
          <text x="267" y="378" text-anchor="start" class="title">${name}</text>
          <text x="267" y="404" text-anchor="start" class="title">${field}</text>
        </svg>
        `;
    const svgBuffer = Buffer.from(svgImage);

    const image = await sharp(
      './public/templates/certificate_01.png'
    ).composite([
      {
        input: svgBuffer,
        top: 0,
        left: 0,
      },
    ]);

    const certificate = new Certificate({
      name: name,
      field: field,
    });
    await image.toFile('./public/certificates/' + certificate._id + '.png');
    certificate.image = `${process.env.BASE_URL}/certificates/${certificate._id}.png`;
    await certificate.save();

    return certificate;
  } catch (error) {
    console.log(error);
  }
};

module.exports = generateCertificate;
