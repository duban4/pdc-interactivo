import express from 'express'
import cors from 'cors'
import secopRoutes from '../src/routes/secopRoutes.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use("/datos",secopRoutes)

app.listen(port,() =>{
    console.log(`🚀 Servidor back corriendo en el puerto ${port}/datos`)
})



