const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Todays topic will be classes')
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`)
})