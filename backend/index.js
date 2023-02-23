const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express()
const port = 3004
app.use(express.json());
app.get('/', (req, res) => {
    res.send('khalid is very good boy')
})
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})