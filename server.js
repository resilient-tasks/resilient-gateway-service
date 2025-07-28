const path = require('path');
const dotenv = require('dotenv');
const gateway = require('express-gateway');

dotenv.config();

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
