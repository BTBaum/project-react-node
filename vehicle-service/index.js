const { send } = require('micro')
const { router, get } = require('microrouter')

const microCors = require('micro-cors')
const cors = microCors({ allowHeaders: ['X-Requested-With','Access-Control-Allow-Origin','X-HTTP-Method-Override','Content-Type','Authorization','Accept'] })

const vehicles = require('./inventory')

module.exports = router(
  get('/vehicles', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    return send(res, 200, vehicles)
  })
)
