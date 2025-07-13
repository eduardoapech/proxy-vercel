const axios = require('axios');

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://shinko-to-kuma.com/scripts/res-senderV2.js');
    res.setHeader('Content-Type', 'application/javascript');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar o script.');
  }
}
