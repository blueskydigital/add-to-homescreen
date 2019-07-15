'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/add-to-homescreen.min.js');
} else {
    module.exports = require('./cjs/add-to-homescreen.js');
}
