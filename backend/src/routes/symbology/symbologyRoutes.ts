import express, { Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import { convertQueryToURLSearchParams } from '../../utils';
dotenv.config();

/*
  Environment variables.
*/
const SCRYFALL_SYMBOLOGY_URL = process.env.SCRYFALL_SYMBOLOGY_URL;

const router: Router = express.Router();

/*
  GET a list of all card symbology including mana symbols and counters.
*/
router.get('/symbology', async (req: Request, res: Response) => {
  try {
    if (typeof SCRYFALL_SYMBOLOGY_URL !== 'string') {
      throw new TypeError('Symbology API url not set.');
    }
    const apiResponse: globalThis.Response = await fetch(`${SCRYFALL_SYMBOLOGY_URL}`);
    console.log(apiResponse);
    const data: unknown = await apiResponse.json();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

export default router;
