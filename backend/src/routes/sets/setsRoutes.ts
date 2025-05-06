import express, { Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import { convertQueryToURLSearchParams } from '../../utils';
import {
  SetsAPIResponse,
  CardSetSchema,
  SetsAPIResponseSchema,
  CardSetList,
  CardSet,
} from '../../../../schemas/schemas.ts'; // TODO: update aliases.
dotenv.config();

/*
  Environment variables.
*/
const SCRYFALL_SETS_URL = process.env.SCRYFALL_SETS_URL;

const router: Router = express.Router();

/*
  GET a list of all avaiable sets of Magic cards.
*/
router.get('/sets', async (req: Request, res: Response) => {
  try {
    if (typeof SCRYFALL_SETS_URL !== 'string') {
      throw new TypeError('API url not set.');
    }
    const apiResponse: globalThis.Response = await fetch(`${SCRYFALL_SETS_URL}`);
    const data: unknown = await apiResponse.json();
    const parsedApiResponse = SetsAPIResponseSchema.safeParse(data);
    if (!parsedApiResponse.success) {
      throw new TypeError('Response data does not fit the desired schema.');
    }
    const parsedData: SetsAPIResponse = parsedApiResponse.data;
    const sets: CardSetList = parsedData.data;
    res.json({ sets });
  } catch (error) {
    console.log(error);
  }
});

/*
  GET information about a specific set using the MTG set code (usually 3 letters).
*/
router.get('/sets/:code', async (req: Request, res: Response) => {
  try {
    if (typeof SCRYFALL_SETS_URL !== 'string') {
      throw new TypeError('API url not set.');
    }
    const setCode: string = req.params.code;
    const apiResponse: globalThis.Response = await fetch(`${SCRYFALL_SETS_URL}/${setCode}`);
    const data: unknown = await apiResponse.json();
    const parsedApiResponse = CardSetSchema.safeParse(data);
    if (!parsedApiResponse.success) {
      throw new TypeError('Response data does not fit the desired schema.');
    }
    const set: CardSet = parsedApiResponse.data;
    res.json({ set });
  } catch (error) {
    console.log(error);
  }
});

export default router;
