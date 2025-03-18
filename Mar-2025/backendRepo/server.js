import express from 'express'

import greetRouter  from './router/greetRouter.js'



const app = express()
const port = 5000

app.use('/api', greetRouter)

app.listen(port, () => {
    console.log("running on http://localhost:" + port

    )
})