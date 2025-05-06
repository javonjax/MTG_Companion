import express, { Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import { convertQueryToURLSearchParams } from '../utils';
dotenv.config();

/*
  Environment variables.
*/
const SCRYFALL_CARDS_RANDOM_URL = process.env.SCRYFALL_CARDS_RANDOM_URL;
const SCRYFALL_CARDS_SEARCH_URL = process.env.SCRYFALL_CARDS_SEARCH_URL;
const MTG_IO_CARDS_SEARCH_URL = process.env.MTG_IO_CARDS_SEARCH_URL;
const SCRYFALL_SETS_URL = process.env.SCRYFALL_SETS_URL;

const router: Router = express.Router();

/*
  GET a random card. This endpoint will be used for the wordle style MTG card guesser (see LOLdle).
*/
router.get('/cards/random', async (req: Request, res: Response) => {
  try {
    if (typeof SCRYFALL_CARDS_RANDOM_URL !== 'string') {
      throw new TypeError('Random API url not set.');
    }
    const apiResponse: globalThis.Response = await fetch(`${SCRYFALL_CARDS_RANDOM_URL}`);
    const responseData: unknown = await apiResponse.json();
    res.send(responseData);
  } catch (error) {
    console.log(error);
  }
});

/*
  GET cards using a text search string.
  NOTE: The scryfall API does not support querying by oracle text
        but it does provide more options for images, links for purchasing cards,
        card keywords, etc. Use the searchbycardtext endpoint for searching by oracle text.
*/
router.get('/cards/search', async (req: Request, res: Response) => {
  try {
    if (typeof SCRYFALL_CARDS_SEARCH_URL !== 'string') {
      throw new TypeError('Search API url not set.');
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

/*
  GET cards using a text search string. 
  This endpoint is specifically for searching for cards by their oracle text.
*/
router.get('/cards/searchbycardtext', async (req: Request, res: Response) => {
  try {
    if (typeof MTG_IO_CARDS_SEARCH_URL !== 'string') {
      throw new TypeError('MTG IO search API url not set.');
    }

    const queryParams: string = convertQueryToURLSearchParams(req).toString();
    console.log(`${MTG_IO_CARDS_SEARCH_URL}?${queryParams}`);
    const apiResponse: globalThis.Response = await fetch(
      `${MTG_IO_CARDS_SEARCH_URL}?${queryParams}`
    );

    const responseData: unknown = await apiResponse.json();
    res.send(responseData);
  } catch (error) {
    console.log(error);
  }
});

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
    res.send(responseData);
  } catch (error) {
    console.log(error);
  }
});

export default router;
