const r = require('express')();

r.get('/', (req, res) => res.send('Customer route'));

module.exports = r;