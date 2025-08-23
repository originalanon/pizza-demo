const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/addUser', (req, res) => {

   //Five steps:
   //1. Adding user to team...
   //2. Creating JIRA account for user...
   //3. Provisioning Azure subscription for user...
   //4. Updating team email distro...
   //5. Finishing up...

   
   res.send(req);

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
