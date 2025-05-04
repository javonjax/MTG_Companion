import { Request } from 'express';
export const convertQueryToURLSearchParams = (req: Request): URLSearchParams => {
  const params: URLSearchParams = new URLSearchParams();
  for (const key in req.query) {
    const value = req.query[key];
    params.set(String(key), String(value));
  }
  return params;
};
