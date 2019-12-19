import express from 'express'
import bodyParser from 'body-parser'
import { countEmails } from './emails.js'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.post('/', (req, res) => res.send({ uniqueCount: countEmails(req.body) }))

app.get('/', (req, res) => res.send({ message: 'Send a post request on this url with a JSON list of email address' }))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
