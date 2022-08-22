const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }else {
//         next()
//     } 
// })

// app.use((req, res, next) => {
//     res.status(503).send('Currently maintenance.')
// })

app.use(express.json()) // --> this if for req param, to accept it as a json format.
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => console.log(`Server is up on port ${port}`))

