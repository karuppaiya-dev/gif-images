const QRCode = require('qrcode');

// Save as PNG file
QRCode.toFile('qrcode.png', 'https://karuppaiya-dev.github.io/gif-images/', (err) => {
  if (err) throw err;
  console.log('QR code saved!');
});