import express, { Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import { convertQueryToURLSearchParams } from '../../utils';
import { SymbologyAPIResponse, SymbologyAPIResponseSchema } from '../../../../schemas/schemas';
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
    const data: unknown = await apiResponse.json();
    const parsedApiResponse = SymbologyAPIResponseSchema.safeParse(data);
    if (!parsedApiResponse.success) {
      console.log(parsedApiResponse.error.issues);
      throw new TypeError('Response data does not fit the desired schema.');
    }
    const symbologyData: SymbologyAPIResponse = parsedApiResponse.data;
    res.json(symbologyData);
  } catch (error) {
    console.log(error);
  }
});

export default router;
