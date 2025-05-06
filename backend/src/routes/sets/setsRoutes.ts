import express, { Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import { convertQueryToURLSearchParams } from '../../utils';
import {
  SetsAPIResponse,
  CardSetSchema,
  SetsAPIResponseSchema,
  CardSetList,
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
router.get('/cards/sets', async (req: Request, res: Response) => {
  try {
    if (typeof SCRYFALL_SETS_URL !== 'string') {
      throw new TypeError('API url not set.');
    }

    const apiResponse: globalThis.Response = await fetch(`${SCRYFALL_SETS_URL}`);
    const responseData: unknown = await apiResponse.json();
    const parsedApiResponse = SetsAPIResponseSchema.safeParse(responseData);
    if (!parsedApiResponse.success) {
      throw new TypeError('Response data does not fit the desired schema.');
    }
    const result: SetsAPIResponse = parsedApiResponse.data;
    const sets: CardSetList = result.data;
    res.json({ sets: sets });
  } catch (error) {
    console.log(error);
  }
});

export default router;
