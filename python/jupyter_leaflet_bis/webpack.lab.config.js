const crypto = require('crypto');

// Workaround for loaders using "md4" by default, which is not supported in FIPS-compliant OpenSSL
const cryptoOrigCreateHash = crypto.createHash;
crypto.createHash = (algorithm) =>
  cryptoOrigCreateHash(algorithm == 'md4' ? 'sha256' : algorithm);

module.exports = {
  // Add the devtool property to enable source maps
  devtool: 'source-map',
  // Disable minification
  optimization: {
    minimize: false,
  },
};
