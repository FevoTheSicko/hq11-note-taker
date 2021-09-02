const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.Port || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./main/assets/js/routes')(app)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})