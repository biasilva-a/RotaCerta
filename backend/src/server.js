import express from 'express';
import motoristaRoutes from './routes/motoristaRoutes.js';

const app = express()
const PORT = 3000

app.use(express.json())
app.use("/motorista", motoristaRoutes)

app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}/motorista`);
})

