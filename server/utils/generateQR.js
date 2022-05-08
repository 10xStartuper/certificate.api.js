const QRCode = require('qrcode');

const generateQR = async (data, { width, height }) => {
  const buffer = await QRCode.toBuffer(data, {
    color: {
      dark: '#000',
      light: '#fff',
    },
    width: width,
    height: height,
  });
  return buffer;
};

module.exports = generateQR;
