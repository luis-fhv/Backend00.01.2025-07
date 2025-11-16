import 'dotenv/config.js';
import express from 'express';
import router from './router/index.js';
import { connectDB } from './db/db.js';

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

connectDB();

// Ruta raíz
app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Welcome to the API' });
});

// Autoload routers
app.use('/api', router);

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
