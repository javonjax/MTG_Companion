import express, { Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import { convertQueryToURLSearchParams } from '../utils';
dotenv.config();
/*
  Environment variables.
*/
const SCRYFALL_CARDS_API_URL = process.env.SCRYFALL_CARDS_API_URL;
const SCRYFALL_CARDS_SEARCH_URL = process.env.SCRYFALL_CARDS_SEARCH_URL;

const router: Router = express.Router();

router.get('/cards', async (req: Request, res: Response) => {
  try {
    if (typeof SCRYFALL_CARDS_API_URL !== 'string') {
      throw new TypeError('API url not found.');
    }
    const apiResponse: globalThis.Response = await fetch(`${SCRYFALL_CARDS_API_URL}/random`);
    const responseData: unknown = await apiResponse.json();
    res.send(responseData);
  } catch (error) {
    console.log(error);
  }
});

router.get('/cards/search', async (req: Request, res: Response) => {
  try {
    if (typeof SCRYFALL_CARDS_SEARCH_URL !== 'string') {
      throw new TypeError('API url not found.');
    }

    const queryParams: string = convertQueryToURLSearchParams(req).toString();
    const apiResponse: globalThis.Response = await fetch(
      `${SCRYFALL_CARDS_SEARCH_URL}?${queryParams}`
    );
    const responseData: unknown = await apiResponse.json();
    res.send(responseData);
  } catch (error) {
    console.log(error);
  }
});

export default router;
