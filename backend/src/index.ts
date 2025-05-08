import express, { Request, Response } from 'express';
import cors from 'cors';
import cardRoutes from './routes/cards/cardsRoutes';
import setsRoutes from './routes/sets/setsRoutes.ts';
import symbologyRoutes from './routes/symbology/symbologyRoutes.ts';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use(cardRoutes);
app.use(setsRoutes);
app.use(symbologyRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('MTG App.');
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
