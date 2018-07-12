const { send, json } = require('micro')
const { router, post } = require('microrouter')

// Need to resolve CORS issue with POST from react frontend

module.exports = router(
  post('/', async (req, res) => {
    const subscription = await json(req)

    // TODO: "Save" subscription
    // Ideally would have user subscriptions saved to a database

    // TODO: Return response

    // User subscriptions would be saved with an id
    // I would create a GET route on the subscription micro service and
    // get subscription data for success page based on user/subscription id
  })
)