const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Hello! I am Tim Wang! Welcome to my site... @_<! Tim Wang Love Katie Ma forever!!!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))