import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const { userName, p = 1, sort = 'sortName' } = req.query;

  const url = `https://api.setlist.fm/rest/1.0/user/${userName}/attended?p=${p}`;

  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': apiKey,
        'Accept': 'application/json',
        'Accept-Language': 'en',
      }
    });

    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json({ error: data });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
