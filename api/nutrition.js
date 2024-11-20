import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const query = req.query.query;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
      const response = await axios.get('https://api.calorieninjas.com/v1/nutrition', {
        params: { query },
        headers: {
          'X-Api-Key': process.env.CALORIE_API_KEY,
        },
      });

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
