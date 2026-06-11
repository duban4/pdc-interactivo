import axios from 'axios'
import express from 'express'

const app = express()
const port = 3000
const api = "https://www.datos.gov.co/resource/p6dx-8zbt.json"

const getData = async ()=>{
    try {
        const res = await axios.get(api)
        return res.data

    } catch (error) {
        console.log(error)
        throw error;
    }
}

app.get("/datos",async(req,res)=>{
    try {
        const datosApi = await getData();
        res.json(datosApi)
    } catch (error) {
        res.status(500).json({error})
    }
})


app.listen(port,()=>{
    console.log(port)
})

