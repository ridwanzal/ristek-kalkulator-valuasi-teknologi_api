'use strict'

// all routes places in here
const login = require('./login');

module.exports = function(app) {
    // pass the instance of routes
    login(app);
}
