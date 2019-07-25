const r = require('express')();

// services.
const { getConfig } = require('./config.service');

// config get.
r.get('/', getConfig );

module.exports = r;