const path = require('path')
const fs = require('fs')

module.exports = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../../notes.html'))
    })
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../index.html'))
    })
    app.get('/api/notes', (req, res) => {
        const dbData = fs.readFileSync(path.resolve(__dirname, '../../../db/db.json'))
        const data = JSON.parse(dbData)
        return data
    })
    app.post('/api/notes', (req, res) => {
        console.log("adding data")
        const newData = {
            id: Date.now(),
            title: req.body.title,
            text: req.body.text
        }
        const datastrifiy = JSON.stringify(newData)
        console.log(newData)
        fs.writeFile(path.resolve(__dirname, '../../../db/db.json'), datastrifiy, (err) => {
            if (err) throw err
        })
    })
}