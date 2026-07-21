const sharp = require('sharp');

const width = 400;
const height = 400;
const radius = 200;

const circleMask = Buffer.from(
  `<svg width="${width}" height="${height}">
    <circle cx="${radius}" cy="${radius}" r="${radius}" fill="white"/>
  </svg>`
);

sharp('public/logo.png')
  .resize(width, height)
  .ensureAlpha()
  .composite([{
    input: circleMask,
    blend: 'dest-in'
  }])
  .png()
  .toFile('public/favicon.png')
  .then(() => console.log('favicon.png created successfully'))
  .catch(err => console.error('Error:', err));
