const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

function randomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

app.post('/addUserToTeam', (req, res) => {

   //Five steps:
   //1. Adding user to team...
   //2. Creating JIRA account for user...
   //3. Provisioning Azure subscription for user...
   //4. Updating team email distro...
   //5. Finishing up...

   const time = randomInterval(500, 6000) //between 500ms and 6000ms (0.5s - 6s)
   res.send(time);

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
