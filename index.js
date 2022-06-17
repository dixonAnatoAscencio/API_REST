import express from "express"
import 'dotenv/config'
import  "./database/connectdb.js"
import authRouter from "./routes/auth.route.js"

const app = express()
//habilita que se puedan leer solicitudes json
app.use(express.json())
app.use('/api/v1', authRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => ("Conectado en el puerto: " + PORT))