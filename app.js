import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import { PORT, URL, DB_HOST, DB_DATABASE, DB_PORT } from './config.js'
import Usuario from './models/Usuario.js'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongodb connected'))
    .catch(err => console.error(err))

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.post('/insert', async (req, res) => {
    const { matricula, nombre, correo, telefono, carrera } = req.body
    try {
        const newUser = new Usuario({ matricula, nombre, correo, telefono, carrera })
        await newUser.save()
        res.status(200).send('Usuario guardado')
    } catch (error) {
        console.error('Error al insertar el usuario', error)
        res.status(500).send('Error al insertar el usuario')
    }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})