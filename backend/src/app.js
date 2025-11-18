import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config()

// módulo enrutador
import userRoutes from "./routes/userRoutes.js"
import customerRoutes from "./routes/customerRoutes.js"
import salesRoutes from "./routes/salesRoutes.js"

// configuración básica
const app = express()
app.use(cors())
app.use(bodyParser.json())
const PORT = process.env.BE_PORT

app.use("/api", userRoutes)
app.use("/api", customerRoutes)
app.use("/api", salesRoutes)

app.listen(PORT, () =>
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
)

